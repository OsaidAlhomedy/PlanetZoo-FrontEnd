import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'



class Blog extends React.Component {
    render () {
        return (
            <>
            

<Card className="bg-dark text-white">
  <Card.Img src="https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Blog 1</Card.Title>
    <Card.Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

    </Card.Text>
    <Card.Text>Reading time : 10 min</Card.Text>
    <Button variant="primary">Read More!</Button>

  </Card.ImgOverlay>
</Card>

<br>
</br> 
<>
<Form.Control size="sm" type="text" placeholder="Title" />
  <br />
  <Form.Control type="text" placeholder="Headline" />
  <br />
  <Form.Control size="lg" type="text" placeholder="Write Here your Blog" />
  <br />
  
  
</>
            </>
            
        )

    }
}
export default Blog;