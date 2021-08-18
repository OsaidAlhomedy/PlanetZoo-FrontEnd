import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import { Card, CardGroup, Button, Container, Row, Col, Form } from 'react-bootstrap'
import '../Test.css'
import { Route } from 'react-router-dom'
import axios from 'axios';
import huski from '../assets/jesse-schoff-i2DefZ6PCN0-unsplash.jpg'
import snjab from '../assets/david-solce-PhOAIvz3fBA-unsplash.jpg'
import abusha3ar from '../assets/don-hassan-HZjI3mXpFXA-unsplash.jpg'
import Bird from '../assets/طائر-الكوكتيل-825x510.jpg'
import hair from '../assets/mahdi-bafande-59zCZ2pVC9Y-unsplash.jpg'
import jajeh from '../assets/jesse-schoff-qVneOrTN06c-unsplash.jpg'
import kitten from '../assets/dog2.jpg'

import Blogs from './Blogs';
import BlogCards from "./BlogCards";
import InfoForm from "./InfoForm";
import Autofill from "./Autofill";


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: [],
    }
  }



  render() {
    return (
      <>
        <Row>
          <Carousel bg="dark" variant="" className="d-block,w-100,h-20">
            <Carousel.Item>
              <img
                className="d-block w-100 h-20"
                src={huski}
                alt="Third slide"
              />
              <Carousel.Caption className='mb-5'>
                <h3> “Dogs are our link to paradise. They don’t know jealousy or discontent.” </h3>
                <p> Milan Kundera </p>
                <Route render={({ history }) => (
                  <Button className='buttons'
                    type='button'
                    onClick={() => { history.push('/Adoption') }}
                  >
                    Adopt an Animal 😸
                  </Button>
                )} />
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 h-20"
                src={snjab}
                alt="First slide"

              />
              <Carousel.Caption className='mb-5'>
                <h3>“Animals are such agreeable friends—they ask no questions; they pass no criticisms.” </h3>
                <p> George Eliot</p>
                <Route render={({ history }) => (
                  <Button className='buttons'
                    type='button'
                    onClick={() => { history.push('/Adoption') }}
                  >
                    Adopt an Animal 😸
                  </Button>
                )} />
              </Carousel.Caption >
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 h-20"
                src={abusha3ar}
                alt="First slide"
              />
              <Carousel.Caption className='mb-5'>
                <h3>“One small cat changes coming home to an empty house to coming home.” </h3>
                <p> Pam Brown </p>
                <Route render={({ history }) => (
                  <Button className='buttons'
                    type='button'
                    onClick={() => { history.push('/Adoption') }}
                  >
                    Adopt an Animal  😸
                  </Button>
                )} />
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
              <img
                className="d-block w-100 h-20 "
                src={Bird}
                alt="First slide"
              />
              <Carousel.Caption className='mb-5'>
                <h3>“It is not only fine feathers that make fine birds.” </h3>
                <p> Aesop </p>
                <Route render={({ history }) => (
                  <Button className='buttons'
                    type='button'
                    onClick={() => { history.push('/Adoption') }}
                  >
                    Adopt an Animal  😸
                  </Button>
                )} />
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 h-20"
                src={hair}
                alt="Second slide"
              />
              <Carousel.Caption className='mb-5'>
                <h3>“A dog is the only thing on earth that loves you more than you love yourself.” </h3>
                <p>Josh Billings</p>

                <Route render={({ history }) => (
                  <Button className='buttons'
                    type='button'
                    onClick={() => { history.push('/Adoption') }}
                  >
                    Adopt an Animal  😸
                  </Button>
                )} />
              </Carousel.Caption>


            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100 h-20"
                src={jajeh}
                alt="Second slide"
              />
              <Carousel.Caption className="mb-5">
                <h3>“Animals are my friends, and I don’t eat my friends.”</h3>
                <p> George Bernard Shaw</p>
                <Route render={({ history }) => (
                  <Button className='buttons'
                    type='button'
                    onClick={() => { history.push('/blog') }}
                  >
                    Adopt an Animal  😸
                  </Button>
                )} />
              </Carousel.Caption>


            </Carousel.Item>


          </Carousel>
        </Row>
        <Row>
          <Col className="bg-secondary text-light text-center " md={4} >

            <pre className="h2">
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              
              <h1 class="blogcard">THE</h1>
              <h1>BLOG</h1>
            </pre>

          </Col>
          <Col>
          <BlogCards />
          </Col>
          
        </Row>
        <br></br>

        <Row>
        <div class = "container">
        
          <img src = {kitten} alt = "Freedom Blog" width="100%"  />
          <div class="center-left">Getting a Pet in Planet-Zoo</div>
          <div class="bottom-left">
          The Planet-Zoo are very pet-friendly and pet-connected.<br></br> 
          There are plenty of pets available for adoption from rescue centres. </div>
          
      </div>
        </Row>
        <br></br>








        <Row className="border mt-5 ">

          <Col md={8} >
            <Row className='border'>
              <InfoForm />
            </Row>
            <Row >
              <Col className='border'>
                <h3> Git Random Fact About Random Animal  </h3>
              </Col>

              <Col className='border'>
                <h3>Cruelty free checker  </h3>
              </Col>

            </Row>

          </Col>
          <Col className="bg-secondary text-light text-center " md={4} >

            <pre className="h2 ">
              <br></br>
              <br></br>

              KNOW  
              <br></br>
              MORE !
              
            </pre>

          </Col>
        </Row>

        <Row>
          <Autofill />
        </Row>
<br></br>
<br></br>








      </>
    );
  }
}
export default Home;
