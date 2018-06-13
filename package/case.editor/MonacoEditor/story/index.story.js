import { storiesOf } from '@storybook/react'
import MonacoEditor from '../index'

storiesOf('Case Component|Editor', module)
  .addAPIDoc(
    'MonacoEditor',
    {
      comment: 'this is a description for MonacoEditor',
      platform: 'pc|mobile',
      scope: {
        MonacoEditor //story必须放置第一位
      },
      code: `
      <MonacoEditor
        showHint 
        activeLine
        trailingSpace
        matchHighlight
        mode="text/x-sql" 
        onChange={(info, cm) => console.log(cm)}
        initValue="create * from 'table' where 'id' = 1;\\ncreate * from 'table' where 'id' = 1;\\ncreate * from 'table' where 'id' = 1"
        onSelect={(...v) => console.log(v)}
      />
      `
    }
  )