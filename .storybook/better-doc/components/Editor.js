import React, { Component } from 'react'
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'

const styles = {
  preview: {
    minHeight: '100px',
    padding: '20px',
    border: '1px solid #dee6ed',
    boxShadow: '0 0 10px 2px #e5ebf1 inset',
    background: 'linear-gradient(45deg, #eff2f6 25%, transparent 25%, transparent 75%, #eff2f6 75%, #eff2f6 0), linear-gradient(45deg, #eff2f6 25%, transparent 5%, transparent 75%, #eff2f6 75%, #eff2f6 0), #fff',
    backgroundPosition: '0 0, 10px 10px',
    backgroundSize: '20px 20px',
    backgroundClip: 'border-box',
    backgroundOrigin: 'padding-box'
  },
  editor: {
    overflow: 'scroll'
  },
  pointer: {
    cursor: 'default'
  }
}

export default class Demo extends Component {
  constructor(props, ...args) {
    super(props, ...args)
    this.state = {}
  }

  render() {
    const { code, scope } = this.props
    return (<div>
      <h4 style={styles.pointer}>Demo</h4>
      <LiveProvider code={code} scope={scope}>
        <LivePreview style={styles.preview}/>
        <LiveEditor  style={styles.editor}/>
        <LiveError />
      </LiveProvider>
    </div>)
  }
}
