import React from 'react'
import { storiesOf } from '@storybook/react'
import MultipleList from '../src/multiple-list'
import ListGroup from '../src/list-group'
import Text from '@react-alpha/base.text'

storiesOf('Case Component|List Group', module)
  .addAPIDoc(
    'multiple',
    {
      comment: 'this is a description for MultipleList',
      platform: 'pc',
      scope: {
        MultipleList,
        ListGroup,
        Text
      },
      code: `
<MultipleList multiple={true}>
<ListGroup
title="Project"
onExpandStatusChange={s => console.log('status is', s)}
itemRender={d => <Text>{d.name}</Text>}
list={[{ name: "orlo wang" }, { name: "mark white" }]}
/>
<ListGroup
title="Channel"
itemRender={d => <Text>{d.name}</Text>}
list={[{ name: "orlo wang" }, { name: "mark white" }]}
/>
</MultipleList>
      `
    }
  )
