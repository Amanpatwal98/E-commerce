import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Badge from 'react-bootstrap/Badge';
import Footer from '../../components/footer/footer'; 
import {NavLink, useHistory } from "react-router-dom";
import React, {useState} from "react"
import axios from "axios";

// "../../components/footer"; 


import "./homepage.css"


function NavScroll() {

  const logOut = () => {
    // axios.post("http://localhost:8000/login", user)
    // .then(res => {
    //     alert(res.data.message)
    //     // setLoginUser(res.data.user)
    //     history.push("./")
    // })
}
  return (
    <>
    <div className="Appp">
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>

            <Nav.Link href="#action2">about us</Nav.Link>
            <Nav.Link href="#action3" > contact us</Nav.Link>
            {/* <Button variant="primary" onClick={logOut}> */}
     
     <button type="button">
      <NavLink to="login"> log out</NavLink>
      <span className="visually-hidden">unread messages</span>
      </button>
    {/* </Button> */}
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <img src=""></img>
    <h1>Hello World</h1>

    </div>
     {/* <Footer /> */}
     </>
  );
}

export default NavScroll;