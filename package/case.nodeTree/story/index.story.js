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
class Example extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ''
    }
  }

  render() {
    return <div>
      <input type='text' onChange={e => this.setState({ query: e.target.value })}/>
      <NodeTree
        search={this.state.query}
        data={[
          {
            title: 'title1',
            children: [{
              title: 'title2'
            }, {
              title: 'title3'
            }]
          },{
            title: 'title4',
            children: [{
              title: 'title5'
            }, {
              title: 'title6'
            }]
          }
        ]}
      />
    </div>
  }
}
      `
    }
  )
