import React from "react";
import { Button, Col, Nav, Navbar } from "react-bootstrap";
import navlogo from "../imgs/navlogo.png";

const Header = () => {
  return (
    <Navbar style={{ backgroundColor: "#AAADC3" }}>
      <Col>
        <Navbar.Brand className="d-flex" href="#home">
          <img src={navlogo} />
          <h5 className="mx-2" style={{ height: "20.6px" }}>
            Nexcent
          </h5>
        </Navbar.Brand>
      </Col>
      <Col>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link className="mx-2" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="mx-2" href="#features">
              Features
            </Nav.Link>
            <Nav.Link className="mx-2" href="#pricing">
              Seavices
            </Nav.Link>
            <Nav.Link className="mx-2" href="#pricing">
              Product
            </Nav.Link>
            <Nav.Link className="mx-2" href="#pricing">
              Testmonial
            </Nav.Link>
            <Nav.Link className="mx-2" href="#pricing">
              FAQ
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Col>

      <Col style={{ textAlign: "right" }}>
        <Button
          style={{
            backgroundColor: "white",
            color: "#7376BB",
            border: "1px solid white",
          }}
          className="mx-3"
        >
          Login
        </Button>
        <Button
          style={{
            backgroundColor: "#7376BB",
            border: "1px solid #7376BB",
          }}
        >
          Signup
        </Button>
      </Col>
    </Navbar>
  );
};

export default Header;
