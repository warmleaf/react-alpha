import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from '../index'

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
        <Button onClick={() => {}} text="button"/>
      `
    }
  )
