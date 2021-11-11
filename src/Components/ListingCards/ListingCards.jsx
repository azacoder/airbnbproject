import "./ListingCard.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import guestIcon from "../../assets/image/guest_icon.svg";

export const ListingCards = () => {
  const [homeListings, setHomeListings] = useState([]);
  const linkServer = "http://ec2-3-127-145-151.eu-central-1.compute.amazonaws.com:8000/"; 
  useEffect(() => {
    fetch(
      "http://ec2-3-127-145-151.eu-central-1.compute.amazonaws.com:8000/api/listing/all",
      {
        method: "GET",
      }
    )
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then(({data}) => {
        console.log(data);
        setHomeListings(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="myCards">
      {homeListings.map((el) => {
        return <HouseCart data={el} key={el.id}  linkServer={linkServer}/>;
      })}
    </div>
  );
};

const HouseCart = ({ data , linkServer}) => {
  return (
    
    <Link to={`/product/${data.id}`} className="link">
      <Container>
        <Row>
          <Col>
            <Card className="card-apart">
              <Card.Img
                variant="top"
                src={linkServer + data.image.path}
                
                className="card-img-listing"
              />
              <Card.Body>
                <span className="price">${data.price}/day</span>
                <b>
                  <Card.Title class="card-title-listing">
                    {data.title}
                  </Card.Title>
                </b>
                <p className="card-header-adress">{data.address}</p>
                <Card.Footer className="card-footer">
                  <img
                    className="guest_icon"
                    src={guestIcon}
                    alt="guest_icon"
                  />
                  for {data.numOfGuests} guests
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Link>
  );
};
