import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Container, Col, Image } from "react-bootstrap";
import Alaa from "../assets/Alaa.png";
import Khaled from "../assets/khaled.png";
import Osaid from "../assets/Osaid.png";
import Naim from "../assets/Naim.png";
import Linkedin from "../assets/linkedin_black_logo_icon_147114.png";
import Github from "../assets/github-logo_icon-icons.com_73546.png";

class aboutUs extends React.Component {
  render() {
    return (
      <>
        <Container fluid>
          <Row className="text-center m-5">
            <Row xs={2} md={4}>
              <Col className="p-2 justify-content-center d-flex">
                <Card className="shadow-lg" style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={Osaid} />
                  <Card.Body>
                    <Card.Title className="text-dark">
                      Osaid Alhomedy
                    </Card.Title>
                    <Card.Title className="text-dark">
                      Full-stack Developer
                    </Card.Title>

                    <Card.Text className="text-dark">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                    <div>
                      <a href="https://www.linkedin.com/in/osaid-alhomedy-920920920/?originalSubdomain=jo">
                        <Image
                          src={Linkedin}
                          className=""
                          style={{ width: "2rem" }}
                          target="_blank"
                        />
                      </a>

                      <a href="https://github.com/OsaidAlhomedy">
                        <Image
                          src={Github}
                          className="GithubIcon"
                          style={{ width: "2rem" }}
                        />
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col className="p-2 justify-content-center d-flex">
                <Card className="shadow-lg" style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={Naim} />
                  <Card.Body>
                    <Card.Title className="text-dark">Naim AlOmari</Card.Title>
                    <Card.Title className="text-dark">
                      Full-stack Developer
                    </Card.Title>

                    <Card.Text className="text-dark">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                    <div>
                      <a href="https://www.linkedin.com/in/naeem-abdulhamid-alomari-4b902a170/">
                        <Image
                          src={Linkedin}
                          className="linkedInIcon"
                          style={{ width: "2rem" }}
                          target="_blank"
                        />
                      </a>

                      <a href="https://github.com/naeemalomari">
                        <Image
                          src={Github}
                          className="GithubIcon"
                          style={{ width: "2rem" }}
                        />
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="p-2 justify-content-center d-flex">
                <Card className="shadow-lg" style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={Alaa} />
                  <Card.Body>
                    <Card.Title className="text-dark">Alaa Baroud</Card.Title>
                    <Card.Title className="text-dark">
                      Full-stack Developer
                    </Card.Title>

                    <Card.Text className="text-dark">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                    <div>
                      <a href="https://www.linkedin.com/in/alaa-baroud-125691178/">
                        <Image
                          src={Linkedin}
                          className="linkedInIcon"
                          style={{ width: "2rem" }}
                          target="_blank"
                        />
                      </a>

                      <a href="https://github.com/alaabaroud">
                        <Image
                          src={Github}
                          className="GithubIcon"
                          style={{ width: "2rem" }}
                        />
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col className="p-2 justify-content-center d-flex">
                <Card className="shadow-lg" style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={Khaled} />
                  <Card.Body>
                    <Card.Title className="text-dark">
                      Khaled Alqrainy
                    </Card.Title>
                    <Card.Title className="text-dark">
                      Full-stack Developer
                    </Card.Title>

                    <Card.Text className="text-dark">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                    <div>
                      <a href="https://www.linkedin.com/in/khaled-alqrainy/">
                        <Image
                          src={Linkedin}
                          className="linkedInIcon"
                          style={{ width: "2rem" }}
                          target="_blank"
                        />
                      </a>

                      <a href="https://github.com/KhaledAlqrainy">
                        <Image
                          src={Github}
                          className="GithubIcon"
                          style={{ width: "2rem" }}
                        />
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Row>

          {/* ////////////////////////////////////// */}
        </Container>
      </>
    );
  }
}
export default aboutUs;
