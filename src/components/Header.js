import React from 'react';
import {Navbar,Container,Nav,NavDropdown,Col,Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


class Header extends React.Component {
    render(){
        return (
<>
  <Navbar bg="dark" variant="dark" className='py-4'>
    <Container>
    <Container>
      <Navbar.Brand href="app.js">
        <img
          alt=""
          src="https://trello.com/1/cards/6117ccdbc5aaea8ec9c03df9/attachments/6117cd9494bdc903adbbf27b/download/planetPets-01.png"
          width="100"
          height="100"
          className="d-inline-block "
        />
      ZOO PLANET 
      </Navbar.Brand>
    </Container>
    <Nav 
      className="mr-auto my-2 my-lg-0">
      <Nav.Link href="home" > Home </Nav.Link>
      <Nav.Link href="blog">Blog</Nav.Link>
      <NavDropdown title="Adopt/Donate" id="basic-nav-dropdown">
          <NavDropdown.Item href="Adopt an Animal">AdoptAnAnimal</NavDropdown.Item>
          <NavDropdown.Item href="Contribute">Contribute</NavDropdown.Item>
          <NavDropdown.Item href="Give Up Your Animal">GiveUpYourAnimal</NavDropdown.Item>
        </NavDropdown>
      <Nav.Link href="aboutus">AboutUs</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
        )
    }
}

export default Header;