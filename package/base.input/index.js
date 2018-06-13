import React, { PureComponent } from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'
import { lighten, darken } from 'polished'
import Flex from '../base.flex'

const StypedInput = styled.input``

export default class Input extends PureComponent {
  render() {
    const {  } = this.props

    return (
      <Flex>
        <StypedInput />
      </Flex>
    )
  }
}

Input.propTypes = {
  label: string
}
