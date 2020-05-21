import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import Header from '../component/header/header.js';
import Search from '../component/search/search.js';
import Result from '../component/result/result.js';
import Dashboard from '../component/dashboard/dashboard.js';
import App from '../App.js';
import 'tachyons';
export default {
  title: 'Button',
  component: Button,
};

export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

export const header = () => <Header/>;

export const search = () => <Search/>;

export const result = () => <Result/>;

export const dash = () => <Dashboard/>;

export const combine = () => <App/>;