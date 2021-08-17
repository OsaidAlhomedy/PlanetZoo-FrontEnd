import React, { Component } from "react";
// import "./Login.css";
import "./Login.scss";
import {
  Form,
  Button,
  FloatingLabel,
  Row,
  Col,
  Image,
  Container,
} from "react-bootstrap";
import axios from "axios";
import LoginButton from "./Authenticate";
import LogoutButton from "./Logout";
import Logo from "../assets/logoBottomText-01.png";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorModal: false,
      userAuthentication: false,
      userName: "",
    };
  }

  userValidation = (event) => {
    event.preventDefault();
    const body = {
      email: event.target.email.value,
      pass: event.target.pass.value,
    };
    axios
      .post(`${process.env.REACT_APP_URL}/user`, body)
      .then((result) => {
        this.setState({
          userName: result.data.name,
          userAuthentication: true,
        });
      })
      .catch((err) => {
        this.setState({
          errorModal: true,
        });
      });
  };

  passValidate = (e) => {
    console.log(e.target.value);
  };

  render() {
    return (
      <Container className="vh-auto d-flex flex-column" fluid>
        <Row>
          <Col sm={3} className="pattern vh-100"></Col>
          <Col sm={6} className="vh-auto border border-success pt-5">
            <Row className="d-flex justify-content-center">
              <Col className="d-flex justify-content-center" xs={3}>
                <Image
                  src={Logo}
                  alt="Logo"
                  rounded
                  style={{ width: "25rem" }}
                />
              </Col>
            </Row>
            <Row className="d-flex justify-content-center">
              <h2 className="text-center text-dark mt-3">
                Please Sign in to continue
              </h2>
            </Row>
            <Row className="d-flex justify-content-center">
              <Col xs={6}>
                <Form className="mt-4" onSubmit={this.userValidation}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Email address"
                      className="mb-3"
                    >
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                      />
                    </FloatingLabel>
                  </Form.Group>

                  <Form.Group className="mb-5" controlId="formBasicPassword">
                    <FloatingLabel
                      controlId="floatingPassInput"
                      label="Password"
                      className="mb-3"
                    >
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        onChange={this.passValidate}
                        name="pass"
                      />
                    </FloatingLabel>
                  </Form.Group>
                  <Form.Group
                    className="mb-5 text-center d-grid gap-2"
                    controlId="formBasicCheckbox"
                  >
                    <Button variant="primary" type="submit">
                      Log In
                    </Button>
                  </Form.Group>
                  <Form.Group
                    className="mb-3 text-center "
                    controlId="formBasicCheckbox"
                  >
                    <h4 className="text-dark">Don't have an account ?</h4>
                    <LoginButton />
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Col>

          <Col sm={3} className="pattern vh-100"></Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
