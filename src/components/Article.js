import React, { Component } from "react";
import {
  Form,
  Button,
  Card,
  Container,
  Row,
  Col,
  Image,
} from "react-bootstrap";

class Article extends Component {
  render() {
    return (
      <Row>
        <Container className="mb-5 border p-5">
          <Row className="mb-1">
            <h2>{this.props.title}</h2>
          </Row>
          <Row className="mb-4">
            <h4>{this.props.headline}</h4>
          </Row>
          <Row className="mb-4">
            <Image src={this.props.img} alt="article image" />
          </Row>
          <Row>
            <article className="text-justify">{this.props.article}</article>
          </Row>
        </Container>
      </Row>
    );
  }
}

export default Article;
