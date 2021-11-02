import {
  Button,
  Dropdown,
  DropdownButton,
  Form,
  FormControl,
  Image,
  Nav,
  Navbar,
} from "react-bootstrap";
import home from "./../../assets/image/home.png";
import search1 from "./../../assets/image/search3.svg";
import host from "./../../assets/image/1.png";
import Signin from "../../Containers/Singin/Singin";
import style from "./MyNavbar.module.css";
import React, { useState } from "react";

const MyNavbar = () => {
  return (
    <>
      <Navbar className={style.Nav} fixed="top" expand="lg">
        <Navbar.Brand href="/">
          <Image
            style={{ margin: "0px 10px", width: "44px" }}
            src={home}
            thumbnail
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-10"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form style={{ width: "480px", height: "30px" }} className="d-flex">
            <FormControl
              type="search"
              placeholder="Search 'San Fransisco'"
              className="mr-2"
              aria-label="Search"
            />
            <Button>
              <Image
                style={{
                  width: "50px",
                  height: "18px",
                  "margin-bottom": "10px",
                }}
                src={search1}
              />
            </Button>
          </Form>
        </Navbar.Collapse>
        <Nav>
          <Nav.Link
            style={{ "margin-top": "8px", marginRight: "15px" }}
            href="/submitads"
          >
            <Image
              style={{
                margin: "0px 12px",
                "margin-bottom": "4px",
                width: "17px",
              }}
              src={host}
            />
            Host
          </Nav.Link>
          <div className={style.signin}>
            <Signin />
          </div>
        </Nav>
      </Navbar>
    </>
  );
};

export default MyNavbar;
