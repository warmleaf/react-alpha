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

  _propTypeRender = propType => {
    if (typeof propType === 'string') {
      return <span style={styles.type}>{propType}</span>
    }
    switch (propType.name) {
      case 'union':
        return [
          <span key="start">[</span>,
          propType.value.map((type, i) => {
            return [
              <span key={type.name} style={styles.type}>{type.name}</span>,
              (i < propType.value.length - 1) && ', '
            ]
          }),
          <span key="end">]</span>
        ]
      case 'string':
      case 'func':
      default:
        return <span style={styles.type}>{propType.name}</span>
    }
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
            <h4 key="props" style={styles.title}>Props</h4>,
            options.map((item, i) => (
              <div key={`item-${i}`} style={styles.item}>
                <span style={styles.prop}>{item.property}</span>
                <span style={styles.colon}>:</span>
                {this._propTypeRender(item.propType)}
                <span style={styles.sign}>{item.required && '!'}</span>
                {item.defaultValue && <span style={{ paddingLeft: '4px' }}>
                (default: <span style={{ fontWeight: 500 }}>{item.defaultValue}</span>)
                </span>}
                <span>{item.description}</span>
              </div>
            ))
          ]}
          {method.length > 0 && [
            <h4 key="props" style={styles.title}>Method</h4>,
            method.map((item, i) => (
              <div key={`item-${i}`} style={styles.item}>
                <span style={styles.prop}>{item.property}</span>
                <span style={styles.sign}>{item.required && '!'}</span>
                {item.defaultValue && <span style={{ paddingLeft: '4px' }}>(default: {item.defaultValue})</span>}
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
  title: {
    marginTop: 0,
    marginBottom: '10px'
  },
  type: {
    color: '#45c9b0'
  },
  prop: {
    color: '#569cd6'
  },
  item: {
    color: '#555',
    paddingBottom: '4px'
  },
  colon: {
    marginRight: '4px'
  },
  sign: {
    color: '#df4453'
  }
}