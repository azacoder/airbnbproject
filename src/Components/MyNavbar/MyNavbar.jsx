import style from './MyNavbar.module.css';
import React, { useState } from 'react';
import { Button, Dropdown, DropdownButton, Form, FormControl, Image, Nav, Navbar, } from 'react-bootstrap';
import home from './../../assets/image/home.png';
import search1 from './../../assets/image/search1.svg';
import host from './../../assets/image/1.png';
import profile from './../../assets/image/profile.png';
import log from './../../assets/image/log.jpg';

const MyNavbar = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Navbar className={style.Nav} fixed='top' bg="orange" expand="lg">
                <Navbar.Brand href="#">
                    <Image style={{ 'margin': '0px 10px', 'width': '44px' }} src={home} thumbnail />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mr-auto my-2 my-lg-10"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                    <Form style={{ width: '480px', 'height': '30px' }} className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search 'San Fransisco'"
                            className="mr-2"
                            aria-label="Search"
                        />
                        <Button >
                            <Image style={{ 'width': '50px', 'height': '18px', 'margin-bottom': '10px' }} src={search1} />
                        </Button>
                    </Form>
                </Navbar.Collapse>
                <Nav>
                    <Nav.Link style={{ 'margin-top': '8px', }} href="#deets">
                        <Image style={{ 'margin': '0px 12px', 'margin-bottom': '4px', 'width': '17px' }} src={host} />Host</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        <DropdownButton id="dropdown-basic-button" title="Your account">
                                <Dropdown.Item href='#ac-1' >
                                    <Image style={{ 'margin': '5px 12px', 'margin-bottom': '12px', 'width': '15px' }} src={profile} />Profile
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">
                                    <Image style={{ 'margin': '5px 10px', 'width': '20px' }} src={log} onClick={setShow} />
                                    Log out</Dropdown.Item>
                        </DropdownButton>

                    </Nav.Link>
                </Nav>
            </Navbar>
        </>

    )
}

export default MyNavbar;