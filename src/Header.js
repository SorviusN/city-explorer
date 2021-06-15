import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

class Header extends React.Component {
  render() {
    return (
      <Container>
        <Navbar expand="lg" variant="dark" bg="dark">
        <Navbar.Brand href="#">City Explorer</Navbar.Brand>
        </Navbar>
      </Container>
    )
  }
}

export default Header;
