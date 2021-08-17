import React from "react";
import { withAuth0 } from "@auth0/auth0-react";
import { Navbar, Container, Nav, NavDropdown, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import imgLogo from "../assets/logoRightText-01.png";
import LogoutButton from "./Logout";

class Header extends React.Component {
  render() {
    const { user, isAuthenticated } = this.props.auth0;

    return (
      <Container fluid >
        <Row>
          <Navbar bg="dark" variant="dark" className="py-2">
            <Navbar.Brand href="/" className="ml-2">
              <img alt="logo" src={imgLogo} width="250px" />
            </Navbar.Brand>
            <Nav className="">
              <Nav.Link href="/"> Home </Nav.Link>
              <Nav.Link href="blog">Blog</Nav.Link>
              {isAuthenticated ? (
                <NavDropdown title="Adopt/Donate" id="basic-nav-dropdown">
                  <NavDropdown.Item href="adoption">
                    AdoptAnAnimal
                  </NavDropdown.Item>
                  <NavDropdown.Item href="donation">
                    Contribute
                  </NavDropdown.Item>
                  <NavDropdown.Item href="giveAnimals">
                    GiveUpYourAnimal
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                ""
              )}
            </Nav>
            <Nav className="ms-auto">
              <NavDropdown
                title={
                  isAuthenticated ? `Hello, ${user.name}` : `Hello, Guest `
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="profile">Profile</NavDropdown.Item>
                {isAuthenticated ? (
                  <NavDropdown.Item>{<LogoutButton />}</NavDropdown.Item>
                ) : (
                  <NavDropdown.Item href="login">Login</NavDropdown.Item>
                )}
              </NavDropdown>
            </Nav>
          </Navbar>
        </Row>
      </Container>
    );
  }
}

export default withAuth0(Header);
