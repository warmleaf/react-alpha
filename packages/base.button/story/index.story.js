import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from '../src/index'

storiesOf('Base Component|Base', module)
  .addAPIDoc(
    'Button',
    {
      comment: 'this is a description for Button',
      platform: 'pc|mobile',
      scope: {
        Button
      },
      code: `
        <Button b="1px solid green" bgc="rgba(0,0,0,.2)" p="20px" round="4px">I'm a Button box</Button>
      `
    }
  )
