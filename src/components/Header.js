import React from "react";
import { withAuth0 } from "@auth0/auth0-react";
import { Navbar, Container, Nav, NavDropdown, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import imgLogo from "../assets/logoRightText-01.png";
import LogoutButton from "./Logout";

class Header extends React.Component {
  render() {
    const { user, isAuthenticated } = this.props.auth0;

    return (
      <>
        <Navbar bg="dark" variant="dark" className="py-2">
          <Container>
            <Navbar.Brand href="app.js">
              <img
                alt="logo"
                src={imgLogo}
                width="300px"
              />
            </Navbar.Brand>
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
                    <LogoutButton />
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
