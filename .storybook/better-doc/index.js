import React from 'react';
import nestedObjectAssign from 'nested-object-assign';
import addons from '@storybook/addons'
import { logger } from '@storybook/client-logger';
import APIDoc from './components/APIDoc';
import PropTable from './components/PropTable';
import getPropDefinitions from './getPropDefinitions';
import { H1, H2, H3, H4, H5, H6, Code, P, UL, A, LI } from './components/markdown';

const defaultOptions = {
  inline: false,
  header: true,
  source: true,
  propTables: [],
  TableComponent: PropTable,
  maxPropsIntoLine: 3,
  maxPropObjectKeys: 3,
  maxPropArrayLength: 3,
  maxPropStringLength: 50,
};

const defaultComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  code: Code,
  p: P,
  a: A,
  li: LI,
  ul: UL,
};

let hasWarned = false;

function addInfo({ comment, platform, scope, code }, option) {
  const options = {
    ...option,
  };

  console.log('code ->', code)

  // const ComponentProps = getPropDefinitions(storyFn(context))

  // addons.getChannel().emit(
  //   'warmleaf/betterDoc/add_addon',
  //   context.kind,
  //   context.story,
  //   ComponentProps
  // )
  // return <APIDoc {...options}>{storyFn(context)}</APIDoc>;
}

export const withInfo = textOrOptions => {
  const options = typeof textOrOptions === 'string' ? { text: textOrOptions } : textOrOptions;
  return storyFn => context => addInfo(storyFn, context, options);
};

export { Story };

export default {
  addAPIDoc(storyName, demo, option) {
    return this.add(storyName, addInfo(demo, option))
  }
};

export function setDefaults(newDefaults) {
  return Object.assign(defaultOptions, newDefaults)
}