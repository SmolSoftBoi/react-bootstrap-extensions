import { Meta, StoryObj } from '@storybook/react-webpack5';

import StatCard from "./StatCard";

const meta: Meta<typeof StatCard> = {
  title: 'StatCard',
  component: StatCard,
  argTypes: {
    className: {
      control: 'text',
      description: 'Optional utility classes for the card wrapper.'
    }
  }
};

export default meta;

type Story = StoryObj<typeof StatCard>;

export const Playground: Story = {
  render: (args) => (
    <StatCard {...args}>
      <h3 className="statcard-number">12,938</h3>
      <span className="statcard-desc">Page views</span>
    </StatCard>
  )
};