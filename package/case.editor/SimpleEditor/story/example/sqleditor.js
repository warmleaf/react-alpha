import React, { Component, createRef } from 'react'
import Codemirror from '../../index'
import Flex from '../../../../base.flex'
import Button from '../../../../base.button'
import Separator from '../../../../base.separator'

export default class SqlEditor extends Component {
  constructor(props) {
    super(props)
    this.origin = createRef()
  }

  _now = () => {
    const selected = this.origin.current.cmInstance.doc.getSelections()[0]
    const value = this.origin.current.cmInstance.doc.getValue()
    return selected || value
  }

  _exec = () => {
    const value = this.origin.current.cmInstance.doc.getValue()
    console.log('do exec', value)
  }

  _stop = () => {
    console.log('do stop')
  }

  _format = () => {
    console.log('do format', this._now())
  }

  _clear = () => {
    this.origin.current.cmInstance.doc.setValue('')
  }

  _save = () => {
    const value = this.origin.current.cmInstance.doc.getValue()
    console.log('do save', value)
  }

  _onChangeHandler = (info, cm) => {
    this.value = cm.getValue()
  }

  _onSelectHandler = (info, cm) => {
    this.selectedValue = cm.getSelections()
  }

  render() {
    return (
      <Flex column bgc="#f7f7f7" p="20px" size="14px">
        <Flex pb="20px" h="48px">
          <Button round="2px" mr="10px" onClick={this._exec} label="运行"/>
          <Button round="2px" mr="10px" onClick={this._stop} label="停止"/>
          <Separator ml="10px" mr="20px" vertical/>
          <Button round="2px" mr="10px" onClick={this._save} label="查看执行计划"/>
          <Button round="2px" mr="10px" onClick={this._save} label="提交定时任务"/>
          <Separator ml="10px" mr="20px" vertical/>
          <Button round="2px" mr="10px" onClick={this._format} label="格式化"/>
          <Button round="2px" onClick={this._clear} label="清空"/>
        </Flex>
        <Codemirror
          ref={this.origin}
          showHint
          activeLine
          matchHighlight
          mode="text/x-sql"
          onChange={this._onChangeHandler}
          initValue="create * from 'table' where 'id' = 1;"
          onSelect={this._onSelectHandler}
        />
      </Flex>
    )
  }
}