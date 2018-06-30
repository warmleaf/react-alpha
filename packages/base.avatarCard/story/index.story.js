import React from 'react'
import { storiesOf } from '@storybook/react'
import AvatarCard from '../src/index'
import style from '../src/style.css'

storiesOf('Base Component|Base', module)
  .addAPIDoc(
    'AvatarCard',
    {
      comment: 'this is a description for AvatarCard',
      platform: 'pc|mobile',
      scope: {
        AvatarCard,
        style,
      },
      code: `
        <AvatarCard avatarSrc="https://st2.depositphotos.com/1007566/12304/v/950/depositphotos_123041468-stock-illustration-avatar-man-cartoon.jpg"
              avatarStatus="dnd"
              name="Orlo Wang"
              subName="Playing Games"
            />
      `
    }
  )
