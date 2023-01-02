import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PullQuote from "./PullQuote";

const meta: ComponentMeta<typeof PullQuote> = {
  title: 'PullQuote',
  component: PullQuote
};

export const Template: ComponentStory<typeof PullQuote> = (args) => (
  <PullQuote {...args}>
    <p>“They need to stop sleeping on me and get some understanding about this here game I spit!”</p>
    <cite>Mark Otto, Huge Nerd</cite>
  </PullQuote>
)
Template.args = {
  variant: 'dark'
}

export default meta;