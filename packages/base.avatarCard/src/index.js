import React, { Component } from 'react'
import { string } from 'prop-types'
import { injectGlobal } from 'styled-components'
import Flex from '@react-alpha/base.flex'
import Text from '@react-alpha/base.text'
import Avatar from '@react-alpha/base.avatar'

const AvatarCard = ({
  avatarSrc,
  avatarStatus,
  avatarSize,
  avatarStatusBgColor,
  name,
  subName,
  ...rest
}) => (
    <Flex
      className='ra-base-avatar-card'
      {...rest}
    >
      <Avatar
        src={avatarSrc}
        status={avatarStatus}
        size={avatarSize}
        statusBgColor={avatarStatusBgColor}
      />
      <Flex column hc={subName ? 'space-between' : true}>
        <Text className="ra-basic-ac-name">{name}</Text>
        {typeof subName === 'string' ? 
          <Text className="ra-basic-ac-subname">{subName}</Text> :
          typeof subName === 'function' ? subName() : subName
        }
      </Flex>
    </Flex>
  )

AvatarCard.propTypes = {
  /* align-self */
}

AvatarCard.defaultProps = {
}

export default AvatarCard
