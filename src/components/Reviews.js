import React, { Component } from "react";
import { Form, Button, Row, Image } from "react-bootstrap";
import "./reviews.css";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";

export class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      review: "",
    };
  }

   addReview = async (event) => {
    event.preventDefault();
    const review1 = event.target.review.value;
    console.log(review1);
    await axios
      .post("http://localhost:3010/reviews", {reviewData:review1})
      .then((result) => {
          console.log(result);
        this.setState({

          review: result.data,
        });
        console.log(this.state.review);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getReview = () => {
    axios
      .get("http://localhost:3010/reviews")
      .then((result) => {
        this.setState({
          review: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount() {
      this.getReview();
  }

  render() {
    return (
      <>
     
          <Form className="mb-5" onSubmit={(event) => this.addReview(event)}>
          <Form.Group  controlId="exampleForm.ControlTextarea1 ">
            <Form.Label className="h2 text-center"> Please Add Your Anonymous Feedback </Form.Label>
            <Form.Control as="textarea" name="review" />
          </Form.Group>
          <Button  className="my-3"  variant="primary" type="submit" style={{width:"200px"}}>
            Submit
          </Button>
        </Form>
        {this.state.review &&
          this.state.review.map((i) => {
              return (
            <div class="container bootstrap snippets bootdeys">
              <div class="row" className="pl-2 pr-2">
                <div>
                  <div  class="card-big-shadow">
                    <div
                      class="card card-just-text"
                      data-background="color"
                      data-color="green"
                      data-radius="none"
                    >
                      <div  class="content">
                        <h3 className="text-dark mb-3">Feedback</h3>
                        <h4 class="title">
                          {/* <a href="#">Blue Card</a> */}
                        </h4>
                        <p class="description">{i.reviewData}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>)
          })}
    
      </>
    );
  }
}

export default withAuth0(Reviews);
