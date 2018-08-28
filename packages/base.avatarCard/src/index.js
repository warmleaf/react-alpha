import React from 'react'
import { string, oneOf } from 'prop-types'
import Flex from '@react-alpha/base.flex'
import Text from '@react-alpha/base.text'
import Avatar from '@react-alpha/base.avatar'

const AvatarCard = ({
  avatarSrc,
  avatarStatus,
  avatarSize,
  avatarStatusBgColor,
  title,
  subtitle,
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
      <Flex column hc={subtitle ? 'space-between' : true}>
        <Text className="ra-basic-ac-name">{title}</Text>
        {typeof subtitle === 'string' ? 
          <Text className="ra-basic-ac-subname">{subtitle}</Text> :
          typeof subtitle === 'function' ? subtitle() : subtitle
        }
      </Flex>
    </Flex>
  )

AvatarCard.propTypes = {
  /** name of avatar */
  title: string,
  /** subtitle of avatar */
  subtitle: string,
  /** size of avatar */
  avatarSize: string,
  /** avatar source uri */
  avatarSrc: string,
  /** avatar status */
  avatarStatus: oneOf(["idle", "dnd", "on", "off"]),
  /** status background color, should be same with avatar background */
  avatarStatusBgColor: string
}

export default AvatarCard
