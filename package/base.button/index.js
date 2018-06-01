import React from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'
import Flex from '../base.flex'

const Button = ({ children, text, ...rest }) => (
  <Flex {...rest}>
    {children ? children : <span>{text}</span>}
  </Flex>
)

Button.propTypes = {
  text: string
}

export default Button
