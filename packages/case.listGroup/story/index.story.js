import React from 'react'
import { storiesOf } from '@storybook/react'
import ListGroup from '../src/list-group'
import Text from '../../base.text'

storiesOf('Case Component|List Group', module)
  .addAPIDoc(
    'base',
    {
      comment: 'this is a description for ListGroup',
      platform: 'pc|mobile',
      scope: {
        ListGroup,
        Text
      },
      code: `
<ListGroup 
  title="Project"
  actionRender={() => 
    <Text 
      onClick={(e, b = '123') => {
        console.log('add project', b)
      }}
    >
      BTN
    </Text>
}
  itemRender={d => <Text>{d.name}</Text>}
  list={[{name:"orlo wang"},{name:"mark white"}]}
/>
      `
    }
  )
