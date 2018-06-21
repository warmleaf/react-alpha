import React from 'react'
import { storiesOf } from '@storybook/react'
import Popup from '../index'

storiesOf('Base Component|Popup', module)
  .addAPIDoc(
    'Popup',
    {
      comment: 'this is a description for Popup',
      platform: 'pc|mobile',
      scope: {
        Popup
      },
      code: `
        <Popup>I'm a Popup box</Popup>
      `
    }
  )
