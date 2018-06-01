import React, { Component } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import Editor from './Editor'
import Pc from './pc'
import Mobile from './mobile'
import Node from './Node'
import Pre from './markdown/pre/pre'
import PropTable from './PropTable'
import getPropDefinitions from '../getPropDefinitions'

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
const getName = type => type.displayName || type.name;

export default class APIDoc extends Component {
  constructor(props, ...args) {
    super(props, ...args)
    this.state = {}
  }
  _getSourceCode() {
    const {
      maxPropsIntoLine,
      maxPropObjectKeys,
      maxPropArrayLength,
      maxPropStringLength,
    } = this.props;

    return (
      <div>
        <Pre>
          {React.Children.map(this.props.children, (root, idx) => (
            <Node
              key={idx}
              node={root}
              depth={0}
              maxPropsIntoLine={maxPropsIntoLine}
              maxPropObjectKeys={maxPropObjectKeys}
              maxPropArrayLength={maxPropArrayLength}
              maxPropStringLength={maxPropStringLength}
            />
          ))}
        </Pre>
      </div>
    );
  }

  render() {
    const { children, story, comment, platform, demo, demoScope, propDefinitions, info } = this.props
    console.log(this.props)
    return (<div style={styles.info}>
      <h2 style={styles.pointer}>
        {story}
        {/pc/.test(platform) && <sup style={styles.sup}><Pc /></sup>}
        {/mobile/.test(platform) && <sup style={styles.sup}><Mobile /></sup>}
      </h2>
      <h4 style={styles.pointer}>Description</h4>
      <span>{comment}</span>
      <Editor children={demo} scope={demoScope}/>
      <h4 style={styles.pointer}>More Example</h4>
      {this._getSourceCode()}
    </div>)
  }
}
