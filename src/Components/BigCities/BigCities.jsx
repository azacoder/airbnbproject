
import React from 'react';
import './BigCities.css';
import { Card, Col, Container, Row, Form, FormControl, Button, Image } from 'react-bootstrap';
import T from '../../assets/image/toronto.jpg';
import D from '../../assets/image/dubai.jpg';
import LA from '../../assets/image/los-angeles.jpg';
import L from '../../assets/image/london.jpg';
import search1 from '../../assets/image/search1.svg';

const BigCities = () => {
    return (
        <div className='div1'>
            <h1>Find a place you'll love to stay at</h1>
            <Form style={{ width: '660px', height: '40px', marginBottom: '30px', marginLeft: '13px' }} className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search 'San Fransisco'"
                    className="mr-2"
                    aria-label="Search"
                />
                <Button >
                    <Image style={{ 'width': '50px', 'height': '25px', 'margin-bottom': '10px' }} src={search1} />
                </Button>


            </Form>



            <Container style={{ paddingTop: "2.8rem", paddingBottom: "2rem", width: '72rem' }}>
                <Row>
                    <Col>
                        <Card style={{ width: "15.3rem" }}>
                            <Card.Img variant="top" src={T} />
                            <Card.Title className='T'>Toronto</Card.Title>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: "15.3rem" }}>
                            <Card.Img variant="top" src={D} />
                            <Card.Title className='D'>Dubai</Card.Title>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: "15.3rem" }}>
                            <Card.Img variant="top" src={LA} />
                            <Card.Title className='LA'>Los Angeles</Card.Title>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: "15.3rem" }}>
                            <Card.Img variant="top" src={L} >
                            </Card.Img>
                            <Card.Title className='L'>London</Card.Title>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BigCities;

