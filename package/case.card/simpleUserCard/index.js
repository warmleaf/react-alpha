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
  avatar: oneOfType([string, element, func]),
  name: string,
  spec: string
}

export default SimpleUserCard
