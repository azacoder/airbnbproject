import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';

const CompTwoCities = () => {
    return (
        <div>
            <Container style={{ paddingTop: "2.8rem", paddingBottom: "2rem", width: '72rem' }}>
                <Row>
                <Card.Text style={{fontSize: '20px', color: 'rgb(44, 23, 138)'}}> <b> Listings of any kind </b></Card.Text>
                    <Col>
                        <Card style={{ width: "34.1rem" }}>
                            <Card.Img variant="top" src='https://tinyhouse-blacksonic.herokuapp.com/static/media/san-fransisco.bc8599ab.jpg' />
                            {/* <Card.Title className='T'>Toronto</Card.Title> */}
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: "34.1rem" }}>
                            <Card.Img variant="top" src='https://tinyhouse-blacksonic.herokuapp.com/static/media/cancun.7009e472.jpg' />
                            {/* <Card.Title className='D'>Dubai</Card.Title> */}
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CompTwoCities;
