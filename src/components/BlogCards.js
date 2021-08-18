import React from 'react';
import axios from 'axios';
import { Card, Container, Row, Col, Button } from 'react-bootstrap'





class BlogCards extends React.Component {
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
        blogs: result.data,
      });
    });
    console.log(this.state.blogs)
  };
  componentDidMount() {
    this.getArticles();
  }
  render() {
    return (
      <>
        <Container fluid >
          <Row>
            {this.state.blogs ? this.state.blogs.map((n, i) => {
              console.log(this.state.blogs);
              if (i < 3) {
                return (
                  
                  <Col >
              
                    <Card bg="secondary" text="white"  style={{ width: '15rem' }}>
                      <Card.Img variant="top" src={n.img} />
                      <Card.Body>
                        <Card.Title color="white">{n.title}</Card.Title>
                        <Card.Text >
                          {n.article.slice(0,165 ) + "......"}
                          <br/><br/>
                          <Button href="/blog"> Read More! </Button>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                )
              }
            }) : null}
          </Row>
        </Container>
      </>
    )
  }
}

export default BlogCards;