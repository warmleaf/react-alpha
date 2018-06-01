import React from 'react'
import addons from '@storybook/addons'
import APIDoc from './components/APIDoc'
import getPropDefinitions from './getPropDefinitions'


function addInfo(context, options, demo) {
  const { kind, story } = context
  const Component = Object.values(demo.scope)[0]
  const ComponentProps = getPropDefinitions(<Component/>)

  addons.getChannel().emit(
    'warmleaf/betterDoc/add_addon',
    kind,
    story,
    ComponentProps
  )
  return <APIDoc
    story={story}
    {...demo}
  />;
}

export { APIDoc }

export default {
  addAPIDoc(storyName, demo, options) {
    return this.add(storyName, context => addInfo(context, options, demo))
  }
};

export function setDefaults(newDefaults) {
  return Object.assign(defaultOptions, newDefaults)
}