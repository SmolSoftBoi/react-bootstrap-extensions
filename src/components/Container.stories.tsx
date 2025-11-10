import { Meta, StoryObj } from '@storybook/react-webpack5';

import Container from "./Container";

const meta: Meta<typeof Container> = {
  title: 'Container',
  component: Container,
  argTypes: {
    fillHeight: {
      control: 'boolean',
      description: 'Adds `container-fill-height` to stretch vertically.'
    },
    contentMiddle: {
      control: 'boolean',
      description: 'Adds `container-content-middle` to center children.'
    }
  }
};

export const Playground: StoryObj<typeof Container> = {
  args: {
    fillHeight: true,
    contentMiddle: true
  },
  render: (args) => (
    <Container {...args}>
      <Container contentMiddle>Vertically centered content.</Container>
    </Container>
  )
}

export default meta;
