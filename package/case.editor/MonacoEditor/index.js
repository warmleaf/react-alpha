import React, { Component, createRef } from 'react'
import * as monaco from 'monaco-editor'
import { injectGlobal } from 'styled-components'
import { bool, string, object, oneOfType, func, number, arrayOf } from 'prop-types'
import Flex from '../../base.flex'

injectGlobal`
  .monaco-editor {
    height: 100%;
  }
`

export default class MonacoEditor extends Component {
  constructor(props) {
    super(props)
    this.monacoDom = createRef()
  }

  componentDidMount() {
    this.init()
  }

  init = () => {
    const {
      contextmenu,
      initValue,
      language,
      minimap,
      monacoIsReady
    } = this.props
    this.monaco = monaco.editor.create(this.monacoDom.current, {
      contextmenu,
      value: initValue || '',
      language,
      minimap: {
        enabled: minimap
      }
    })
    if (monacoIsReady) monacoIsReady(this.monaco, monaco)
  }

  render() {
    const {
      contextmenu,
      initValue,
      language,
      minimap,
      monacoIsReady,
      ...rest
    } = this.props

    return <Flex
      nonOverflow
      innerRef={this.monacoDom}
      {...rest}
    >
    </Flex>
  }
}

MonacoEditor.propTypes = {
  contextmenu: bool,
  initValue: string,
  language: string,
  minimap: bool,
  monacoIsReady: func
}

MonacoEditor.defaultProps = {
  contextmenu: false,
  minimap: false
}