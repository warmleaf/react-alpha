import React from 'react'
import { storiesOf } from '@storybook/react'
import Plus from '../src/plus'

storiesOf('Base Component|Icon', module)
  .addAPIDoc(
    'Plus',
    {
      comment: 'this is a description for Plus',
      platform: 'pc|mobile',
      scope: {
        Plus
      },
      code: `
        <Plus/>
      `
    }
  )
