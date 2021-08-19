import React, { Component } from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Form,
  FloatingLabel,
  Image,
} from "react-bootstrap";
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";
import GivenPetCard from "./GivenPetCard";
import "./GiveAnimal.css";
import cartoonWoman from "../assets/cartoonWoman-01.jpg";
import AnimalUpdateModal from "./AnimalUpdateModal";

class GiveAnimal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: "",
      updateModalShow: false,
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

  addAnimal = async (event) => {
    event.preventDefault();
    const { user } = this.props.auth0;
    const petImg = this.state.imageUrl;

    const petData = {
      petName: event.target.petName.value,
      petType: event.target.petType.value,
      petBreed: event.target.petBreed.value,
      petAge: event.target.petAge.value,
      petDesc: event.target.petDesc.value,
      petImg: petImg,
      userName: user.name,
      userEmail: user.email,
    };
    await axios
      .post(`${process.env.REACT_APP_SERVER}/addAnimal`, petData)
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

  fileHandler = async (e) => {
    console.log(e.target.files[0]);
    await this.setState({
      file: e.target.files[0],
    });
  };

  fileUploadHandler = () => {
    const imageData = new FormData();
    imageData.append("image", this.state.file);
    axios
      .post(
        `https://api.imgbb.com/1/upload?key=35e78e11c9ee326d3d5820bfb541c27e`,
        imageData,
        {
          onUploadProgress: (progressEvent) => {
            this.setState({
              uploadMeter: Math.round(
                (progressEvent.loaded / progressEvent.total) * 100
              ),
            });
          },
        }
      )
      .then((result) => {
        console.log(result.data);
        this.setState({
          imageUrl: result.data.data.image.url,
        });
        console.log(this.state.imageUrl);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  deleteAnimal = async (id) => {
    const idNum = id;
    await axios
      .delete(`${process.env.REACT_APP_SERVER}/deleteAnimal/${idNum}`)
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
    this.getAnimals();
  };

  updateAnimalFormShow = (name, type, breed, age, description, id) => {
    this.setState({
      previousData: {
        name: name,
        type: type,
        breed: breed,
        age: age,
        description: description,
        id: id,
      },
      updateModalShow: true,
    });
  };

  updateAnimalFormHide = () => {
    this.setState({
      updateModalShow: false,
    });
  };

  updateAnimal = async (event) => {
    event.preventDefault();
    const idNum = this.state.previousData.id;
    const petData = {
      petName: event.target.petName.value,
      petType: event.target.petType.value,
      petBreed: event.target.petBreed.value,
      petAge: event.target.petAge.value,
      petDesc: event.target.petDesc.value,
    };

    await axios
      .put(`${process.env.REACT_APP_SERVER}/updateAnimal/${idNum}`, petData)
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
    return (
      <Container fluid className="border">
        <Row className="text-center mb-5">
          <Image src={cartoonWoman} />
        </Row>
        <Row className="mb-5 bg-light pb-5 d-flex justify-content-center">
          <Col md={10}>
            <h2 className="mt-4">
              🔵 You can't make available the financial and personal resources
              that a pet requires
            </h2>
            <h2 className="mt-4">
              🔵 Physical inability to exercise him properly
            </h2>

            <h2 className="mt-4">
              🔵 Inability to drive or use public transit to purchase food and
              supplies or take him to the vet
            </h2>

            <h2 className="mt-4">🔵 Injury while attempting to care for him</h2>

            <h2 className="mt-4">
              🔵 A depletion of energy due to medical treatment, making it
              increasingly difficult to provide care
            </h2>
            <h2 className="mt-4">
              🔵 A worsening or newly-developed physical or mental disability
              preventing adequate care
            </h2>
            <h2 className="mt-4">
              🔵 Numerous high medical bills that make you financially unable to
              provide care, especially if your pet also has serious medical
              condition requiring expensive treatment
            </h2>
            <h2 className="mt-4">
              🔵 Your condition has changed your lifestyle so much that your pet
              is noticeably unhappy due to lack of attention, exercise or other
              care
            </h2>
          </Col>
        </Row>
        <Row className="text-center mb-4">
          <h1>Pets you have given up</h1>
        </Row>

        <Row className="cardContainer mb-4 bg-light py-5">
          {this.state.petData ? (
            this.state.petData.map((animal) => (
              <GivenPetCard
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
                updateAnimalFormShow={this.updateAnimalFormShow}
                adoptedBy={animal.adoptedBy}
              />
            ))
          ) : (
            <p></p>
          )}
        </Row>

        <Row className="justify-content-center">
          <Col md={8}>
            <Form onSubmit={(event) => this.addAnimal(event)}>
              <Form.Group className="mb-5">
                <h4 className="text-center">
                  Write some details about your pet:
                </h4>
              </Form.Group>

              <Form.Group className="mb-3">
                <FloatingLabel label="Pet Name">
                  <Form.Control type="text" name="petName" />
                </FloatingLabel>
              </Form.Group>

              <Form.Group className="mb-3">
                <FloatingLabel label="Type">
                  <Form.Control size="sm" type="text" name="petType" />
                </FloatingLabel>
              </Form.Group>
              <Form.Group className="mb-3">
                <FloatingLabel label="Breed">
                  <Form.Control size="sm" type="text" name="petBreed" />
                </FloatingLabel>
              </Form.Group>
              <Form.Group className="mb-3">
                <FloatingLabel controlId="floatingSelect" label="Age">
                  <Form.Select
                    aria-label="Floating label select example"
                    name="petAge"
                  >
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
                </FloatingLabel>
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-2">
                <Form.Label>Upload a lovely picture of your pet :</Form.Label>
                <Form.Control
                  type="file"
                  name="img"
                  onChange={this.fileHandler}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Button
                  className="text-center mr-3"
                  variant="primary"
                  onClick={this.fileUploadHandler}
                >
                  Upload
                </Button>
                <Form.Text className="text-muted ml-5">
                  {this.state.uploadMeter
                    ? `Uploading : ${this.state.uploadMeter}%`
                    : ""}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Pet description</Form.Label>
                <Form.Control
                  as="textarea"
                  name="petDesc"
                  placeholder="Blacky doesn't like new faces, he is angry most of the time and always sleeping"
                  style={{ height: "100px" }}
                />
              </Form.Group>
              <Form.Group className="mb-3 text-center">
                <Button
                  size="lg"
                  className="text-center mt-4"
                  variant="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>

        {this.state.previousData && (
          <AnimalUpdateModal
            updateModalShow={this.state.updateModalShow}
            updateAnimalFormHide={this.updateAnimalFormHide}
            previousData={this.state.previousData}
            updateAnimal={this.updateAnimal}
          />
        )}
      </Container>
    );
  }
}

export default withAuth0(GiveAnimal);
