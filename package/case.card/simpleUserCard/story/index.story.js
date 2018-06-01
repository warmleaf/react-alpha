import React from 'react'
import { storiesOf } from '@storybook/react'
import SimpleUserCard from '../index'

storiesOf('Case Component|Card', module)
  .addAPIDoc('SimpleUserCard',
    {
      comment: 'this is a description for NodeTree',
      platform: 'pc|mobile',
      scope: {
        SimpleUserCard
      },
      code: `
        <SimpleUserCard
          avatar="https://img.alicdn.com/tfs/TB1Daimr1SSBuNjy0FlXXbBpVXa-499-498.png_80x80.jpg"
          name="沈经病"
          spec="工号：098735"
        />
      `
    }
  )