import React from 'react';
import { Button } from 'react-bootstrap';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Block from "./Block";

const meta: ComponentMeta<typeof Block> = {
  title: 'Block',
  component: Block
};

export const Template: ComponentStory<typeof Block> = (args) => (
  <Block className="text-center" {...args}>
    <Block.Title>A block</Block.Title>
    <h4 className="text-muted">Use these to package stackable, image driven content.</h4>
    <Button className="mt-1" variant="primary">With a simple button</Button>
  </Block>
)
Template.args = {
  variant: 'dark'
}

export default meta;