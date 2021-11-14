import React, { useEffect } from "react";
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
import { useSelector } from "react-redux";
import { userAction, tokenAction, houseAction } from "../../store/action/action";
import { NavLink } from "react-router-dom";

initializeApp(config);

const provider = new GoogleAuthProvider();
const auth = getAuth();

export const NavbarPage = () => {
  const dispatch = useDispatch();
  const UserFromStore = useSelector((state) => state.userData);

  const BtnSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        logIn(credential.idToken);
      })

      .catch((error) => {
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  async function logIn(idToken) {
    try {
      let result = await fetch(
        "http://ec2-3-127-145-151.eu-central-1.compute.amazonaws.com:8000/api/auth/login",
        {
          method: "POST",
          body: JSON.stringify({
            idToken,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { data } = await result.json();
      localStorage.setItem("IdTokenGoogle", data.idToken);
      dispatch(userAction(data.user));
      dispatch(tokenAction(data.idToken));
    } catch (error) {
      console.log(error);
    }
  }
  

  return (
    <div className="main-navbar">
      <Navbar className="Nav" fixed="top" expand="lg">
        <Navbar.Brand>
          <NavLink to = "/">
          <Image className="imgHome" src={home} thumbnail />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

          <Form className="searchHeader">
            <FormControl
              type="search"
              placeholder="Search 'Kyrgyzstan'"
              className="mr-2"
              aria-label="Search"
            />
            <Button>
              <Image className="searchIcon" src={search1} />
            </Button>
          </Form>
          
        </Navbar.Collapse>
        <Nav>
          <NavLink className="host" to ="/submitads">
            <Image className="hostIcon" src={host} />
            Host
          </NavLink>
          {UserFromStore !== null ? (
            <Profile />
          ) : (
            <Button className="signIn" value="primary" onClick={BtnSignIn}>
              Sign in
            </Button>
          )}
        </Nav>
      </Navbar>
    </div>
  );
};
