import React, { Component } from "react";
import { Col, Row, Image } from "react-bootstrap";
import randomIcon from "../assets/randomIcon.png";
import axios from "axios";

export class RandomFactGen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getRandFact = async (event) => {
    event.preventDefault();

    await axios
      .get(`${process.env.REACT_APP_SERVER}/randomFact`)
      .then((results) => {
        this.setState({
          randFact: {
            animal: results.data.animal,
            fact: results.data.fact,
          },
        });
        console.log(this.state.randFact);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <Row className="d-flex justify-content-center">
        <Row className="d-flex justify-content-center">
          <Image
            src={randomIcon}
            style={{ width: "200px", cursor: "pointer" }}
            onClick={this.getRandFact}
          />
        </Row>
        <Row>
          {this.state.randFact && (
            <>
              <h2>Animal: {this.state.randFact.animal}</h2>
              <p>
                <b>Fact</b>: {this.state.randFact.fact}
              </p>
            </>
          )}
        </Row>
      </Row>
    );
  }
}

export default RandomFactGen;
