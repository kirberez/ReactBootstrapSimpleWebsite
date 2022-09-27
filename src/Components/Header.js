import React, { Component } from "react";
import { Container, Form, FormControl, Nav, Navbar, Button } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import logo from "./logo192.png";
import Home from "../Pages/Home.jsx";
import About from "../Pages/About.js";
import Contacts from "../Pages/Contacts.js";
import Blog from "../Pages/Blog.js";

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark" >
          <Container>
            <Navbar.Brand href="/" >
              <img
                src={logo}
                height="30"
                width="30"
                className="d-inline-block align-top"
                alt="Logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/" > Home </Nav.Link>
                <Nav.Link href="/about" > About us </Nav.Link>
                <Nav.Link href="/contacts" > Contacts </Nav.Link>
                <Nav.Link href="/blog" > Blog </Nav.Link>
              </Nav>
              <Form className="d-flex" >
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-info" >Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </Router>
      </>
    )
  }
}