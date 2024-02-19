import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Container from "./Container";

const meta: ComponentMeta<typeof Container> = {
  title: 'Container',
  component: Container
};

export const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args}>
    <Container contentMiddle>Vertically centered content.</Container>
  </Container>
)
Template.args = {
  fillHeight: true
}

export default meta;
