import React from "react";
import { Button, Col, Nav, Navbar } from "react-bootstrap";
import navlogo from "../imgs/navlogo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar style={{ backgroundColor: "#AAADC3" }}>
      <Navbar.Brand className="d-flex" href="#home">
        <img src={navlogo} />
        <h5 className="mx-2" style={{ height: "20.6px" }}>
          Nexcent
        </h5>
      </Navbar.Brand>

      <Navbar.Toggle />
      <Nav className="d-flex justify-content-between">
        <Nav.Link className="mx-2" href="#home">
          Home
        </Nav.Link>
        <Nav.Link className="" href="#features">
          Features
        </Nav.Link>
        <Nav.Link className="" href="#pricing">
          Seavices
        </Nav.Link>
        <Nav.Link className="" href="#pricing">
          Product
        </Nav.Link>
        <Nav.Link className="" href="#pricing">
          Testmonial
        </Nav.Link>
        <Nav.Link className="" href="#pricing">
          FAQ
        </Nav.Link>
      </Nav>

      <Col style={{ textAlign: "right" }}>
        <Button
          style={{
            backgroundColor: "white",
            border: "1px solid white",
          }}
          className="mx-2"
        >
          <Link
            to={"/login"}
            style={{ textDecoration: "none", color: "#7376BB" }}
          >
            Login
          </Link>
        </Button>
        <Button
          style={{
            backgroundColor: "#7376BB",
            border: "1px solid #7376BB",
          }}
        >
          <Link
            to={"/register"}
            style={{ textDecoration: "none", color: "white" }}
          >
            Signup
          </Link>
        </Button>
      </Col>
    </Navbar>
  );
};

export default Header;
