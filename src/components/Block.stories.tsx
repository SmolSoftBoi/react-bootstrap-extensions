import { Button } from 'react-bootstrap';
import { Meta, StoryObj } from '@storybook/react-webpack5';

import Block from "./Block";

const meta: Meta<typeof Block> = {
  title: 'Block',
  component: Block,
  argTypes: {
    variant: {
      control: 'text',
      description: 'Applies a variant class such as `block-dark`.'
    },
    className: {
      control: 'text',
      description: 'Utility classes to position the block content.'
    }
  }
};

export const Playground: StoryObj<typeof Block> = {
  args: {
    className: 'text-center',
    variant: 'dark'
  },
  render: (args) => (
    <Block {...args}>
      <Block.Title>A block</Block.Title>
      <h4 className="text-muted">Use these to package stackable, image driven content.</h4>
      <Button className="mt-1" variant="primary">With a simple button</Button>
    </Block>
  )
}

export default meta;