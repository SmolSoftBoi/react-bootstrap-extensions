import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Block from "./Block";

const meta: ComponentMeta<typeof Block> = {
  title: 'Block',
  component: Block
};

export const Template: ComponentStory<typeof Block> = (args) => (
  <Block className="text-center" {...args}>
    <h1 className="block-title">A block</h1>
    <h4 className="text-muted">Use these to package stackable, image driven content.</h4>
    <button className="btn btn-primary mt-1" type="button">With a simple button</button>
  </Block>
)
Template.args = {
  variant: 'dark'
}

export default meta;