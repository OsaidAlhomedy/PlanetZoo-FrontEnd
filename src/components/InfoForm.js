import axios from 'axios';
import React from 'react';
import {Form, Button,Container,Row } from 'react-bootstrap'



class InfoForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            facts: [],
            title:"",
            extract:"",
        }
    }

    // getFact = async ()=>{
    //     const url = `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${title}`
    //     axios.get(url).then((result)=> {
    //         this.setState({
    //             facts: result.data.query.data.title
    //         });

    //     });
    
    // }

    // componentDidMount() {
    //     this.getFact();
    // }
    addFact = async (event) => {
        event.preventDefault();

        const name = event.target.title.value;

    console.log(name);
        await axios
        .get(`${process.env.REACT_APP_SERVER}/fact?name=${name}`)
        .then((results) => {
            const factArr = Object.keys(results.data)
            const id = factArr[0];
            console.log(factArr);
          this.setState({
            factData: results.data[id].extract
          });
        })
        .catch((err) => {
          console.log(err);
        });
        console.log(this.state.factData);
        
    };

     collect=()=> {
    if(this.state.factData== undefined ){
        return 'Name Of An Animal Please ';
    }else{
        return this.state.factData
    }
}
  render() {
   
        return (
            <>
            
            <Container> 
                <Row> 
                <Form onSubmit={(event) => this.addFact(event)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Search for an Animal</Form.Label>
                        <Form.Control name="title" type="text" placeholder="Enter an Animal" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Search</Button>
                    
                </Form>
                {this.collect() &&
                <div>{this.state.factData}</div>
  }
                
                </Row>
                </Container>
            </>
        )
    }
}

export default InfoForm