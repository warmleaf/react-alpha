import { storiesOf } from '@storybook/react'
import SqlEditor from '../sqleditor'

storiesOf('Case Component|Editor/MonacoEditor', module)
  .addAPIDoc(
    'SqlEditor',
    {
      comment: 'this is a description for SqlEditor',
      platform: 'pc',
      scope: {
        SqlEditor //story必须放置第一位
      },
      code: `
      <SqlEditor />
      `
    }
  )