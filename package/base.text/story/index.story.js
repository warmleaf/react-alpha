import React from 'react'
import { storiesOf } from '@storybook/react'
import Text from '../index'

storiesOf('Base Component|Base', module)
  .addAPIDoc(
    'Text',
    {
      comment: 'this is a description for Text',
      platform: 'pc|mobile',
      scope: {
        Text
      },
      code: `
        <Text>I'm a Text box</Text>
      `
    }
  )
