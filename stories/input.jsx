import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { text, boolean, number, object } from '@storybook/addon-knobs';
import { withReadme, withDocs }  from 'storybook-readme';
import { tellStories } from './index';
import Input from '../package/input';
import inputMD from '../package/input/input.md';

tellStories('Input')
  .add('default', withReadme(inputMD, withInfo(`
  default use of Input
  `)(() => {
    const style = {
      width: '20px'
    };
    return <Input style={object('style', style)} onClick={action('clicked')} />;
  })))
  .add('statement', () => <Input
    style={{ width: '200px' }}
    onClick={action('clicked')}
    statement={<div>statement</div>}
  />)
  .add('status', () => <Input
    style={{ width: '200px' }}
    onClick={action('clicked')}
    status={<div>status</div>}
  />)
  .add('statement & status', () => <Input
    style={{ width: '200px' }}
    onClick={action('clicked')}
    statement={<div>statement</div>}
    status={<div>status</div>}
  />)
  .add('async statement & status', () => <Input
    style={{ width: '200px' }}
    onClick={action('clicked')}
    statement={<div>statement</div>}
    status={<div>status</div>}
  />)
  .add('input check', () => <Input
    style={{ width: '200px' }}
    onClick={action('clicked')}
    statement={<div>statement</div>}
  />)
  .add('input async check', () => <Input
    style={{ width: '200px' }}
    onClick={action('clicked')}
    statement={<div>statement</div>}
  />);
