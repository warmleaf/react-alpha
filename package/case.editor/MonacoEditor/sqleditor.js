import React, { Component, createRef } from 'react'
import MonacoEditor from './index'
import Flex from '../../base.flex'
import Button from '../../base.button'
import Separator from '../../base.separator'
import sqlCompletionProvider from './sql/sqlCompletionProvider'
import {
  provideDocumentRangeFormattingEdits 
} from './sql/sqlFormattingEdits'
import sqlFormatter from './sql/sql-formatter/src/sqlFormatter'

export default class SqlEditor extends Component {
  constructor(props) {
    super(props)
    this.origin = createRef()
  }

  value = () => {
    const selected = this.editor.getModel().getValueInRange(
      this.editor.getSelection()
    )
    const value = this.editor.model.getValue()
    return {
      editor: value,
      selected: selected,
      current: selected || value
    }
  }

  _exec = () => {
    console.log('do exec', this.value().current)
  }

  _stop = () => {
    console.log('do stop')
  }

  _explan = () => {
    console.log('do format', this.value().current)
  }

  _format = () => {
    if (this.value().selected) {
      this.editor.trigger('anything', 'editor.action.formatSelection')
    } else {
      this.editor.trigger('anything', 'editor.action.formatDocument')
    }
  }

  _clear = () => {
    this.editor.model.setValue('')
  }

  _save = () => {
    console.log('do save', this.value().editor)
  }

  _onMonacoReady = (editor, monaco) => {
    this.editor = editor
    const table = [
      {
        name: 'db01',
        type: 'db',
        children: [{
          name: 'table01',
          type: 'table'
        }]
      },
      {
        name: 'db02',
        type: 'db',
        children: [{
          name: 'table02',
          type: 'table'
        }]
      }
    ]

    const extend = {
      type: 'hive',
      formatter: sqlFormatter.format
    }
    monaco.languages.registerCompletionItemProvider('sql', sqlCompletionProvider(this.editor, monaco, table))
    monaco.languages.registerDocumentFormattingEditProvider('sql', {
      provideDocumentFormattingEdits: (model, options, token) => {
        const selection = {
          startLineNumber: 1,
          startColumn: 1,
          endLineNumber: model.getLineCount(),
          endColumn: model.getLineLength(model.getLineCount())
        }
        return provideDocumentRangeFormattingEdits(model, selection, options, token, extend)
      }
    })
    monaco.languages.registerDocumentRangeFormattingEditProvider('sql', {
      provideDocumentRangeFormattingEdits: (...rest) => provideDocumentRangeFormattingEdits(...rest, extend)
    })
  }

  render() {
    return (
      <Flex column bgc="#f7f7f7" p="20px" size="14px">
        <Flex pb="20px" h="48px">
          <Button round="2px" mr="10px" onClick={this._exec} label="运行" />
          <Button round="2px" mr="10px" onClick={this._stop} label="停止" />
          <Separator ml="10px" mr="20px" vertical />
          <Button round="2px" mr="10px" onClick={this._explan} label="查看执行计划" />
          <Button round="2px" mr="10px" onClick={this._save} label="提交定时任务" />
          <Separator ml="10px" mr="20px" vertical />
          <Button round="2px" mr="10px" onClick={this._format} label="格式化" />
          <Button round="2px" onClick={this._clear} label="清空" />
        </Flex>
        <MonacoEditor
          h='300px'
          language='sql'
          initValue='create * from table limit 100;'
          monacoIsReady={this._onMonacoReady}
        />
      </Flex>
    )
  }
}