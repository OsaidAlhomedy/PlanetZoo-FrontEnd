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

class Adoption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: "",
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
        console.log(this.state.petData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount = () => {
    this.getAnimals();
  };

  updateAnimal = async (event) => {
    event.preventDefault();
    const { user } = this.props.auth0;
    const petImg = this.state.imageUrl;
    await axios
      .put(`${process.env.REACT_APP_SERVER}/addAnimal`)
      .then((result) => {
        this.setState({
          petData: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
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
            <Form>
              <Row>
                <Col className="d-flex align-items-center justify-content-center">
                  <h4 className="text-center">Filtration</h4>
                </Col>
                <Col>
                  <Form.Label>Pet Type:</Form.Label>
                  <Form.Select name="petType">
                    <option value="cat">Cat</option>
                    <option value="dog">Dog</option>
                    <option value="bird">Bird</option>
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Label>Pet Age:</Form.Label>
                  <Form.Select name="petAge">
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
                  <Form.Label>Pet Availability :</Form.Label>
                  <Form.Select name="petStatus">
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
