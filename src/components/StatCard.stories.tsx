import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import StatCard from "./StatCard";

const meta: ComponentMeta<typeof StatCard> = {
  title: 'StatCard',
  component: StatCard
};

export const Template: ComponentStory<typeof StatCard> = (args) => (
  <StatCard {...args}>
    <h3 className="statcard-number">12,938</h3>
    <span className="statcard-desc">Page views</span>
  </StatCard>
)
Template.args = {}

export default meta;