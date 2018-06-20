import { storiesOf } from '@storybook/react'
import SqlEditor from './example/sqleditor'

storiesOf('Case Component|Editor/CodemirrorEditor', module)
  .addAPIDoc(
    'SqlEditor',
    {
      comment: 'this is a description for SqlEditor',
      platform: 'pc|mobile',
      scope: {
        SqlEditor //story必须放置第一位
      },
      code: `
      <SqlEditor />
      `
    }
  )