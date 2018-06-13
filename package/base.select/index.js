import React, { Component } from 'react'
import { string, array, func } from 'prop-types'
import styled from 'styled-components'
import isTypeOf from '../../lib/is_type_of'
import Flex from '../base.flex'
import Input from '../base.input'

export default class Select extends Component {
  defaultInputRenderer = () => {
    return <Input />
  }
  defaultItemRenderer = () => {

  }
  render() {
    const { data, inputRender, itemRender, ...rest } = this.props
    if (isTypeOf(data) !== 'array') throw Error('type of \"data\" should be an array')
    return (
      <Flex>
        {inputRender ? inputRender() : this.defaultInputRenderer()}
        <Flex>
          {this._specRenderer()}
          {data.map((item, i) => <Flex key={`item-${i}`}>
            {itemRender ? itemRender(item) : this.defaultItemRenderer(item)}
          </Flex>)}
        </Flex>
      </Flex>
    )
  }
  _specRenderer = () => {

  }
}

Select.propTypes = {
  /* align-self */
  data: array,
  itemRender: func,
  inputRender: func
}
