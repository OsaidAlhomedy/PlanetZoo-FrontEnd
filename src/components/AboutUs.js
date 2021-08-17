import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card , Row, Container, Col ,Image} from 'react-bootstrap'
import Alaa from './assets/Alaa.png'
import Khaled from './assets/khaled.png'
import Osaid from './assets/Osaid.png'
import Naim from './assets/Naim.png'


class aboutUs extends React.Component {

    render() {
        return (
          <>
          <Container  className="p-4">
            <Row className = "text-center">
            <h1> Meet out Team </h1>
            </Row>
  <Row className = "text-center">
  <Row xs={1} md={2} className="g-4">
{/* Osaid's Card */}
    <Col >
      <Card  style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Osaid} />
        <Card.Body>
          <Card.Title>Osaid Alhomedy</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
{/* Naim's Card  */}
    <Col>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Naim} />
        <Card.Body>
          <Card.Title>Naim AlOmari</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
{/* Alaa's Card */}
    <Col>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Alaa} />
        <Card.Body>
          <Card.Title>Alaa Baroud</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
{/* Khaled's Card */}
    <Col>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Khaled} />
        <Card.Body>
          <Card.Title>Khaled Alqrainy</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  
</Row>
  </Row>

  </Container>
          </>
        )
    }
  }
  export default aboutUs;