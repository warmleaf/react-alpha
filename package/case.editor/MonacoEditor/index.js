import React, { Component, createRef } from 'react'
import { injectGlobal } from 'styled-components'
import { bool, string, object, oneOfType, func, number, arrayOf } from 'prop-types'
import Flex from '../../base.flex'

export default class MonacoEditor extends Component {
  constructor(props) {
    super(props)
    this.monacoDom = createRef()
  }

  render() {
    console.log('render')
    const { lineNumbers, ...rest } = this.props
    return <Flex
      innerRef={this.monacoDom}
      {...rest}
    >
    </Flex>
  }
}

MonacoEditor.propTypes = {
}

MonacoEditor.defaultProps = {
}