import React, { Component, cloneElement, isValidElement } from 'react'
import { bool, func, array, object, oneOfType, string, element } from 'prop-types'
import kindOf from 'kind-of'
import Flex from '@react-alpha/base.flex'
import Text from '@react-alpha/base.text'

class ListGroup extends Component {
  state = {
    doFilter: !this.props.expand,
    isOver: false
  }

  _titleOverHandle = (evt) => {
    if (this.props.hasMouse && evt.pointerType === 'mouse') {
      this.setState({ isOver: true })
    }
  }

  _titleLeaveHandle = () => this.setState({ isOver: false })
  _titleClickHandle = () => this.setState({ doFilter: !this.state.doFilter })

  _childrenRender = () => {
    const { list, itemRender } = this.props
    if (kindOf(list) === 'array') {
      const dataAfterFilter = this.state.doFilter ? list.filter(d => d.keep) : list
      if (dataAfterFilter.length === 0) return null
      return dataAfterFilter.map(item => itemRender(item))
    }
  }

  _actionRender = () => {
    const { actionRender, info } = this.props
    if (!actionRender) return null
    const Child = actionRender(info)
    const Props = {}
    if (kindOf(Child) === 'string') return Child
    if (kindOf(Child) === 'function') return Child()
    if (!isValidElement(Child)) throw Error('actionRender should return a react elemant')
    if (Child.props.onClick)
      Props.onClick = (e) => {
        e.stopPropagation()
        Child.props.onClick()
      }
    if (Child.props.onMouseDown)
      Props.onClick = (e) => {
        e.stopPropagation()
        Child.props.onMouseDown()
      }
    if (Child.props.onMouseUp)
      Props.onClick = (e) => {
        e.stopPropagation()
        Child.props.onMouseUp()
      }
    if (Child.props.onTouchStart)
      Props.onClick = (e) => {
        e.stopPropagation()
        Child.props.onTouchStart()
      }
    if (Child.props.onTouchEnd)
      Props.onClick = (e) => {
        e.stopPropagation()
        Child.props.onTouchEnd()
      }
    if (Props.onClick || Props.onMouseDown || Props.onMouseUp || Props.onTouchStart || Props.onTouchEnd) {
      Props.onPointerDown = (e) => {
        e.stopPropagation()
      }
    }
    return cloneElement(Child, Props)
  }

  render() {
    const { title, hasMouse, actionRender, itemRender, ...rest } = this.props
    return (
      <Flex column className='ra-case-list-group' {...rest}>
        <Flex
          className='ra-case-list-group-title-container'
          onPointerOver={this._titleOverHandle}
          onPointerLeave={this._titleLeaveHandle}
          onPointerDown={this._titleClickHandle}
        >
          {kindOf(title) !== 'string' ? title :
            <Text as="center" className='ra-case-list-group-title'>{title}</Text>
          }
          {!hasMouse && this._actionRender()}
          {hasMouse && this.state.isOver && this._actionRender()}
        </Flex>
        <Flex column className='ra-case-list-group-list-container'>
          {this._childrenRender()}
        </Flex>
      </Flex>
    )
  }
}

ListGroup.propTypes = {
  /* align-self */
  info: object,
  expand: bool,
  hasMouse: bool,
  /* if function return a react element, then must return one element */
  actionRender: func.isRequired,
  itemRender: func.isRequired,
  list: array.isRequired,
  title: oneOfType([string, element])
}

ListGroup.defaultProps = {
  expand: true,
  hasMouse: true,
  actionRender: () => { },
  itemRender: () => { },
  list: []
}

export default ListGroup
