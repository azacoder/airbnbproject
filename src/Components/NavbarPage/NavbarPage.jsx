import React from "react";
import { Button, Form, FormControl, Image, Nav, Navbar } from "react-bootstrap";
import home from "./../../assets/image/home.png";
import search1 from "./../../assets/image/search3.svg";
import host from "./../../assets/image/1.png";
import "./NavbarPage.css";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import config from "../../firebase/firebase";
import { initializeApp } from "firebase/app";

initializeApp(config);

const provider = new GoogleAuthProvider();
const auth = getAuth();

export const NavbarPage = () => {
  const BtnSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        localStorage.setItem("idToken", credential.idToken);
        console.log(credential.idToken);
        postData(credential.idToken);
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  async function postData(idToken) {
    try {
      let result = await fetch(
        "http://ec2-3-68-80-211.eu-central-1.compute.amazonaws.com:8000/api/auth/login",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            idToken,
          }),
        }
      );
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Navbar className="Nav" fixed="top" expand="lg">
        <Navbar.Brand href="/">
          <Image className="imgH" src={home} thumbnail />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="searchH">
            <FormControl
              type="search"
              placeholder="Search 'San Fransisco'"
              className="mr-2"
              aria-label="Search"
            />
            <Button>
              <Image className="searchI" src={search1} />
            </Button>
          </Form>
        </Navbar.Collapse>
        <Nav>
          <Nav.Link className="host" href="/submitads">
            <Image className="hostI" src={host} />
            Host
          </Nav.Link>
          <Button value="primary" onClick={BtnSignIn}>
            Sign in
          </Button>
        </Nav>
      </Navbar>
    </>
  );
};
