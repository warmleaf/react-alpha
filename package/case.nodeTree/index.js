/**
 * ! https://github.com/frontend-collective/react-sortable-tree/issues/338 *
 * ! 看bug修复情况转移至纯 react-sortable-tree 组件 *
 */
import React, { Component } from 'react'
import { bool, string, object, oneOfType, func, number, arrayOf } from 'prop-types'
import SortableTree from 'react-sortable-tree'
import FileExplorerTheme from 'react-sortable-tree-theme-file-explorer'
import 'react-sortable-tree/style.css'

export default class NodeTree extends Component {
  constructor(props) {
    super(props)
    this.state = {
      match: this.props.data
    }
  }

  _getMatch = text => {
    const { data } = this.props
    if (!text) return this.setState({ match: data })
    const match = this.dfs(data, text)
    console.log(match)
  }

  dfs = (source, search) => source.map((s, i) => {
    console.log(s.title, search)
    if (String(s.title).indexOf(search) < 0) {
      return null
    }
    if (s.children) return Object.assign(s, { children: this.dfs(s.children, search) })
    return s
  })

  _onChange = (val) => {
    const { beforeChange, afterChange } = this.props
    if (beforeChange) beforeChange(val)
    this.setState({ match: val})
    if (afterChange) afterChange(val)
  }

  componentWillUpdate(props) {
    const { search } = props
    this._getMatch(search)
  }

  render() {
    const {
      height,
      width
    } = this.props
    return <div style={{ width, height }}>
      <SortableTree
        theme={FileExplorerTheme}
        treeData={this.state.match}
        onChange={this._onChange}
      />
    </div>
  }
}

NodeTree.propTypes = {
  afterChange: func,
  beforeChange: func,
  data: arrayOf(object),
  height: string,
  search: string,
  width: string
}

NodeTree.defaultProps = {
  data: [],
  height: '200px',
  width: '200px'
}
