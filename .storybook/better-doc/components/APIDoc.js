import React, { Component } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import Editor from './Editor'
import Pc from './pc'
import Mobile from './mobile'

const styles = {
  sup: {
    paddingLeft: '10px'
  },
  info: {
    paddingLeft: '20px',
    paddingRight: '20px'
  },
  pointer: {
    cursor: 'default'
  }
}

export default class APIDoc extends Component {
  constructor(props, ...args) {
    super(props, ...args)
    this.state = {}
  }

  render() {
    const { code, scope, story, comment, platform } = this.props
    console.log(this.props)
    return (<div style={styles.info}>
      <h2 style={styles.pointer}>
        {story}
        {/pc/.test(platform) && <sup style={styles.sup}><Pc /></sup>}
        {/mobile/.test(platform) && <sup style={styles.sup}><Mobile /></sup>}
      </h2>
      <h4 style={styles.pointer}>Description</h4>
      <span>{comment}</span>
      <Editor code={code} scope={scope}/>
      <h4 style={styles.pointer}>More Example</h4>
    </div>)
  }
}
