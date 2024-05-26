import { Meta, StoryObj } from '@storybook/react';

import StatCard from "./StatCard";

const meta: Meta<typeof StatCard> = {
  title: 'StatCard',
  component: StatCard
};

export const Template: StoryObj<typeof StatCard> = {
  render: (args) => (
    <StatCard {...args}>
      <h3 className="statcard-number">12,938</h3>
      <span className="statcard-desc">Page views</span>
    </StatCard>
  )
}

Template.args = {}

export default meta;