/**
 * TODO 1. https://github.com/frontend-collective/react-sortable-tree/issues/338
 * TODO    看bug修复情况转移至纯 react-sortable-tree 组件
 * TODO 2. 使用 popup 替换 react-contentmenu 方案
 */
import React, { Component } from 'react'
import { bool, string, object, oneOfType, func, number, arrayOf, element } from 'prop-types'
import SortableTree from 'react-sortable-tree'
import nodeContentRenderer from './node-content-rerender'
import treeNodeRenderer from './tree-node-rerender'
import Flex from '../base.flex'
import 'react-sortable-tree/style.css'

const dfs = (source, search) => {
  if (search) {
    return source.filter(s => {
      if (s.children) s.children = dfs(s.children, search)
      if (s.children && s.children.length) {
        s.expanded = true
        return true
      }
      return String(s.title).indexOf(search) > -1
    })
  }
  return source
}

export default class NodeTree extends Component {
  constructor(props) {
    super(props)
    this.state = {
      match: this.props.data
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.search !== state.search) {
      const match = dfs(props.data, props.search)
      return {
        ...props,
        match
      }
    }
    return null
  }

  _onChange = (val) => {
    const { beforeChange, afterChange } = this.props
    if (beforeChange) beforeChange(val)
    this.setState({ match: val })
    if (afterChange) afterChange(val)
  }

  _placeholderRenderer = () => {
    const { placeholder, search } = this.props
    if (typeof placeholder === 'function') {
      return placeholder(search)
    }
    return <Flex vc hc>
      <span>
        {search ?
          (placeholder && placeholder.noSearchResult || 'No search results found') :
          (placeholder && placeholder.noData || 'Ops! no data')}
      </span>
    </Flex>
  }

  render() {
    const {
      content,
      height,
      iconFormater,
      onClick,
      width,
      search,
      ...rest
    } = this.props
    const treeData = dfs(this.state.match, search)
    return <div style={{ width, height }}>
      <SortableTree
        theme={{
          nodeContentRenderer,
          treeNodeRenderer,
          scaffoldBlockPxWidth: 25,
          rowHeight: 25,
          slideRegionSize: 50
        }}
        treeData={treeData}
        onChange={this._onChange}
        placeholderRenderer={this._placeholderRenderer}
        generateNodeProps={rowInfo => ({
          content,
          onClick: onClick && onClick(rowInfo),
          ...(iconFormater ? { icons: [iconFormater(rowInfo.node)] } : {})
        })}
        {...rest}
      />
    </div>
  }
}

NodeTree.propTypes = {
  afterChange: func,
  beforeChange: func,
  content: func,
  data: arrayOf(object),
  height: string,
  iconFormater: func,
  onClick: func,
  placeholder: oneOfType([func, object]),
  rowHeight: oneOfType([number, func]),
  search: string,
  width: string
}

NodeTree.defaultProps = {
  data: [],
  height: '200px',
  width: '200px'
}
