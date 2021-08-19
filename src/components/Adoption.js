import React, { Component } from "react";
import { Button, Container, Row, Col, Form, Image } from "react-bootstrap";
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";
import "./GiveAnimal.css";
import AdoptionAnimalCard from "./AdoptionAnimalCard";
import AdoptionHero from "../assets/adoptioHero.png";

class Adoption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: "",
      filteredData: null,
    };
  }

  getAnimals = async () => {
    const url = `${process.env.REACT_APP_SERVER}/getAnimalAdoption`;
    await axios
      .get(url)
      .then((result) => {
        this.setState({
          petData: result.data,
        });
        console.log(result.data);
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

  adoptAnimal = async (id, adoptName) => {
    const adoptData = {
      adoptName: adoptName,
    };
    await axios
      .put(
        `${process.env.REACT_APP_SERVER}/updateAdoptedAnimal/${id}`,
        adoptData
      )
      .then((result) => {
        this.setState({
          petData: result.data,
        });
        this.getAnimals();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { user } = this.props.auth0;
    return (
      <Container fluid className="border">
        <Row>
          <Image src={AdoptionHero} />
        </Row>

        <Row className="mb-5 bg-light pb-5 d-flex justify-content-center">
          <Col md={10}>
            <Row className="my-5 text-center">
              <h1>Why you should consider Adopting ?</h1>
            </Row>
            <h2 className="mt-4">🐶 You'll save a life</h2>
            <h4>
              Each year, it's estimated that more than one million adoptable
              dogs and cats are euthanized in the United States, simply because
              too many pets come into shelters and too few people consider
              adoption when looking for a pet. The number of euthanized animals
              could be reduced dramatically if more people adopted pets instead
              of buying them. When you adopt, you save a loving animal by making
              them part of your family and open up shelter space for another
              animal who might desperately need it.
            </h4>
            <h2 className="mt-4">🐰 You'll get a great animal</h2>
            <h4>
              Animal shelters and rescue groups are brimming with happy, healthy
              pets just waiting for someone to take them home. Most shelter pets
              wound up there because of a human problem like a move or a
              divorce, not because the animals did anything wrong. Many are
              already house-trained and used to living with families.
            </h4>
            <h2 className="mt-4">🤑 It’ll cost you less</h2>
            <h4>
              Usually when you adopt a pet, the cost of spay/neuter, first
              vaccinations is included in the adoption price, which can save you
              some of the up front costs of adding a new member to your family.
              Depending on the animal, you may also save on housebreaking and
              training expenses.
            </h4>
            <h2 className="mt-4">😼 Because of the bragging rights.</h2>
            <h4>
              No one needs to see another selfie unless it’s a selfie of you
              with the adorable pet you just adopted! Adopt a pet, post those
              pictures and let the well-earned likes roll in.
            </h4>
          </Col>
        </Row>

        <Row className="text-center mb-4">
          <h1>Choose Your New Firend:</h1>
        </Row>

        <Row className="justify-content-center mb-5">
          <Col>
            <Form onSubmit={(event) => this.animalFilter(event)}>
              <Row>
                <Row md={3}>
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
                <Row>
                  <Col className="d-flex justify-content-evenly mt-5">
                    <Button
                      variant="primary"
                      type="submit"
                      style={{ width: "200px" }}
                    >
                      Submit
                    </Button>

                    <Button
                      style={{ width: "200px" }}
                      variant="danger"
                      onClick={this.clearFilter}
                    >
                      Clear
                    </Button>
                  </Col>
                </Row>
              </Row>
            </Form>
          </Col>
        </Row>

        <Row className="mb-4 bg-light py-5">
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
                adoptName={user.name}
                adoptAnimal={this.adoptAnimal}
                adoptedBy={animal.adoptedBy}
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
