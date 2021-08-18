import React from "react";
import Carousel from "react-bootstrap/Carousel";
import {
  Card,
  CardGroup,
  Button,
  Container,
  Row,
  Col,
  Form,
} from "react-bootstrap";
import "../Test.css";
import { Route } from "react-router-dom";
import axios from "axios";
import huski from "../assets/jesse-schoff-i2DefZ6PCN0-unsplash.jpg";
import snjab from "../assets/david-solce-PhOAIvz3fBA-unsplash.jpg";
import abusha3ar from "../assets/don-hassan-HZjI3mXpFXA-unsplash.jpg";
import Bird from "../assets/sad_cat_hero.jpg";
import hair from "../assets/mahdi-bafande-59zCZ2pVC9Y-unsplash.jpg";
import jajeh from "../assets/jesse-schoff-qVneOrTN06c-unsplash.jpg";
import kitten from "../assets/dog2.jpg";

import Blogs from "./Blogs";
import BlogCards from "./BlogCards";
import InfoForm from "./InfoForm";
import Autofill from "./Autofill";
import AboutUs from "./AboutUs";
import RandomFactGen from "./RandomFactGen";
import Sponsors from "./Sponsors";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: [],
    };
  }

  render() {
    return (
      <>
        <Row>
          <Carousel fade bg="dark" className="">
            <Carousel.Item>
              <img className="d-block w-100" src={huski} alt="Third slide" />
              <Carousel.Caption className="mb-5 heroCaption">
                <h3>
                  {" "}
                  “Dogs are our link to paradise. They don’t know jealousy or
                  discontent.”{" "}
                </h3>
                <p> Milan Kundera </p>
                <Route
                  render={({ history }) => (
                    <Button
                      className="buttons rounded-pill"
                      type="button"
                      variant="light"
                      size="lg"
                      onClick={() => {
                        history.push("/adoption");
                      }}
                    >
                      Adopt an Animal
                    </Button>
                  )}
                />
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 h-20"
                src={snjab}
                alt="First slide"
              />
              <Carousel.Caption className="mb-5 heroCaption">
                <h3>
                  “Animals are such agreeable friends—they ask no questions;
                  they pass no criticisms.”{" "}
                </h3>
                <p> George Eliot</p>
                <Route
                  render={({ history }) => (
                    <Button
                      className="buttons rounded-pill"
                      type="button"
                      variant="light"
                      size="lg"
                      onClick={() => {
                        history.push("/adoption");
                      }}
                    >
                      Adopt an Animal
                    </Button>
                  )}
                />
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 h-20"
                src={abusha3ar}
                alt="First slide"
              />
              <Carousel.Caption className="mb-5 heroCaption">
                <h3>
                  “One small cat changes coming home to an empty house to coming
                  home.”{" "}
                </h3>
                <p> Pam Brown </p>
                <Route
                  render={({ history }) => (
                    <Button
                      className="buttons rounded-pill"
                      type="button"
                      variant="light"
                      size="lg"
                      onClick={() => {
                        history.push("/adoption");
                      }}
                    >
                      Adopt an Animal
                    </Button>
                  )}
                />
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 h-20 "
                src={Bird}
                alt="First slide"
              />
              <Carousel.Caption className="mb-5 heroCaption">
                <h3>
                  “When I look into the eyes of an animal, I do not see an
                  animal.
                  <br /> I see a living being. I see a friend. I feel a soul.”{" "}
                </h3>
                <p> Anthony Douglas Williams </p>
                <Route
                  render={({ history }) => (
                    <Button
                      className="buttons rounded-pill"
                      type="button"
                      variant="light"
                      size="lg"
                      onClick={() => {
                        history.push("/adoption");
                      }}
                    >
                      Adopt an Animal
                    </Button>
                  )}
                />
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 h-20"
                src={hair}
                alt="Second slide"
              />
              <Carousel.Caption className="mb-5 heroCaption">
                <h3>
                  “A dog is the only thing on earth that loves you more than you
                  love yourself.”{" "}
                </h3>
                <p>Josh Billings</p>

                <Route
                  render={({ history }) => (
                    <Button
                      className="buttons rounded-pill"
                      type="button"
                      variant="light"
                      size="lg"
                      onClick={() => {
                        history.push("/adoption");
                      }}
                    >
                      Adopt an Animal
                    </Button>
                  )}
                />
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100 h-20"
                src={jajeh}
                alt="Second slide"
              />
              <Carousel.Caption className="mb-5 heroCaption">
                <h3>“Animals are my friends, and I don’t eat my friends.”</h3>
                <p> George Bernard Shaw</p>
                <Route
                  render={({ history }) => (
                    <Button
                      className="buttons rounded-pill"
                      type="button"
                      variant="light"
                      size="lg"
                      onClick={() => {
                        history.push("/blog");
                      }}
                    >
                      Adopt an Animal
                    </Button>
                  )}
                />
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>

        <Row className="rowBlog h-75">
          <Col
            className="d-flex bg-dark text-light text-center blogCol3 justify-content-center align-items-center"
            md={4}
          >
            <h2 style={{ fontSize: "160px" }}>The{<br />}Blog</h2>
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <BlogCards />
          </Col>
        </Row>

        {/* <Row className="dividerRow h-25"></Row> */}

        <Row className="">
          <Col>
            <Row className="d-flex justify-content-center h-100 border pt-4">
              <Col md={10}>
                <Row className="justify-content-center">
                  <h2 className="text-center">Search For An Animal!</h2>
                  <h5 className="text-center">
                    You can use this tool to search for data about your favorite
                    animal or pet:
                  </h5>
                </Row>
                <Row>
                  <InfoForm />
                </Row>
              </Col>
            </Row>
          </Col>

          <Col>
            <Row className="d-flex justify-content-center h-50">
              <Col className="border pt-4">
                <h2 className="text-center">Cruelty Free Checker </h2>
                <h5 className="text-center">
                  Check if a compony tests their products on animals
                </h5>
                <Autofill />
              </Col>
            </Row>

            <Row className="border h-50 pt-4">
              <Col className="">
                <h2 className="text-center">
                  {" "}
                  Git Random Fact About Random Animal{" "}
                </h2>
                <p className="h5 text-center">
                  Click the card to get a random fact
                </p>
                <RandomFactGen />
              </Col>
            </Row>
          </Col>

          <Col
            className="d-flex bg-dark py-5 text-light text-center blogCol2 justify-content-evenly align-items-center"
            md={4}
          >
            <h2 style={{ fontSize: "160px" }}>
              K{<br />}N{<br />}O{<br />}W
            </h2>
            <h2 style={{ fontSize: "160px" }}>
              M{<br />}O{<br />}R{<br />}E
            </h2>
          </Col>
        </Row>
        {/* <Row className="dividerRow2 h-25"></Row> */}
        <Row className="">
          <Col
            className="d-flex bg-dark text-light text-center blogCol justify-content-center align-items-center"
            md={4}
          >
            <h2 style={{ fontSize: "160px" }}>THE{<br />}TEAM</h2>
          </Col>
          <Col>
            <AboutUs />
          </Col>
        </Row>

        <Row className="h-50">
          <Col>
            <Row className="d-flex justify-content-center align-items-center border h-100">
              <Sponsors />
            </Row>
          </Col>
          <Col
            className="d-flex bg-dark text-light text-center blogCol3 justify-content-center align-items-center"
            md={4}
          >
            <h2 style={{ fontSize: "120px" }}>THE{<br />}SPONSORS</h2>
          </Col>
        </Row>
      </>
    );
  }
}
export default Home;
