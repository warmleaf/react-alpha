import React from 'react'
import { storiesOf } from '@storybook/react'
import NodeTree from '../index'

storiesOf('Case Component|NodeTree', module)
  .addAPIDoc(
    'NodeTree',
    {
      comment: 'this is a description for NodeTree',
      platform: 'pc',
      scope: {
        NodeTree
      },
      code: `
        <NodeTree onClick={() => { }}>Hello Button</NodeTree>
      `
    }
  )
