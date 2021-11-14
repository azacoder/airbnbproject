import React from "react";
import "./ProfileUser.css";
import { Button, Card, Image } from "react-bootstrap";
import { useState } from "react";
import { MyVerticallyCenteredModal } from "./modal-for-prof/profileModal";
import { useSelector } from "react-redux";

const ProfileUser = () => {
  const dataUsers = useSelector((state) => state.userData);
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Card className="card-profile">
        <Image className="image-profile" src={dataUsers.avatar} />
        <Card.Body className="bo">
          <Card.Title className="theme">Details</Card.Title>
          <Card.Text>
            <p>
              Name: <b>{dataUsers.lastName} {dataUsers.firstName}</b> <br />{" "}
            </p>
            <p>
              Contact: <b>{dataUsers.email}</b>
            </p>
          </Card.Text>
          <hr />
          <Card.Title className="theme">Additional Details</Card.Title>
          <Card.Text className="ltt">
            If you want to place an ad that you are renting an apartment or room
            for daily rent, you will have to pay for it.
          </Card.Text>
          <Button variant="primary" onClick={() => setModalShow(true)}>
            Add payment
          </Button>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
          <Card.Text className="lt">
            TinyHouse uses{" "}
            <a className="a-profile" href="https://stripe.com/connect">
              Stripe
            </a>{" "}
            to help transfer your earnings in a secure and truster manner.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProfileUser;


