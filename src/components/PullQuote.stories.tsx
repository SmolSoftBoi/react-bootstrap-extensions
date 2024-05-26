import { Meta, StoryObj } from '@storybook/react';

import PullQuote from "./PullQuote";

const meta: Meta<typeof PullQuote> = {
  title: 'PullQuote',
  component: PullQuote
};

export const Template: StoryObj<typeof PullQuote> = {
  render: (args) => (
    <PullQuote {...args}>
      <p>“They need to stop sleeping on me and get some understanding about this here game I spit!”</p>
      <cite>Mark Otto, Huge Nerd</cite>
    </PullQuote>
  )
}

Template.args = {
  variant: 'dark'
}

export default meta;