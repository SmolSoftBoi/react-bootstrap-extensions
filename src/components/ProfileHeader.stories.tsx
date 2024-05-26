import { Container, Image, Nav } from 'react-bootstrap';
import { Meta, StoryObj } from '@storybook/react';

import ProfileHeader from './ProfileHeader';

const meta: Meta<typeof ProfileHeader> = {
  title: 'ProfileHeader',
  component: ProfileHeader
};

export const Template: StoryObj<typeof ProfileHeader> = {
  render: (args) => (
    <ProfileHeader className="text-center" {...args}>
      <Container fluid>
        <div className="container-inner">
          <Image className="rounded-circle media-object" src="https://smolsoftboi.github.io/bootstrap-extensions/docs/assets/img/examples/avatar-dhg.png" alt="Dave Gamache avatar" />
          <h3 className="profile-header-user">Dave Gamache</h3>
          <p className="profile-header-bio">I wish i was a little bit taller, wish i was a baller, wish i had a girl&hellip; also.</p>
        </div>
      </Container>
      <nav className="profile-header-nav">
        <Nav className="profile-header-nav justify-content-center" variant="tabs" as="ul">
          <Nav.Item as="li">
            <Nav.Link href="#" active>Photos</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="#" active>Others</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="#" active>Anothers</Nav.Link>
          </Nav.Item>
        </Nav>
      </nav>
    </ProfileHeader>
  )
}

Template.args = {
  style: {
    backgroundImage: `url(https://smolsoftboi.github.io/bootstrap-extensions/docs/assets/img/examples/iceland.jpg)`
  }
}

export default meta;