import React from "react";
import YssykKol from '../../assets/image/ozero.jpg';
import SaryChelek from '../../assets/image/sary-chelek.jpg'
import { Card, Col, Container, Row } from "react-bootstrap";
import "./TwoCities.css";

const TwoCities = () => {
  return (
    <div className="img-two-cityes">
      <Container>
        <Row>
          <Card.Text className="text-theme">
            <b> Listings of any kind </b>
          </Card.Text>
          <Col>
            <Card className="two-img">
              <Card.Img
                variant="top"
                src={SaryChelek}
              />
              <Card.Title className='two-cities'>A weekend getaway to the <br /> Sary-Chelek Lake?</Card.Title>
            </Card>
          </Col>
          <Col>
            <Card className="two-img">
              <Card.Img
                variant="top"
                src={YssykKol}
              />
              <Card.Title className='two-cities'>Or a two-week trip to visit  Yssyk-Kul,<br /> Kyrgyzstan?</Card.Title>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TwoCities;
