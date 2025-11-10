import { Meta, StoryObj } from '@storybook/react-webpack5';

import PullQuote from "./PullQuote";

const meta: Meta<typeof PullQuote> = {
  title: 'PullQuote',
  component: PullQuote,
  argTypes: {
    variant: {
      control: 'text',
      description: 'Adds a variant modifier class such as `pull-quote-dark`.'
    }
  }
};

export const Playground: StoryObj<typeof PullQuote> = {
  args: {
    variant: 'dark'
  },
  render: (args) => (
    <PullQuote {...args}>
      <p>“They need to stop sleeping on me and get some understanding about this here game I spit!”</p>
      <cite>Mark Otto, Huge Nerd</cite>
    </PullQuote>
  )
}

export default meta;