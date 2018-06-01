import React from 'react'
import { storiesOf } from '@storybook/react'
import Flex from '../index'

storiesOf('Base Component|Base', module)
  .addAPIDoc(
    'Flex',
    {
      comment: 'this is a description for Flex',
      platform: 'pc|mobile'
    },
    () => <Flex onClick={() => {}}>Hello Button</Flex>
  )
