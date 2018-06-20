import React, { Component, createRef } from 'react'
import { string, element, bool, object } from 'prop-types'
import ReactResize from 'react-resize-detector'
import styled from 'styled-components'
import css from 'dom-css'
import Flex from '../base.flex'
import { getScrollbarWidth } from './utils'

export default class Scroll extends Component {
  constructor(props) {
    super(props)
    this.dom = createRef()
    this.horizontal = createRef()
    this.vertical = createRef()
    this.scrollbarWidth = getScrollbarWidth()
    this.state = {
      view: {
        height: null,
        width: null,
        contentHeight: null,
        contentWidth: null,
        xSize: null,
        ySize: null
      }
    }
  }
  componentDidMount() {
    const { defaultX, defaultY } = this.props
    this.setState({ isMount: true })
    this._getViewInfo()
    this._updateOnFrame()
    this._addListeners()
  }
  componentDidUpdate() {
    this._updateOnFrame()
  }

  _addListeners = () => {
    if (typeof document === 'undefined' || !this.state.view) return
    console.log(this.dom.current)
    this.dom.current.addEventListener('scroll', this._scrollHandler)
  }

  _getViewInfo = () => {
    const { scrollHeight, clientHeight, clientWidth, scrollWidth } = this.dom.current
    this.setState({
      view: {
        width: clientWidth,
        height: clientHeight,
        contentWidth: scrollWidth,
        contentHeight: scrollHeight,
        ySize: clientHeight === scrollHeight ? 0 : Math.pow(clientHeight, 2) / scrollHeight,
        xSize: clientWidth === scrollWidth ? 0 : Math.pow(clientWidth, 2) / scrollWidth
      }
    })
    console.log(this.dom.current.offsetHeight)
  }

  update = cb => {
    const { scrollTop, scrollLeft } = this.dom.current
    const { width, height, contentHeight, contentWidth } = this.state.view
    if (typeof cb !== 'function') return
    const st = height * scrollTop / contentHeight
    const sl = width * scrollLeft / contentWidth
    cb(st, sl)
  }

  // from https://github.com/malte-wessel/react-custom-scrollbars
  _raf = cb => {
    if (this.requestFrame) cancelAnimationFrame(this.requestFrame)
    this.requestFrame = requestAnimationFrame(() => {
      this.requestFrame = undefined
      cb()
    })
  }

  _updateOnFrame = (cb) => {
    this._raf((() => this.update(cb)))
  }

  _scrollHandler = () => {
    const { onScroll, onScrollStart, onScrollEnd } = this.props
    const { xSize, ySize } = this.state.view
    this._updateOnFrame((scrollTop, scrollLeft) => {
      this.scrollTop = scrollTop
      this.scrollLeft = scrollLeft
      if (ySize && this.scrollbarWidth > 0) css(this.vertical.current, { top: `${this.scrollTop}px` })
      if (xSize && this.scrollbarWidth > 0) css(this.horizontal.current, { left: `${this.scrollLeft}px` })
      if (onScroll) onScroll(scrollTop, scrollLeft)
    })
    if (this.scrolling) return
    this.scrolling = true
    if (onScrollStart) onScrollStart()
    this.scrollChecker = setInterval(() => {
      if (this.lastViewScrollLeft === this.viewScrollLeft
        && this.lastViewScrollTop === this.viewScrollTop) {
        clearInterval(this.scrollChecker)
        this.scrolling = false
        if (onScrollEnd) onScrollEnd()
      }
      this.lastViewScrollLeft = this.viewScrollLeft
      this.lastViewScrollTop = this.viewScrollTop
    }, 100)
  }

  render() {
    const {
      children,
      ignoreMac,
      thumb,
      track,
      showWhenOver,
      showWhenScrolling,
      width,
      horizontal,
      vertical,
      ...rest
    } = this.props
    console.log('->', this.state.view)
    return (
      <Flex
        nonOverflow
        rebound
        relative
        onScroll={this._move}
        {...rest}
      >
        <Flex
          innerRef={this.dom}
          mr={this.state.view.ySize && `-${this.scrollbarWidth}px`}
          mb={this.state.view.xSize && `-${this.scrollbarWidth}px`}
        >
          {children}
        </Flex>
        {this.state.isMount &&
          horizontal &&
          this.scrollbarWidth > 0 &&
          this.state.view.xSize !== 0 && (
            <Flex absolute lt='0' bm='0' w='100%' h={`${this.scrollbarWidth}px`}>
              <Flex
                innerRef={this.horizontal}
                absolute
                round="20px"
                bgc="rgba(0,0,0,.5)"
                w={`${this.state.view.xSize}px`}
                h="100%"
                lt={this.scrollLeft}
              />
            </Flex>
          )}
        {this.state.isMount &&
          vertical &&
          this.scrollbarWidth > 0 &&
          this.state.view.ySize !== 0 && (
            <Flex absolute tp='0' rt='0' h='100%' w={`${this.scrollbarWidth}px`}>
              <Flex
                innerRef={this.vertical}
                absolute
                round="20px"
                bgc="rgba(0,0,0,.5)"
                w="100%"
                h={`${this.state.view.ySize}px`}
                tp={this.scrollTop}
              />
            </Flex>
          )}
          <ReactResize handleHeight handleWidth onResize={this._getViewInfo}/>
      </Flex>
    )
  }
}

Scroll.propTypes = {
  /* align-self */
  force: bool,
  thumb: object,
  track: object,
  showWhenOver: bool,
  showWhenScrolling: bool,
  width: string,
  horizontal: bool,
  vertical: bool
}

Scroll.defaultProps = {
  ignoreMac: true,
  horizontal: true,
  vertical: true
}
