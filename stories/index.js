import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobsOptions } from '@storybook/addon-knobs';
import { linkTo } from '@storybook/addon-links';
import withDocs from 'storybook-readme/with-docs';
import { Button, Welcome } from '@storybook/react/demo';
import styled from "styled-components";
import README from '../README.md';
import './input';

let isRenderHome = false;
export function tellStories(storyname) {
  if (!isRenderHome) {
    storiesOf('About Me', module).add('README', withDocs({
      PreviewComponent: () => <style>{`.markdown-body { padding: 45px; }`}</style>
    })(README, () => null));
    isRenderHome = true;
  }

  const stories = storiesOf(storyname, module);
  stories.addDecorator(withKnobsOptions({
    debounce: { wait: 10, leading: true }, // Same as lodash debounce.
    timestamps: true // Doesn't emit events while user is typing.
  }));
  return stories;
}

