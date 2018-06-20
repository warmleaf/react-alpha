import React, { Component, createRef } from 'react'
import { bool, string, object, oneOfType, func, number, arrayOf } from 'prop-types'
import Flex from '../../base.flex'

export default class SimpleEditor extends Component {
  constructor(props) {
    super(props)
    this.cmDom = createRef()
    this.cmInstance = null
  }

  componentDidMount() {
    this._loadAndInitCodemirrorLib()
    this._updateAddons()
  }

  componentWillUpdate() {
    this._updateAddons()
  }

  _updateAddons = async () => {
    const {
      activeLine,
      foldGutter,
      matchHighlight,
      matchHighlightRules,
      mode,
      showHint,
      onChange,
      onSelect,
      placeholder,
      initValue,
      trailingSpace,
      useNativeScroll,
      // ! 检查拼写
      useNativeScrollForce
    } = this.props
    const libs = []
    if (showHint) libs.push(
      import('codemirror/addon/hint/show-hint'),
      import('./hint-style')
    )
    // todo 添加不同mode
    if (mode) {
      libs.push(import('codemirror/mode/sql/sql'))
      if (showHint) libs.push(import('codemirror/addon/hint/sql-hint'))
    }

    const needScrollbar = !useNativeScrollForce && !/Mac/.test(navigator.platform) && !useNativeScroll
    if (needScrollbar) {
      libs.push(
        import('codemirror/addon/scroll/simplescrollbars'),
        import('./scrollbar-style')
      )
    }
    if (foldGutter) libs.push(
      import('codemirror/addon/scroll/simplescrollbars'),
      import('./foldgutter-style')
    )
    if (placeholder) libs.push(import('codemirror/addon/display/placeholder'))
    if (matchHighlight) libs.push(import('codemirror/addon/search/match-highlighter'))
    if (activeLine) libs.push(import('codemirror/addon/selection/active-line'))
    if (trailingSpace) libs.push(
      import('codemirror/addon/edit/trailingspace'),
      import('./trailing-style')
    )

    Promise.all(libs).then(() => {
      const options = {}
      if (activeLine) this.cmInstance.setOption('styleActiveLine', true)
      if (trailingSpace) this.cmInstance.setOption('showTrailingSpace', true)
      if (matchHighlight) this.cmInstance.setOption('highlightSelectionMatches', { showToken: /\w/ })
      if (matchHighlightRules) Object.assign(options.highlightSelectionMatches, matchHighlightRules)
      if (initValue) this.cmInstance.setValue(initValue)
      if (needScrollbar) this.cmInstance.setOption('scrollbarStyle', 'overlay')

      this.cmInstance.on('change', (cm, info) => {
        if (onChange) onChange(info, cm)
      })

      this.cmInstance.on('keydown', (cm, e) => {
        // todo 添加不同mode
        if (showHint) cm.showHint({ completeSingle: false })
      })

      this.cmInstance.on('beforeSelectionChange', (cm, info) => {
        if (onSelect) onSelect(info, cm, this.cm.getSelections)
      })

      this.cmInstance.on('contextmenu', (cm, info) => {
        // if (onSelect) onSelect(info, cm, this.cm.getSelections)
        console.log(console.log(cm, info))
      })
    })
  }

  _loadAndInitCodemirrorLib = async () => {
    const {
      initValue,
      lineNumbers
    } = this.props

    Promise.all([import('codemirror'), import('./codemirror-style')]).then(mods => {
      const options = {
        lineNumbers
      }
      this.cm = mods[0].default
      this.cmInstance = this.cm(this.cmDom.current, options)
      if (initValue) this.cmInstance.setValue(initValue)
    })
  }

  render() {
    console.log('render')
    const { lineNumbers, ...rest } = this.props
    return <Flex
      innerRef={this.cmDom}
      {...rest}
    >
    </Flex>
  }
}

SimpleEditor.propTypes = {
  activeLine: bool,
  addModeClass: bool,
  allowDropFileTypes: arrayOf(string),
  autofocus: bool,
  beforeChange: func,
  coverGutterNextToScrollbar: bool,
  cursorBlinkRate: number,
  cursorHeight: number,
  cursorScrollMargin: number,
  dragDrop: bool,
  electricChars: bool,
  extraKeys: object,
  indentUnit: number,
  indentWithTabs: bool,
  initValue: string,
  inputStyle: string,
  firstLineNumber: number,
  fixedGutter: bool,
  flattenSpans: bool,
  foldGutter: bool,
  gutters: arrayOf(string),
  historyEventDelay: number,
  keyMap: string,
  lineNumbers: bool,
  lineNumberFormatter: func,
  lineSeparator: string,
  lineWiseCopyCut: bool,
  lineWrapping: bool,
  matchHighlight: bool,
  maxHighlightLength: number,
  mode: oneOfType([string, object]),
  onChange: func,
  onSelect: func,
  pasteLinesPerSelection: bool,
  placeholder: string,
  pollInterval: bool,
  readOnly: oneOfType([bool, string]),
  resetSelectionOnContextMenu: bool,
  rtlMoveVisually: bool,
  showCursorWhenSelecting: bool,
  showHint: bool,
  smartIndent: bool,
  specialChars: string,
  specialCharPlaceholder: string,
  tabindex: number,
  tabSize: number,
  theme: string,
  trailingSpace: bool,
  undoDepth: number,
  useNativeScroll: bool,
  viewportMargin: number,
  workTime: number,
  workDelay: number
}

SimpleEditor.defaultProps = {
  lineNumbers: true
}