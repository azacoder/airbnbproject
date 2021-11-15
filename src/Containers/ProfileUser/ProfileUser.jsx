import "./ProfileUser.css";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Card, Image } from "react-bootstrap";
import Fetch from "../../api/request";
import { HouseCart } from "../../Components/HouseCard/HouseCard";
import { Redirect } from "react-router";

const ProfileUser = () => {
  const userFromStore = useSelector(state => state.userData);

  const [usersHouse, setUsersHouse] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    Fetch("user/profile?listings=true", { method: "GET" }).then((responses) => {
      console.log(responses);
      setUsersHouse(responses);
      setLoading(false);
    });
  }, []);


  if (!userFromStore) {
    return <Redirect to="/" />
  }
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <Card className="card-profile">
            <Image className="image-profile" src={usersHouse.avatar} />
            <Card.Body className="bo">
              <Card.Title className="theme">Details</Card.Title>
              <Card.Text>
                <p>
                  Name: <span className="user-info">{usersHouse.lastName} {usersHouse.firstName}</span>
                </p>
                <p>
                  Contact: <span className="user-info">{usersHouse.email}</span>
                </p>
              </Card.Text>
              <hr />
              <Card.Title className="theme">Additional Details</Card.Title>
              <Card.Text className="ltt">
                If you want to place an ad that you are renting an apartment or
                room for daily rent, you will have to pay for it.
              </Card.Text>
              <Card.Text className="lt">
                TinyHouse uses
                <a className="a-profile" href="https://stripe.com/connect">
                  <span className="stripe">Stripe</span>
                </a>
                to help transfer your earnings in a secure and truster manner.
              </Card.Text>
            </Card.Body>
          </Card>
          <div>
            <div className="userListingBox">
              <h4 className="userListingText">Listings</h4>
              <p>
                This section highlights the listings this user currently
                hosts and has made available for bookings.
              </p>
              <div className="userCards">
                {usersHouse &&
                  usersHouse.listings &&
                  usersHouse.listings.map((elem) => {
                    return (
                      <HouseCart data={elem} />
                    );
                  })}
              </div>
            </div>
            <div>
              <div className="userListingBox">
                <h4 className="userListingText">Bookings</h4>
                <p>
                  This section highlights the bookings you've made, and
                  the check-in/check-out dates associated with said
                  bookings.
                </p>
              </div>
              <div className="userCards">
                {usersHouse.bookings &&
                  usersHouse.bookings.map((elem) => {
                    return (
                      <HouseCart data={elem.listing} />
                    );
                  })}</div>
            </div>
          </div>
        </div>
      )
      }
    </>
  );
};

export default ProfileUser;
