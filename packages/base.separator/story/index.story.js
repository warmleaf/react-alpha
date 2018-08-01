import React from 'react'
import { storiesOf } from '@storybook/react'
import Separator from '../src/index'

storiesOf('Base Component|Base', module)
  .addAPIDoc(
    'Separator',
    {
      comment: 'this is a description for Separator',
      platform: 'pc|mobile',
      scope: {
        Separator
      },
      code: `
        <Separator b="1px solid green" bgc="rgba(0,0,0,.2)" p="20px" round="4px">I'm a Separator box</Separator>
      `
    }
  )
