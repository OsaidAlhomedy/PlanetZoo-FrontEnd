import React, { Component } from "react";
import {  Container, Row, Col } from "react-bootstrap";
export class Donate extends Component {
  render() {
    return (

      <Container className='border'>
        <Row className = "text-center mt-5">

          <h1 > Donation page </h1>
<p> A donor service representative with the American Society for the Prevention of Cruelty to Animals, or ASPCA, said 80 percent of donations goes directly to help animals. Help us to stop Animal's Suffering and Donate Here</p>


        </Row>
      <Row className = "mt-5 mr-4">
<Col>
      
<iframe title = 'donation' src="https://donorbox.org/embed/planetzoo?designation=General%20Care&default_interval=o&hide_donation_meter=true" name="donorbox" allowpaymentrequest="" seamless="seamless" frameBorder="0" scrolling="no" height="900px" width="100%" style={{'max-width': '500px', 'min-width': '250p', 'max-height':'none!important'}}></iframe>
</Col>
<Col>
<h3> Why People Donate:</h3>
<p>Donating to the causes you care about not only benefits the charities themselves, it can be deeply rewarding for you too. Millions of people give to charity on a regular basis to support causes they believe in, as well as for the positive effect it has on their own lives.
</p>
<p> Many people are concerned that their donations to charity may be reduced by tax or administrative costs, preventing the full amount from reaching the people or causes they really want to help. Thankfully because of the low fees, you can make sure that you gave the most of every donation to charity.</p>
<p>
  Also, Your own charitable donations can inspire your nearest and dearest to give to causes important to them, and could even bring about a family-wide effort to back a charity or charities that have special significance to you as a group.
</p>
</Col>
</Row>
      </ Container>

      // <div>
      //   <Card style={{ width: "20rem", textAlign: "center" }}>
      //     <Card.Body>
      //       <Tabs
      //         defaultActiveKey="profile"
      //         id="uncontrolled-tab-example"
      //         className="mb-3"
      //       >
      //         <Tab eventKey="onTime" title="One Time">
      //           <ButtonGroup aria-label="Basic example">
      //             <Button variant="secondary">10$</Button>
      //             <Button variant="secondary">20$</Button>
      //             <Button variant="secondary">50$</Button>
      //           </ButtonGroup>
      //           <Form>
      //             <Form.Group className="mb-3" controlId="formBasicEmail">
      //               <Form.Label>Email address</Form.Label>
      //               <Form.Control type="email" placeholder="Enter email" />
      //               <Form.Text className="text-muted">
      //                 Add your Email here!
      //               </Form.Text>
      //             </Form.Group>

      //             <Form.Group className="mb-3" controlId="formBasicPassword">
      //               <Form.Label>Password</Form.Label>
      //               <Form.Control type="password" placeholder="Password" />
      //             </Form.Group>
      //             <Form.Group className="mb-3" controlId="formBasicCheckbox">
      //               <Form.Check type="checkbox" label="Check me out" />
      //             </Form.Group>
      //             <Button variant="primary" type="submit">
      //             Via PayPal
      //             </Button>
      //           </Form>
      //         </Tab>
      //         <Tab eventKey="Monthly" title="Monthly">
      //         <ButtonGroup aria-label="Basic example">
      //             <Button variant="secondary">10$</Button>
      //             <Button variant="secondary">20$</Button>
      //             <Button variant="secondary">50$</Button>
      //           </ButtonGroup>
      //           <Form>
      //             <Form.Group className="mb-3" controlId="formBasicEmail">
      //               <Form.Label>Email address</Form.Label>
      //               <Form.Control type="email" placeholder="Enter email" />
      //               <Form.Text className="text-muted">
      //                 We'll never share your email with anyone else.
      //               </Form.Text>
      //             </Form.Group>

      //             <Form.Group className="mb-3" controlId="formBasicPassword">
      //               <Form.Label>Password</Form.Label>
      //               <Form.Control type="password" placeholder="Password" />
      //             </Form.Group>
      //             <Form.Group className="mb-3" controlId="formBasicCheckbox">
      //               <Form.Check type="checkbox" label="Check me out" />
      //             </Form.Group>
      //             <Button variant="primary" type="submit">
      //                Via PayPal
      //             </Button>
      //           </Form>
      //         </Tab>
      //       </Tabs>
      //       {/* <Button variant="primary">Go somewhere</Button> */}
      //     </Card.Body>
      //   </Card>
      // </div>
    );
  }
}

export default Donate;
