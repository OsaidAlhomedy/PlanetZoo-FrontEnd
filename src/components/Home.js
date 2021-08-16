import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import { Card, CardGroup, Button, Container ,Row} from 'react-bootstrap'
import '../Test.css'
import { Route } from 'react-router-dom'


import huski from '../assets/jamie-street-0nk6XZp7_1E-unsplash.jpg'
import snjab from '../assets/jennifer-chen-h0GbJwpMNiM-unsplash.jpg'
import abusha3ar from '../assets/john-tecuceanu-v1aexnCrC00-unsplash.jpg'
import Bird from '../assets/ahmed-zayan-iANR5BfavC8-unsplash.jpg'
import hair from '../assets/joe-caione-qO-PIF84Vxg-unsplash.jpg'

class Home extends React.Component {
  render() {
    return (
      <>
       <Container>
         <Row> 
        <Carousel bg="dark" variant="" className="d-block,w-100,h-20">
            <Carousel.Item>
              <img
                className="d-block w-100 h-20"
                src={huski}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 h-20"
                src={snjab}
                alt="First slide"
                
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 h-20"
                src={abusha3ar}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 h-20"
                src={Bird}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
             <Carousel.Item>
              <img
                className="d-block w-100 h-20"
                src={hair}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </Row>
         </Container>





        {/* ///////////////////////////////////////////////CARDS//////////////////////////////////////////////////////// */}
{/* <Container>
  <Row> 
        <CardGroup bg="dark" variant="dark" >
          <Card>
            <Card.Img variant="top" src={Doncky} />
            <Card.Body>
              <Card.Title>حمار بلدي أصيل</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>


              <Route render={({ history }) => (
                <Button class='buttons'
                  type='button'
                  onClick={() => { history.push('/blog') }}
                >
                  Read more!
                </Button>
              )} />

            </Card.Body>
            <Card.Footer>

            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={Rooster} />
            <Card.Body>
              <Card.Title>ديك غزاوي أصيل</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to additional
                content.{' '}
              </Card.Text>
              <Route render={({ history }) => (
                <Button class='buttons'
                  type='button'
                  onClick={() => { history.push('/blog') }}
                >
                  Read more!
                </Button>
              )} />
            </Card.Body>
            <Card.Footer>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={chrochodile} />
            <Card.Body>
              <Card.Title>تمساح أفريقي وهر اصيل</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
              </Card.Text>
              <Route render={({ history }) => (
                <Button class='buttons'
                  type='button'
                  onClick={() => { history.push('/blog') }}
                >
                  Read more!
                </Button>
              )} />
            </Card.Body>
            <Card.Footer>
            </Card.Footer>
          </Card>
        </CardGroup>
        </Row> 
        </Container>  */}
      </>
    );
  }
}
export default Home;
