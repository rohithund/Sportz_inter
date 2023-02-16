import React from "react";
import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";
import FormControl from "react-bootstrap/FormControl";

const NavBar = (props) => {
  const { value, onChange } = props;

  return (
    <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand href="#">Player Search</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <FormControl
            type="text"
            placeholder="Search players"
            className="mr-sm-2"
            value={value}
            onChange={onChange}
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
