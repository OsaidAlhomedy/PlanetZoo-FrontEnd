import axios from 'axios';
import React from 'react';
import { Form, Button, Container, Row } from 'react-bootstrap'



class InfoForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            facts: [],
            title: "",
            extract: "",
        }
    }


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

    collect = () => {
        if (this.state.factData == undefined) {
            return 'Name Of An Animal Please ';
        } else {
            return this.state.factData
        }
    };


    render() {

        return (
            <>

                <Container>
                    <Row>
                        <Form onSubmit={(event) => this.addFact(event)}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label >Search for an Animal</Form.Label>
                                <Form.Control name="title" type="text" placeholder="Enter an Animal" size="lg" />
                            </Form.Group>
                            <div className="d-grid gap-2">

                                <Button variant="outline-success " size="lg" type="submit">Search</Button>
                            </div>
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