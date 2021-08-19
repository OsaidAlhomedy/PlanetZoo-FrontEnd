import React, { Component } from "react";
import animalAidLogo from "../assets/Animal-Aid-logo.jpg";
import crueltyFreeLogo from "../assets/crueltyFreeLogo.jpg";
import petaLogo from "../assets/Peta_logo.svg.png";
import { Image, Row, Col } from "react-bootstrap";

export class Sponsors extends Component {
  render() {
    return (
      <>
        <Col className="text-center">
          <Image src={animalAidLogo} width="250px" />
        </Col>
        <Col className="text-center">
          <Image src={crueltyFreeLogo} width="250px" />
        </Col>
        <Col className="text-center">
          <Image src={petaLogo} width="250px" />
        </Col>
      </>
    );
  }
}

export default Sponsors;
