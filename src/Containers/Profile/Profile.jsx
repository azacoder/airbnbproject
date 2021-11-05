import React from "react";
import "./Profile.css";
import { Button, Card, Image } from "react-bootstrap";
import { useState } from "react";
import { MyVerticallyCenteredModal } from "./modal-for-prof/profileModal";

const Profile = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Card className="card-profile">
        <Image
          className="image-profile"
          src="https://www.easytutorial.com/wp-content/uploads/2020/03/create-user-account-admin-windows-10-easy-tutorial-how-to-340x160.png"
          roundedCircle
        />
        <Card.Body className="bo">
          <Card.Title className="theme">Details</Card.Title>
          <Card.Text className="acc">
            <p className="na">
              Name: <b>Bilal Akbalaev</b> <br />{" "}
            </p>
            <p className="ac">
              Contact: <b>bilu@gmail.com</b>
            </p>
          </Card.Text>
          <hr />
          <Card.Title className="theme">Additional Details</Card.Title>
          <Card.Text className="ltt">
            Interested in becoming a TinyHouse host? Register with your Stripe
            account!
          </Card.Text>
          <Button variant="primary" onClick={() => setModalShow(true)}>
            Connect with Stripe
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

export default Profile;


