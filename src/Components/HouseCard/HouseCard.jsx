import './HouseCard.css';
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import guestIcon from "../../assets/image/guest_icon.svg";

export const HouseCart = (data) => {
    const linkServer = "http://ec2-3-127-145-151.eu-central-1.compute.amazonaws.com:8000/";
    return (
        <Link to={`/product/${data.data.id}`} className="link">
            <Container>
                <Row>
                    <Col>
                        <Card className="card-apart">
                            <Card.Img
                                variant="top"
                                src={linkServer + data.data.image.path}
                                className="card-img-listing"
                            />
                            <Card.Body>
                                <span className="price">${data.data.price}<span className="day-price">/day</span></span>
                                <br />
                                <strong class="card-title-listing">
                                    {data.data.title}
                                </strong>
                                <p className="card-header-adress">{data.data.address}</p>
                                <Card.Footer className="card-footer">
                                    <img
                                        className="guest_icon"
                                        src={guestIcon}
                                        alt="guest_icon"
                                    />
                                    {data.data.numOfGuests} guests
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Link>
    );
};