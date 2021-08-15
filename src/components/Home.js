import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import {Card, CardGroup, } from 'react-bootstrap'
import '../Test.css'
import ghazal from '../assets/7b8d864e41342a71212d90f4294ea069.jpg'
import banda from '../assets/banda.jpg'
import tigers from '../assets/tigers.jpg'
import bird from '../assets/bird.jpg'
import horseimg from '../assets/depositphotos_21193779-stock-photo-gray-arabian-horse-gallops-on.jpg'
import { Button } from "bootstrap";
import Doncky from '../assets/7mar.jpg'
import { Route } from 'react-router-dom'
import Rooster from '../assets/rooster.jpg'
import chrochodile from '../assets/chrochodile.jpg'



class Home extends React.Component {
  render() {
    return (
      <>
        <Carousel>
        <Carousel.Item>
    <img
      className="d-block w-100"
      src={tigers}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ghazal}
      alt="First slide"
      width='50'
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bird}
      alt="First slide"
      width='50'
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={horseimg}
      alt="First slide"
      width='50'
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banda}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

<CardGroup>


  <Card>
    <Card.Img variant="top" src={Doncky}/>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
      
     
  <Route render={({ history}) => (
    <button class='buttons'
      type='button'
      onClick={() => { history.push('/blog') }}
    >
      Read more!
    </button>
  )} />

    </Card.Body>
    <Card.Footer>
      
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={Rooster} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
      <Route render={({ history}) => (
    <button class='buttons'
      type='button'
      onClick={() => { history.push('/blog') }}
    >
      Read more!
    </button>
  )} />
    </Card.Body>
    <Card.Footer>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={chrochodile} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
      <Route render={({ history}) => (
    <button class='buttons'
      type='button'
      onClick={() => { history.push('/blog') }}
    >
      Read more!
    </button>
  )} />
    </Card.Body>
    <Card.Footer>
    </Card.Footer>
  </Card>
</CardGroup>
      </>
    );
  }
}
export default Home;
