import React from 'react'
import { storiesOf } from '@storybook/react'
import Separator from '../index'

storiesOf('Base Component|Base', module)
  .addAPIDoc(
    'separator',
    {
      comment: 'this is a description for Separator',
      platform: 'pc|mobile',
      scope: {
        Separator
      },
      code: `
        <Separator />
      `
    }
  )
