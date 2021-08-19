import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import { Container, Row, Image, Col } from "react-bootstrap";
import "./profile.css";
import Header from "./Header";
import Footer from "./Footer";

class Profile extends Component {
  render() {
    const { user, isAuthenticated } = this.props.auth0;
    return (
      <>
        <Container className="vh-100" fluid>
          {isAuthenticated && (
            <aside class="profile-card">
              <header>
                <a href="#">
                  <Image src={user.picture} alt={user.name} />
                </a>

                <h1> {user.name}</h1>

                <h2>Email : {user.email}</h2>
              </header>

              <div class="profile-bio">
                <p>Welcome To PlanetZOO </p>
              </div>
            </aside>
          )}
        </Container>
      </>
    );
  }
}

export default withAuth0(Profile);
