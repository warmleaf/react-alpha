import React from 'react'
import { storiesOf } from '@storybook/react'
import Avatar from '../src/index'

storiesOf('Base Component|Base', module)
  .addAPIDoc(
    'Avatar',
    {
      comment: 'this is a description for Avatar',
      platform: 'pc|mobile',
      scope: {
        Avatar
      },
      code: `
        <Avatar src="https://st2.depositphotos.com/1007566/12304/v/950/depositphotos_123041468-stock-illustration-avatar-man-cartoon.jpg"
        status="dnd"
        />
      `
    }
  )
