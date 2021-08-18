import React from "react";
import { withAuth0 } from "@auth0/auth0-react";
import { Navbar, Container, Nav, NavDropdown, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import imgLogo from "../assets/logoRightText-01.png";
import LogoutButton from "./Logout";
import LoginButton from "./LoginButton";

class Header extends React.Component {
  render() {
    const { user, isAuthenticated } = this.props.auth0;

    return (

      <Container fluid>

        <Row>
          <Navbar bg="dark" variant="dark" className="py-2">
            <Navbar.Brand href="/" className="ml-4">
              <img alt="logo" src={imgLogo} width="250px" />
            </Navbar.Brand>

            <Nav>
              <Nav.Link className="h4" href="/">
                {" "}
                Home{" "}
              </Nav.Link>
              <Nav.Link className="h4" href="blog">
                Blog
              </Nav.Link>

              {isAuthenticated ? (
                <NavDropdown
                  className="h4"
                  title="Adopt/Donate"
                  id="basic-nav-dropdown"
                >
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

            <Nav className="ms-auto align-items-center">
              {isAuthenticated ? (
                <Nav.Link className="h4" href="profile">
                  Hello, {user.name}
                </Nav.Link>
              ) : (
                <Nav.Link className="h4" href="profile">
                  Hello, Guest
                </Nav.Link>
              )}

              {isAuthenticated ? (
                <Nav.Link >
                  <LogoutButton />
                </Nav.Link>
              ) : (
                <Nav.Link >
                  <LoginButton />
                </Nav.Link>
              )}

            </Nav>
          </Navbar>
        </Row>
      </Container>
    );
  }
}

export default withAuth0(Header);
