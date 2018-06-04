import React from 'react'
import { string, element, func, oneOfType } from 'prop-types'
import Flex from '../../base.flex'

const SimpleUserCard = ({ avatar, name, spec, ...rest }) => (
  <Flex {...rest}>
    {typeof avatar === 'string' ?
      <img src={avatar} /> : { avatar }
    }
    <Flex>
      <span>{name}</span>
      <span>{spec}</span>
    </Flex>
  </Flex>
)

SimpleUserCard.propTypes = {
  avatar: oneOfType([string, element]).isRequired,
  name: string.isRequired,
  spec: string.isRequired
}

SimpleUserCard.defaultProps = {
  name: ''
}

export default SimpleUserCard
