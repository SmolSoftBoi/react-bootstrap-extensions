import { Meta, StoryObj } from '@storybook/react';

import Container from "./Container";

const meta: Meta<typeof Container> = {
  title: 'Container',
  component: Container
};

export const Template: StoryObj<typeof Container> = {
  render: (args) => (
    <Container {...args}>
      <Container contentMiddle>Vertically centered content.</Container>
    </Container>
  )
}

Template.args = {
  fillHeight: true
}

export default meta;
