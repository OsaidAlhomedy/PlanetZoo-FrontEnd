import React, { Component } from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Form,
  FloatingLabel,
} from "react-bootstrap";
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";
import GivenPetCard from "./GivenPetCard";
import "./GiveAnimal.css";
import AdoptionAnimalCard from "./AdoptionAnimalCard";
import { Helmet } from "react-helmet";

class Adoption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: "",
      filteredData: null,
    };
  }

  getAnimals = async () => {
    const { user } = this.props.auth0;
    const email = user.email;
    const url = `${process.env.REACT_APP_SERVER}/getAnimal?email=${email}`;
    await axios
      .get(url)
      .then((result) => {
        this.setState({
          petData: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount = () => {
    this.getAnimals();
  };

  animalFilter = async (event) => {
    event.preventDefault();
    const newArr = await this.state.petData.filter((item) => {
      if (
        item.type == event.target.petType.value &&
        item.age == event.target.petAge.value &&
        item.adoptionStatus.toString() == event.target.petStatus.value
      )
        return item;
    });
    this.setState({
      petData: newArr,
    });
  };

  clearFilter = () => {
    this.getAnimals();
  };

  render() {
    return (
      <Container className="border">
        <Row className="text-center mb-5">
          <h1>Adopt An Animal</h1>
          <p>
            Animals need special care, so if you do not have the time to take
            care of your pet, you can give it up for adoption here.
          </p>
          <p>
            We know that life rarely goes according to plan and things don’t
            always work out, including owning a pet. We’re here to help. If you
            think you may need to give your dog up for adoption
          </p>
        </Row>

        <Row className="text-center mb-4">
          <h1>The Library</h1>
        </Row>

        <Row className="justify-content-center mb-5">
          <Col>
            <Form onSubmit={(event) => this.animalFilter(event)}>
              <Row>
                <Col className="">
                  <Row>
                    <h4 className="text-center">Filtration</h4>
                  </Row>
                  <Row md={2}>
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                    <Button variant="danger" onClick={this.clearFilter}>
                      Clear
                    </Button>
                  </Row>
                </Col>
                <Col>
                  <Form.Label>Pet Type</Form.Label>
                  <Form.Control
                    type="text"
                    name="petType"
                    placeHolder="cat , dog , bird ..."
                  />
                </Col>
                <Col>
                  <Form.Label>Pet Age</Form.Label>
                  <Form.Select name="petAge">
                    <option value="All">All</option>
                    <option value="Younger than 1 year">
                      Younger than 1 year
                    </option>
                    <option value="Between 1 and 5 years">
                      Between 1 and 5 years
                    </option>
                    <option value="Older than 5 years">
                      Older than 5 years
                    </option>
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Label>Pet Availability</Form.Label>
                  <Form.Select name="petStatus">
                    <option value="All">All</option>
                    <option value="false">Available for adoption</option>
                    <option value="true">Adopted</option>
                  </Form.Select>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>

        <Row className="cardContainer mb-4 bg-light py-5">
          {this.state.petData ? (
            this.state.petData.map((animal) => (
              <AdoptionAnimalCard
                name={animal.name}
                type={animal.type}
                breed={animal.breed}
                age={animal.age}
                img={animal.img}
                description={animal.description}
                adoptionStatus={animal.adoptionStatus}
                givenBy={animal.givenBy}
                deletePet={this.deleteAnimal}
                id={animal._id}
              />
            ))
          ) : (
            <p></p>
          )}
        </Row>
      </Container>
    );
  }
}

export default withAuth0(Adoption);
