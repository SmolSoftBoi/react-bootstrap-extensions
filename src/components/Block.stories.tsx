import { Button } from 'react-bootstrap';
import { Meta, StoryObj } from '@storybook/react';

import Block from "./Block";

const meta: Meta<typeof Block> = {
  title: 'Block',
  component: Block
};

export const Template: StoryObj<typeof Block> = {
  render: (args) => (
    <Block className="text-center" {...args}>
      <Block.Title>A block</Block.Title>
      <h4 className="text-muted">Use these to package stackable, image driven content.</h4>
      <Button className="mt-1" variant="primary">With a simple button</Button>
    </Block>
  )
}

Template.args = {
  variant: 'dark'
}

export default meta;