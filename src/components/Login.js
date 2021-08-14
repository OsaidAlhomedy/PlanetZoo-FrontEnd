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
                  src="https://lh3.googleusercontent.com/njfskYp-s63_h4i1zfsKiRW0HPUxYDOzHBFTeV6oGxBtA0EjL2aJfi29LUw8BNyyv16ZqaYU4vdJ5g-sZXHwJUtyi69bine4DcWpZMA9lu8_FYcVhHc9D-R1Lb0o0z-a_-LIp5qiHGcbzpBaRQjHpjUpolWcaMINHMbosvFjUNIjQUBO0DeDW0VBQzqnh1vPZ8w6wrqxNvSKW8KVtgbZsq6_uSpFzreh9c6f0gWPYiYrgjYb7g9IZ-1dTsIyh_33aAdzN5BBJ8omStpzYjQ3x8G6uAKVpKL2TVgZRGLG5GfXdIdvwbf-RRRf-oiXpRG3VTD4NOx849Pzows_GCk05gVyzJw4YAtEWXgN1RAhAp33ZqWu4KNoI61ZswciRdIYC5NGeUDDLmigGL_26HBNpf8GZ49DoQUGx_cK_l_cSaDa0Kywd4AHYq6TFzWjBPk-z55Oq_sS6a4RAzmcz6hp2QKmSre8zZbfZTbWyOGqppowL_0S1sSBNT_5ZLkUCxqtp606e68ueDjLV0RDhtmcLnZgaYivncXCDk-0eIlRS3gz0jZm6iEk0U5nV5471T3knKWXnMKNpH_D5LLYHWyf4_Un3nxa4HA44dWNxoQibzDJwWdDKxFUJWqdDROzc4b9u1QoXv3oZk_KYX9cIG1flG8sDZZ-SL3YbFCz1MAkooN5hygfO6_eBXu_MXVfFIMXOWmgCOeL8agedpUX-t51_TqLVw=s631-no?authuser=1"
                  alt="Logo"
                  rounded
                  style={{ width: "15rem" }}
                />
              </Col>
            </Row>
            <Row className="d-flex justify-content-center">
              <h2 className="text-center mt-3">Please Sign in to continue</h2>
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

                  <Form.Group className="mb-3" controlId="formBasicPassword">
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
                    <Form.Text className="text-muted text-center">
                      Your password must be above 8 characters
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
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
                    <h4>Don't have an account ?</h4>
                    <LoginButton />
                    <LogoutButton />
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
