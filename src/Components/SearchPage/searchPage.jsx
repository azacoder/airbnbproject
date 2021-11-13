import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import guestIcon from "../../assets/image/guest_icon.svg";
import { useSelector } from "react-redux";


export const Search = () => {
  const linkServer =
    "http://ec2-3-127-145-151.eu-central-1.compute.amazonaws.com:8000/";
  const stateCard = useSelector((state) => state.userHouse);
  return (
    <div className="myCards">
      {stateCard.map((el) => {
        return (
          <Link to={`/product/${el.id}`} className="link">
            <Container>
              <Row>
                <Col>
                  <Card className="card-apart">
                    <Card.Img
                      variant="top"
                      src={linkServer + el.image.path}
                      className="card-img-listing"
                    />
                    <Card.Body>
                      <span className="price">${el.price}/day</span>
                      <b>
                        <Card.Title class="card-title-listing">
                          {el.title}
                        </Card.Title>
                      </b>
                      <p className="card-header-adress">{el.address}</p>
                      <Card.Footer className="card-footer">
                        <img
                          className="guest_icon"
                          src={guestIcon}
                          alt="guest_icon"
                        />
                        for {el.numOfGuests} guests
                      </Card.Footer>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Link>
        );
      })}
    </div>
  );
};
