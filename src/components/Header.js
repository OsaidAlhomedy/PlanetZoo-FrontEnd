import React from "react";
import { withAuth0 } from "@auth0/auth0-react";
import { Navbar, Container, Nav, NavDropdown, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import imgLogo from "../assets/logoRightText-01.png";
import Logout from "./components/Logout";

class Header extends React.Component {
  render() {
    const { user, isAuthenticated } = this.props.auth0;

    return (
      <>
        <Navbar bg="dark" variant="dark" className="py-4">
          <Container>
            <Container>
              <Navbar.Brand href="app.js">
                <img
                  alt="logo"
                  src={imgLogo}
                  width="100"
                  height="100"
                  className="d-inline-block "
                />
                ZOO PLANET
              </Navbar.Brand>
            </Container>
            <Nav className="mr-auto my-2 my-lg-0">
              <Nav.Link href="home"> Home </Nav.Link>
              <Nav.Link href="blog">Blog</Nav.Link>
              <NavDropdown title="Adopt/Donate" id="basic-nav-dropdown">
                <NavDropdown.Item href="adoption">
                  AdoptAnAnimal
                </NavDropdown.Item>
                <NavDropdown.Item href="donation">Contribute</NavDropdown.Item>
                <NavDropdown.Item href="giveAnimals">
                  GiveUpYourAnimal
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title={isAuthenticated ? `Hello ${user.name}` : `Hello Guest `}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="profile">Profile</NavDropdown.Item>
                {isAuthenticated ? (
                  <NavDropdown.Item>
                    <Logout />
                  </NavDropdown.Item>
                ) : (
                  <NavDropdown.Item href="login">Login</NavDropdown.Item>
                )}
              </NavDropdown>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default withAuth0(Header);
