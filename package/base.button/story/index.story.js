import React from 'react'
import { storiesOf } from '@storybook/react'
import theme from '../../../example/theme'
import Button from '../index'

storiesOf('Base Component|Base', module)
  .addAPIDoc(
    'Button',
    {
      comment: 'this is a description for Button',
      platform: 'pc|mobile',
      scope: {
        Button,
        theme
      },
      code: `
        <Button theme={theme} onClick={() => {}} label="button"/>
      `
    }
  )
