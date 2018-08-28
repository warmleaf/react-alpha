import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from '../../base.button/src'
import Pop from '../src'

storiesOf('Base Component|Base', module)
  .addAPIDoc(
    'Pop',
    {
      comment: 'this is a description for Pop',
      platform: 'pc|mobile',
      scope: {
        Pop,
        Button
      },
      code: `
<Pop content="i'm some tips" overkeep>
  <Button>show pop</Button>
</Pop>
      `
    }
  )
