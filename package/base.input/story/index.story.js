import React from 'react'
import { storiesOf } from '@storybook/react'
import theme from '../../../example/theme'
import Input from '../index'

storiesOf('Base Component|Input', module)
  .addAPIDoc(
    'Input',
    {
      comment: 'this is a description for Input',
      platform: 'pc|mobile',
      scope: {
        Input
      },
      code: `
        <Input />
      `
    }
  )
