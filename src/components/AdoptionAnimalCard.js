import React, { Component } from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class AdoptionAnimalCard extends Component {
  render() {
    return (
      <Col className="d-flex">
        {this.props.adoptionStatus && (
          <div className="adoptedCard">
            Adopted
            <p>By: {this.props.adoptedBy}</p>
            😻
          </div>
        )}
        <Card className="m-3" style={{ width: "22rem" }}>
          <Card.Img variant="top" src={this.props.img} alt="pet image" />
          <Card.Body>
            <Card.Title className="mb-1">
              Pet Name :{this.props.name}
            </Card.Title>
            <Card.Text muted>Given up by : {this.props.givenBy}</Card.Text>
            <Card.Text>
              <Row className="mb-4">
                <h4>Pet Type :{this.props.type}</h4>
              </Row>

              <Row className="mb-4">
                <h4>Pet Breed :{this.props.breed}</h4>
              </Row>

              <Row className="mb-4">
                <h4>Pet Age :{this.props.age}</h4>
              </Row>

              <Row>
                <article className="text-justify">{this.props.article}</article>
              </Row>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Row>
              {!this.props.adoptionStatus ? (
                <Button
                  variant="success"
                  onClick={() =>
                    this.props.adoptAnimal(this.props.id, this.props.adoptName)
                  }
                >
                  Adopt
                </Button>
              ) : <Button
              variant="success"
              disabled
              onClick={() =>
                this.props.adoptAnimal(this.props.id, this.props.adoptName)
              }
            >
              Adopt
            </Button>}
            </Row>
          </Card.Footer>
        </Card>
      </Col>
    );
  }
}

export default AdoptionAnimalCard;
