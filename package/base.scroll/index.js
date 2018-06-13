import React, { Component, createRef } from 'react'
import { string, element, bool, object } from 'prop-types'
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
      isMount: false
    }
  }
  componentDidMount() {
    const { defaultX, defaultY } = this.props
    this.setState({ isMount: true })
    this._getViewInfo()
    this._updateOnFrame(view => console.log(view))
    this._addListeners()
  }
  componentDidUpdate() {
    this._updateOnFrame()
  }

  _addListeners = () => {
    console.log(this.view)
    if (typeof document === 'undefined' || !this.view) return
    console.log(this.dom.current)
    this.dom.current.addEventListener('scroll', this._scrollHandler)
    // todo 是否监听resize事件？
  }

  _scrollStart = () => {

  }

  _scrollEnd = () => {

  }

  _getViewInfo = () => {
    const { scrollTop, scrollHeight, clientHeight, clientWidth } = this.dom.current
    this.view = {
      width: this.dom.current.clientWidth,
      height: this.dom.current.clientHeight,
      contentWidth: this.dom.current.scrollWidth,
      contentHeight: this.dom.current.scrollHeight,
      ySize: Math.pow(this.dom.current.clientHeight, 2) / this.dom.current.scrollHeight - this.scrollbarWidth,
      xSize: Math.pow(this.dom.current.clientWidth, 2) / this.dom.current.scrollWidth
    }
  }

  update = cb => {
    const { scrollTop, scrollHeight, clientHeight, clientWidth } = this.dom.current
    this.view = {
      width: this.dom.current.clientWidth,
      height: this.dom.current.clientHeight,
      contentWidth: this.dom.current.scrollWidth,
      contentHeight: this.dom.current.scrollHeight,
      ySize: Math.pow(this.dom.current.clientHeight, 2) / this.dom.current.scrollHeight,
      xSize: Math.pow(this.dom.current.clientWidth, 2) / this.dom.current.scrollWidth
    }
    if (typeof cb !== 'function') return
    const st = clientHeight * scrollTop / scrollHeight
    cb(st, this.dom.current.scrollLeft)
  }

  // from https://github.com/malte-wessel/react-custom-scrollbars
  _raf = cb => {
    if (this.requestFrame) cancelAnimationFrame(this.requestFrame)
    this.requestFrame = requestAnimationFrame(() => {
      this.requestFrame = undefined
      cb()
    })
  }

  _detectScrolling() {
    if (this.scrolling) return
    this.scrolling = true
    // this.handleScrollStart()
    this.detectScrollingInterval = setInterval(() => {
      if (this.lastViewScrollLeft === this.viewScrollLeft
        && this.lastViewScrollTop === this.viewScrollTop) {
        clearInterval(this.detectScrollingInterval)
        this.scrolling = false
        console.log('stop')
      }
      this.lastViewScrollLeft = this.viewScrollLeft
      this.lastViewScrollTop = this.viewScrollTop
    }, 100)
  }

  _updateOnFrame = (cb) => {
    this._raf((() => this.update(cb)))
  }

  _scrollHandler = () => {
    const { onScroll, onScrollStart, onScrollEnd } = this.props
    this._updateOnFrame((scrollTop, scrollLeft) => {
      this.scrollTop = scrollTop
      this.scrollLeft = scrollLeft
      console.log('update')
      css(this.vertical.current, { top: `${this.scrollTop}px` })
      css(this.horizontal.current, { left: `${this.scrollLeft}px` })
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

  _getYThumbPos = () => {
    const { height, contentHeight } = this.view
    return height / contentHeight * this.scrollTop
  }

  _getXThumbPos = () => {
    const { width, contentWidth } = this.view
    return width / contentWidth * this.scrollTop
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
    console.log('->', this.view)
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
          mr={`-${this.scrollbarWidth}px`}
          mb={`-${this.scrollbarWidth}px`}
        >
          {children}
        </Flex>
        {this.state.isMount && horizontal && this.scrollbarWidth > 0 && (
          <Flex absolute lt='0' bm='0' w='100%' h={`${this.scrollbarWidth}px`}>
            <Flex
              innerRef={this.horizontal}
              absolute
              round="20px"
              bgc="rgba(0,0,0,.5)"
              w={`${this.view.xSize}px`}
              h="100%"
              lt={this.scrollLeft}
            />
          </Flex>
        )}
        {this.state.isMount && vertical && this.scrollbarWidth > 0 && (
          <Flex absolute tp='0' rt='0' h='100%' w={`${this.scrollbarWidth}px`}>
            <Flex
              innerRef={this.vertical}
              absolute
              round="20px"
              bgc="rgba(0,0,0,.5)"
              w="100%"
              h={`${this.view.ySize}px`}
              tp={this.scrollTop}
            />
          </Flex>
        )}
      </Flex>
    )
  }

  _move = () => {
    // const to = this.dom.current.scrollTop
    // console.log(to)
    // const info = this._getThumbInfo()
    // this.setState({ y: (to - info.size) * info.scale + 'px' })
  }

  _renderScrollbar = direction => {
    const isX = direction === 'x'
    return (
      <Flex
        absolute
        lt={isX && '0'}
        bm={isX && '0'}
        tp={!isX && '0'}
        rt={!isX && '0'}
        w={isX ? '100%' : `${this.scrollbarWidth}px`}
        h={isX ? `${this.scrollbarWidth}px` : '100%'}
      >
        <Flex
          absolute
          round="20px"
          bgc="rgba(0,0,0,.5)"
          w={isX ? `${this._getXThumbPos()}px` : '100%'}
          h={!isX ? `${this._getYThumbPos()}px` : '100%'}
          tp={!isX && this.scrollTop}
          lt={isX && this.scrollLeft}
        />
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
