import React from 'react'
import { storiesOf } from '@storybook/react'
import Select from '../index'

storiesOf('Base Component|Select', module)
  .addAPIDoc(
    'Select',
    {
      comment: 'this is a description for Select',
      platform: 'pc|mobile',
      scope: {
        Select
      },
      code: `
        <Select data={[1,2,3]}/>
      `
    }
  )
