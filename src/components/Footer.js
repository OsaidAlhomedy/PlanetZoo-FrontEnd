import React from "react";
import { Container, Row } from "react-bootstrap";
import imgLogo from "../assets/logoRightText-01.png";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGoogle,
} from "react-icons/fa";

class Footer extends React.Component {
  render() {
    return (
        <footer className="bg-dark text-center text-white">
          <div className="container p-4">
            <section className="mb-4"></section>

          <div className="text-center p-3">
            <img alt="logo" src={imgLogo} width="300px" />
            <br></br>
            Contact Us at :<br></br>
            {/* <a className="text-white" href="/aboutus">About Us</a> */}
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <FaFacebook />
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <FaTwitter />
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <FaGoogle />
              <i className="fab fa-google"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <FaInstagram />
              <i className="fab fa-instagram"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <FaLinkedin /> <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <FaGithub />
              <i className="fab fa-github"></i>
            </a>
            <br></br>© PLANET ZOO
          </div>
        </footer>
      </>
    );
  }
}
export default Footer;
