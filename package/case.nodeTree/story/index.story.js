import React from 'react'
import { storiesOf } from '@storybook/react'
import { ContextMenu, MenuItem } from 'react-contextmenu-wl'
import NodeTree from '../index'

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
          console.log(node)
          if (node.title === 'title12') disableItems.push(node)
          return {
            id: node.type,
            disableItems
          }
        }}
        data={[
          {
            title: 'title1',
            children: [{
              title: 'title12',
              type: 'table'
            }, {
              title: 'title3',
              type: 'table'
            }]
          },{
            title: 'title4',
            children: [{
              title: 'title5',
              type: 'table'
            }, {
              title: 'title6',
              type: 'table'
            }]
          }
        ]}
      />
      <ContextMenu id="table">
        {(state) => {
          console.log(state)
          return [
            <MenuItem key="1">item 01</MenuItem>,
            (state.node.title !== 'title12' ? <MenuItem key="2">item 02</MenuItem> : null)
          ]
        }}
      </ContextMenu>
    </div>
  }
}
      `
    }
  )
