import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Form,
  Button,
  Card,
  Container,
  Row,
  Col,
  FloatingLabel,
} from "react-bootstrap";
import Article from "./Article";
import axios from "axios";

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
    };
  }

  getArticles = async () => {
    const url = `${process.env.REACT_APP_SERVER}/blog`;
    axios.get(url).then((result) => {
      this.setState({
        blogsData: result.data,
      });
    });
  };

  componentDidMount() {
    this.getArticles();
  }

  addBlog = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const headline = event.target.headline.value;
    const article = event.target.article.value;
    const blogData = {
      title: title,
      headline: headline,
      article: article,
    };

    axios
      .post(`${process.env.REACT_APP_SERVER}/blog`, blogData)
      .then((result) => {
        this.setState({
          blogsData: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidUpdate(prevState) {
    if (this.state.blogsData !== prevState.blogData) {
      this.getArticles();
    }
  }

  render() {
    return (
      <Container>
        <Row className="text-center my-5">
          <h1>The Blog</h1>
        </Row>

        <Row className="mb-5">
          <>
            {this.state.blogsData
              ? this.state.blogsData.map((blog) => (
                  <Article
                    title={blog.title}
                    headline={blog.headline}
                    img={blog.img}
                    article={blog.article}
                  />
                ))
              : ""}
          </>
        </Row>

        <Row>
          <Form onSubmit={(event) => this.addBlog(event)}>
            <Form.Group className="mb-3">
              <h2 className="text-center mb-4">Write your Blog here</h2>
            </Form.Group>

            <Form.Group className="mb-3">
              <FloatingLabel label="Title">
                <Form.Control type="text" name="title" />
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3">
              <FloatingLabel label="Headline">
                <Form.Control size="sm" type="text" name="headline" />
              </FloatingLabel>
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Default file input example</Form.Label>
              <Form.Control type="file" name="img" />
            </Form.Group>

            <Form.Group className="mb-3">
              <FloatingLabel label="Article">
                <Form.Control
                  as="textarea"
                  name="article"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
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
        </Row>
      </Container>
    );
  }
}
export default Blog;
