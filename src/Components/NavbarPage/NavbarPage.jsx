import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./NavbarPage.css";
import search1 from "./../../assets/image/search3.svg";
import home from "./../../assets/image/home.png";
import host from "./../../assets/image/1.png";
import config from "../../firebase/firebase";
import { Button, Form, FormControl, Image, Nav, Navbar } from "react-bootstrap";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import Profile from "../Profile/Profile";
import { signInAction } from "../../store/store";

initializeApp(config);

const provider = new GoogleAuthProvider();
const auth = getAuth();

export const NavbarPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const dispatch = useDispatch();

  const BtnSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        postData(credential.idToken);
        console.log(credential);
        setIsLoaded(true);
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  // const sendHttpRequest = (method, url, data) => {
  //   return fetch(url, {
  //     method: method,
  //     body: JSON.stringify(data),
  //     headers: data ? { "Content-Type": "application/json" } : {},
  //   }).then((response) => {
  //     if (response.status >= 400) {
  //       //  !response.ok
  //       return response.json().then((errResData) => {
  //         const error = new Error("Something went wrong!");
  //         error.data = errResData;
  //         throw error;
  //       });
  //     }
  //     return response.json();
  //   });
  // };

  // const getData = () => {
  //   sendHttpRequest(
  //     "GET",
  //     "http://ec2-3-127-145-151.eu-central-1.compute.amazonaws.com:8000/user/profile"
  //   ).then((responseData) => {
  //     console.log(responseData);
  //   });
  // };

  // const sendData = () => {
  //   sendHttpRequest(
  //     "POST",
  //     "http://ec2-3-127-145-151.eu-central-1.compute.amazonaws.com:8000/api/auth/login",
  //     {
  //       email: "jwebvuv",
  //       // password: 'fkjdvh'
  //     }
  //   )
  //     .then((responseData) => {
  //       console.log(responseData);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  async function postData(idToken) {
    try {
      let result = await fetch(
        "http://ec2-3-127-145-151.eu-central-1.compute.amazonaws.com:8000/api/auth/login",
        {
          method: "POST",
          body: JSON.stringify({
            idToken: idToken,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await result.json();
      localStorage.setItem("idToken", JSON.stringify(data.data.idToken));
      console.log("id: ", data);
      console.log(data.data.idToken);
      getData(data.data.idToken);
    } catch (error) {
      console.log(error);
    }
    // dispatch(signInAction())
  }

  async function getData(idToken) {
    try {
      let res = await fetch(
        "http://ec2-3-127-145-151.eu-central-1.compute.amazonaws.com:8000/api/user/profile",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${idToken}`,
          },
        }
      );
      const data = await res.json();
      console.log(data);
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
          {isLoaded ? (
            <Profile />
          ) : (
            <Button value="primary" onClick={BtnSignIn}>
              Sign in
            </Button>
          )}
        </Nav>
      </Navbar>
    </>
  );
};
