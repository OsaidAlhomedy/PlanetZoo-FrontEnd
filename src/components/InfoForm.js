import axios from "axios";
import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

class InfoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      facts: [],
      title: "",
      extract: "",
    };
  }

  addFact = async (event) => {
    event.preventDefault();

    const name = event.target.title.value;

    console.log(name);
    await axios
      .get(`${process.env.REACT_APP_SERVER}/fact?name=${name}`)
      .then((results) => {
        const factArr = Object.keys(results.data);
        const id = factArr[0];
        console.log(factArr);
        this.setState({
          factData: results.data[id].extract,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(this.state.factData);
  };

  collect = () => {
    if (this.state.factData == undefined) {
      return "Name Of An Animal Please ";
    } else {
      return this.state.factData;
    }
  };

  render() {
    return (
      <Col>
        <Row>
          <Form onSubmit={(event) => this.addFact(event)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                name="title"
                type="text"
                placeholder="Enter an Animal"
                size="lg"
              />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button
                className="mb-3"
                variant="outline-success "
                size="lg"
                type="submit"
              >
                Search
              </Button>
            </div>
          </Form>
        </Row>
        {this.collect() && (
          <Row>
            <Col>{this.state.factData}</Col>
          </Row>
        )}
      </Col>
    );
  }
}

export default InfoForm;
