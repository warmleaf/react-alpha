import React, { Component } from 'react'
import addons from '@storybook/addons'
import APIPanel from './components/APIPanel'

const Observable = (channel, api) => {
  return listener => {
    channel.on('warmleaf/betterDoc/add_addon', listener.next('API'))
    api.onStory(listener.next('current'))
  }
}

addons.register('warmleaf/betterDoc', api => {
  const ob = Observable(addons.getChannel(), api)

  addons.addPanel('warmleaf/betterDoc/panel', {
    title: 'API',
    render: () => <APIPanel ob={ob} />
  })
})