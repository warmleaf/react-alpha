import React, { Component } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'

export default class APIPanel extends Component {
  constructor(props, ...args) {
    super(props, ...args)
    props.ob({
      next: type => (type === 'API' ? this.onAddDoc : this.setCurrent),
    })

    this.state = {}
    this.stopListeningOnStory = () => this.setState({})
  }

  setCurrent = (kind, story) => {
    this.setState({ current: { kind, story } })
  }

  onAddDoc = (kind, story, doc) => {
    const state = this.state

    if (typeof state[kind] === 'undefined') {
      state[kind] = {}
    }
    state[kind][story] = doc
    this.setState(state)
  }

  render() {
    if (
      typeof this.state.current !== 'undefined' &&
      typeof this.state[this.state.current.kind] !== 'undefined'
    ) {
      const current = this.state.current
      const props = this.state[current.kind][current.story]
      const options = []
      const method = []

      if (!props) {
        return null
      }

      for (let i = 0; i < props.length; i += 1) {
        const elm = props[i]
        if (elm.propType.name === 'func') {
          method.push(elm)
        } else {
          options.push(elm)
        }
      }

      return (
        <div style={styles.container}>
          {options.length > 0 && [
            <h4 key="props">Props</h4>,
            options.map((item, i) => (
              <div key={`item-${i}`}>
                <span>{item.property}</span>
                <span>{item.required}</span>
                <span>{item.description}</span>
              </div>
            ))
          ]}
          {method.length > 0 && [
            <h4 key="props">Method</h4>,
            method.map((item, i) => (
              <div key={`item-${i}`}>
                <span>{item.property}</span>
                <span>{item.required}</span>
                <span>{item.description}</span>
              </div>
            ))
          ]}
        </div>
      )
    }
    return 'No API found!'
  }
}

const styles = {
  container: {
    flex: 1,
    padding: '10px',
    position: 'relative',
  },
  btn: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    border: 'none',
    borderTop: 'solid 1px rgba(0, 0, 0, 0.2)',
    borderLeft: 'solid 1px rgba(0, 0, 0, 0.2)',
    background: 'rgba(255, 255, 255, 0.5)',
    padding: '5px 10px',
    borderRadius: '4px 0 0 0',
    color: 'rgba(0, 0, 0, 0.5)',
    textTransform: 'uppercase',
    outline: 'none',
  },
  pre: {
    flex: 1,
  },
}