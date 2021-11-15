import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./NavbarPage.css";
import search1 from "./../../assets/image/search3.svg";
import home from "./../../assets/image/home.png";
import host from "./../../assets/image/1.png";
import config from "../../firebase/firebase";
import { Button, Image, Nav, Navbar } from "react-bootstrap";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import Profile from "../Profile/Profile";
import { useSelector } from "react-redux";
import { tokenAction, userAction } from "../../store/action/action";
import { NavLink } from "react-router-dom";
import Fetch from "../../api/request";
// import { Home } from '../../Containers/Home/Home'

initializeApp(config);

const provider = new GoogleAuthProvider();
const auth = getAuth();

export const NavbarPage = () => {
  // const [searchView, setSearchView] = useState(false);
  const dispatch = useDispatch();
  const UserFromStore = useSelector((state) => state.userData);

  const BtnSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        login(credential.idToken);
      })

      .catch((error) => {
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  const login = (idToken) => {
    Fetch("auth/login", {
      method: "POST",
      body: { idToken },
      headers: {
        "Content-Type": "application/json",
      }
    }).then((result) => {
      console.log(result);
      localStorage.setItem("IdTokenGoogle", result.idToken);
      dispatch(userAction(result.user));
      dispatch(tokenAction(result.idToken));
    })
      .catch((error) => {

      })
  }
  return (
    <div className="main-navbar">
      <Navbar className="Nav" fixed="top" expand="lg">
        <Navbar.Brand>
          <NavLink to="/">
            <Image className="imgHome" src={home} thumbnail />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          {/* {searchView == false ? (
            <Home/>
          ) : (
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
          )} */}
        </Navbar.Collapse>
        <Nav>
          <NavLink className="host" to="/submitads">
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
