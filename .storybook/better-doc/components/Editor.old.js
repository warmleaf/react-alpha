import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {LiveEditor, LiveProvider} from 'react-live'
import 'babel-standalone'

const compileES5 = (
  code, // eslint-disable-next-line no-undef
) => Babel.transform(code, {presets: ['es2015', 'react']}).code

// eslint-disable-next-line no-undef
const compileES6 = code => Babel.transform(code, {presets: ['react']}).code

class CodeEditor extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = this._updateState(props.code)
    this.state.showJSX = true
  }

  componentDidMount() {
    // Initial render() will always be a no-op,
    // Because the mountNode ref won't exist yet.
    this._render()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.compiled !== this.state.compiled) {
      this._render()
    }
  }

  render() {
    const {children} = this.props
    const {
      compiledES6,
      code,
      error,
      showBabelErrorMessage,
      showJSX,
    } = this.state

    let errorMessage
    if (showBabelErrorMessage) {
      errorMessage = (
        <span>
          Babel could not be loaded.
          <br />
          <br />
          This can be caused by an ad blocker. If you're using one, consider
          adding reactjs.org to the whitelist so the live code examples will
          work.
        </span>
      )
    } else if (error != null) {
      errorMessage = error.message
    }
    return (
      <LiveProvider code={showJSX ? code : compiledES6} mountStylesheet={false}>
        <div>
          {children}
          <div>
            <div>
            <LiveEditor ignoreTabKey={true} onChange={this._onChange} />
            </div>
            {error && (
              <pre>
                  {errorMessage}
                </pre>
            )}
            {!error && <div ref={this._setMountRef}/>}
          </div>
        </div>
      </LiveProvider>
    )
  }
  _render() {
    if (!this._mountNode) {
      return
    }
    const {compiled} = this.state
    try {
      // Example code requires React, ReactDOM, and Remarkable to be within scope.
      // It also requires a "mountNode" variable for ReactDOM.render()
      // eslint-disable-next-line no-new-func
      new Function('React', 'ReactDOM', 'mountNode', compiled)(
        React,
        ReactDOM,
        this._mountNode,
      )
    } catch (error) {
      console.error(error)
      this.setState({
        compiled: null,
        error,
      })
    }
  }
  _setMountRef = ref => {
    this._mountNode = ref
  }
  _updateState(code, showJSX = true) {
    try {
      let newState = {
        compiled: compileES5(code),
        error: null,
      }
      if (showJSX) {
        newState.code = code
        newState.compiledES6 = compileES6(code)
      } else {
        newState.compiledES6 = code
      }
      return newState
    } catch (error) {
      console.error(error)
      // Certain ad blockers (eg Fair AdBlocker) prevent Babel from loading.
      // If we suspect this is the case, we can show a more helpful error.
      const showBabelErrorMessage = !Babel
      return {
        compiled: null,
        error,
        showBabelErrorMessage,
      }
    }
  }
  _onChange = code => {
    this.setState(state => this._updateState(code, state.showJSX))
  }
}
export default CodeEditor