import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../images/logo.png";
import "./header.css";

const Topbar = () => {
  return (
    <Navbar
      expand="lg"
      className="px-4 text-capitalize"
      style={{ backgroundColor: "#fff" }}
    >
      <Navbar.Brand href="#home">
        <img src={logo} alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="/">Home</Nav.Link>

          <NavDropdown title="Administration" id="administration-dropdown">
            <NavDropdown.Item href="/courses">Courses</NavDropdown.Item>

            <NavDropdown.Item href="/gallery">gallery</NavDropdown.Item>

            <NavDropdown.Item href="/events">events</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href="/admission">Admission</Nav.Link>

          <Nav.Link href="/faculty">Faculty</Nav.Link>

          <Nav.Link href="/about">About</Nav.Link>

          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>

        <NavDropdown title="Login" id="administration-dropdown">
          <NavDropdown.Item href="/courses">Admin</NavDropdown.Item>

          <NavDropdown.Item href="/gallery">Student</NavDropdown.Item>
        </NavDropdown>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Topbar;
