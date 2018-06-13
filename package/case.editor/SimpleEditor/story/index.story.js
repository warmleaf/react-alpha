import { storiesOf } from '@storybook/react'
import SimpleEditor from '../index'

storiesOf('Case Component|Editor', module)
  .addAPIDoc(
    'SimpleEditor',
    {
      comment: 'this is a description for SimpleEditor',
      platform: 'pc|mobile',
      scope: {
        SimpleEditor //story必须放置第一位
      },
      code: `
      <SimpleEditor
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