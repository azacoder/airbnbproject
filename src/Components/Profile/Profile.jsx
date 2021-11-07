import React from "react";
import { Button, Col, Dropdown, Image, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./Profile.css";

const Profile = (props) => {
  const dataUser = useSelector((state) => state.userData);
  console.log(dataUser);
  return (
    // <div>
    //   <Col>
    //     <Image className="avaImg" src={dataUser.avatar} roundedCircle />
    //   </Col>
    // </div>
    // <OverlayTrigger
    //   placement="auto"
    //   overlay={<Tooltip id="button-tooltip-2">  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    //     <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    //     <Dropdown.Item href="#/action-3">Something else</Dropdown.Item></Tooltip>}
    // >
    //   {({ /* ref, */ ...triggerHandler }) => (
    //     <Button
    //       // variant="light"
    //       {...triggerHandler}
    //     // className="d-inline-flex align-items-center"
    //     >
    //       
    //     </Button>
    //   )}
    // </OverlayTrigger>

    <Dropdown>
    <Dropdown.Toggle variant='light'>
    <Image className="avaImg" src={dataUser.avatar} roundedCircle />
    </Dropdown.Toggle>
    
    <Dropdown.Menu>
      <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Log out</Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
  )

};

export default Profile;
