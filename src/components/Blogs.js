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
      imageUrl: "",
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
    const image = this.state.imageUrl;
    const blogData = {
      title: title,
      headline: headline,
      article: article,
      img: image,
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

  render() {
    return (
      <Container className="border">
        <Row className="text-center py-5">
          <h1>The Blog</h1>
        </Row>

        <Row className="mb-5 justify-content-center">
          <Col md={10}>
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
          </Col>
        </Row>

        <Row className="bg-light py-5">
          <Form onSubmit={(event) => this.addBlog(event)}>
            <Form.Group className="mb-5" id="formMaybe">
              <h2 className="text-center">
                Want to contribute ? , Write your article here and leave the
                rest to us
              </h2>
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
            <Form.Group controlId="formFile" className="mb-2">
              <Form.Label>Upload a picture here :</Form.Label>
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
