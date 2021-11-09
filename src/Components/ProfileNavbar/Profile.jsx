import React from "react";
import { Col, Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./Profile.css";

const Profile = (props) => {
  const dataUser = useSelector((state) => state.userData);
  console.log(dataUser);
  return (
    <div>
      <Col>
        <Image className="avaImg" src={dataUser.avatar} roundedCircle />
      </Col>
    </div>
  );
};

export default Profile;
