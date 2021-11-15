import React, { useEffect } from "react";
import "./ProfileUser.css";
import { Button, Card, Image } from "react-bootstrap";
import { useState } from "react";
import Fetch from "../../api/request";

const ProfileUser = () => {
  const [usersHouse, setUsersHouse] = useState({});
  const [isLoading, setLoading] = useState(true);
  // const linkServer =
  //   "http://ec2-3-127-145-151.eu-central-1.compute.amazonaws.com:8000/";

  useEffect(() => {
    Fetch("user/profile?listings=true", { method: "GET" }).then((responses) => {
      console.log(responses);
      setUsersHouse(responses);
      setLoading(false);
    });
  }, []);

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
                  Name:{" "}
                  <b>
                    {usersHouse.lastName} {usersHouse.firstName}
                  </b>{" "}
                  <br />{" "}
                </p>
                <p>
                  Contact: <b>{usersHouse.email}</b>
                </p>
              </Card.Text>
              <hr />
              <Card.Title className="theme">Additional Details</Card.Title>
              <Card.Text className="ltt">
                If you want to place an ad that you are renting an apartment or
                room for daily rent, you will have to pay for it.
              </Card.Text>
              <Card.Text className="lt">
                TinyHouse uses{" "}
                <a className="a-profile" href="https://stripe.com/connect">
                  Stripe
                </a>{" "}
                to help transfer your earnings in a secure and truster manner.
              </Card.Text>
            </Card.Body>
          </Card>
          <div>
            <div>
              {usersHouse &&  
                usersHouse.listings &&
                usersHouse.listings.map((elem) => {
                  return (
                    <div>
                      <div>Listings</div>
                      <p>
                        This section highlights the listings this user currently
                        hosts and has made available for bookings.
                      </p>
                      <div>{elem.id}</div>
                    </div>
                  );
                })}
            </div>
            <div>
              {usersHouse.bookings &&
                usersHouse.bookings.map((el) => {
                  return (
                    <div>
                      <div>Bookings</div>
                      <p>
                        This section highlights the bookings you've made, and
                        the check-in/check-out dates associated with said
                        bookings.
                      </p>
                      <div>{el.id}</div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileUser;
