import React from 'react'
import { storiesOf } from '@storybook/react'
import { linkTo } from '@storybook/addon-links'
import { Button, Welcome } from '@storybook/react/demo'

storiesOf('Introduce', module).add('About', () => <Welcome showApp={linkTo('Button')} />)
