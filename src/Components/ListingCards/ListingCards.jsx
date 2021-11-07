import "./ListingCard.css";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import guestIcon from "../../assets/image/guest_icon.svg";

// const addCard = (idToken) => {
//   let resp = fetch("http://ec2-3-127-145-151.eu-central-1.compute.amazonaws.com:8000/api/upload/image", {
//     method: "POST", 
//     body: FormData({
//       image:"https://images.unsplash.com/photo-1430285561322-7808604715df?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGhvdXNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
//     }),
//     headers: {
//     Authorization: `Bearer ${idToken}`,
//     }
//   })
// }


export const ListingCards = () => {
  const [homeListings, setHomeListings] = useState([]);

  const fetchData = () => {
    fetch("/fakeHost/data.json")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then(({ data }) => {
        console.log(data);
        setHomeListings(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="myCards">
      {homeListings.map((el) => {
        return <HouseCart data={el} key={el.id} />;
      })}
    </div>
  );
};

const HouseCart = ({ data }) => {
  return (
    <Link to={`/product/${data.id}`} className="link">
      <Container>
        <Row>
          <Col>
            <Card class="card-apart">
              <Card.Img
                variant="top"
                src={data.image}
                className="card-img-list"
              />
              <Card.Body>
                <span className="price">${data.price}/day</span>
                <b>
                  <Card.Title class="card-title-house">{data.title}</Card.Title>
                </b>
                <Card.Header class="card-header-adress">
                  {data.adress}
                </Card.Header>
                <Card.Footer class="card-footer">
                  <img
                    className="guest_icon"
                    src={guestIcon}
                    alt="guest_icon"
                  />
                  for {data.guests} guests
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Link>
  );
};
