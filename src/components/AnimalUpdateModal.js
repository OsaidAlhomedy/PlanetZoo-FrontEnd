import React, { Component } from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Form,
  Modal,
  FloatingLabel,
} from "react-bootstrap";

export class AnimalUpdateModal extends Component {
  render() {
    return (
      <Modal
        show={this.props.updateModalShow}
        onHide={() => this.props.updateAnimalFormHide()}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Pet Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(event) => this.props.updateAnimal(event)}>
            <Form.Group className="mb-3">
              <FloatingLabel label="Pet Name">
                <Form.Control
                  type="text"
                  name="petName"
                  defaultValue={this.props.previousData.name}
                />
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3">
              <FloatingLabel label="Type">
                <Form.Control
                  size="sm"
                  type="text"
                  name="petType"
                  defaultValue={this.props.previousData.type}
                />
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3">
              <FloatingLabel label="Breed">
                <Form.Control
                  size="sm"
                  type="text"
                  name="petBreed"
                  defaultValue={this.props.previousData.breed}
                />
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3">
              <FloatingLabel controlId="floatingSelect" label="Age">
                <Form.Select
                  name="petAge"
                  defaultValue={this.props.previousData.age}
                >
                  <option value="Younger than 1 year">
                    Younger than 1 year
                  </option>
                  <option value="Between 1 and 5 years">
                    Between 1 and 5 years
                  </option>
                  <option value="Older than 5 years">Older than 5 years</option>
                </Form.Select>
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Pet description</Form.Label>
              <Form.Control
                as="textarea"
                defaultValue={this.props.previousData.description}
                name="petDesc"
                placeholder="Blacky doesn't like new faces, he is angry most of the time and always sleeping"
                style={{ height: "100px" }}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => this.props.updateAnimalFormHide()}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default AnimalUpdateModal;
