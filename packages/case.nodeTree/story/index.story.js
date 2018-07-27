import React from 'react'
import { storiesOf } from '@storybook/react'
import { ContextMenu, MenuItem } from 'react-contextmenu-wl'
import NodeTree from '../src/index'

storiesOf('Case Component|NodeTree', module)
  .addAPIDoc(
    'NodeTree',
    {
      comment: 'this is a description for NodeTree',
      platform: 'pc',
      scope: {
        NodeTree,
        ContextMenu,
        MenuItem
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
        content={(node) => {
          const disableItems = []
          if (node.title === 'title12') disableItems.push(node)
          return {
            id: node.type,
            disableItems
          }
        }}
        dataFormater={{
          title: 'key'
        }}
        data={[
          {
            key: 'title1',
            children: [{
              key: 'title12',
              type: 'table'
            }, {
              key: 'title3',
              type: 'table'
            }]
          },{
            key: 'title4',
            children: [{
              key: 'title5',
              type: 'table'
            }, {
              key: 'title6',
              type: 'table'
            }]
          }
        ]}
      />
      <ContextMenu id="table">
        {(state) => {
          console.log(state)
          return [
            <MenuItem key="1">item 01</MenuItem>
          ]
        }}
      </ContextMenu>
    </div>
  }
}
      `
    }
  )
