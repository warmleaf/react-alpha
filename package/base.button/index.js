import React, { PureComponent } from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'
import { lighten, darken } from 'polished'
import Flex from '../base.flex'
import Text from '../base.text'

const AUXILIARY = '#ebebeb'
const PRIMARY = '#6991FF'
const FONT = '#4C4C4C'
export default class Button extends PureComponent {
  render() {
    const {
      children,
      text,
      textWithLine,
      theme,
      prompt,
      // onClick,
      href,
      route,
      primary,
      outlined,
      label,
      disable,
      ...rest
    } = this.props

    const isText = text || textWithLine
    const aux = (theme && theme.auxiliary) || AUXILIARY
    const pri = (theme && theme.primary) || PRIMARY
    const color = isText ? 'rgba(0,0,0,0)' : (primary && !disable) ? pri : aux
    const font = (theme && theme.font) || '#4C4C4C'

    return (
      <Flex
        hc
        vc
        inline
        b={`1px solid ${darken(disable ? .02 : .1, outlined ? pri : color)}`}
        c={!disable && primary && '#fff'}
        bgc={lighten(disable ? .04 : 0, outlined ? 'rgba(0,0,0,0)' : color)}
        p="4px 8px"
        cur="pointer"
        {...rest}
      >
        {children ? children : <Text break>{label}</Text>}
      </Flex>
    )
  }
}

Button.propTypes = {
  label: string
}
