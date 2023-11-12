/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import clientone from "../imgs/Logo (1).png";
import clienttwo from "../imgs/Logo (2).png";
import clientthree from "../imgs/Logo (3).png";
import clientfour from "../imgs/Logo (4).png";
import clientfive from "../imgs/Logo (5).png";
import clientsix from "../imgs/Logo (6).png";
import clientseven from "../imgs/Logo (7).png";
import { Container, Row } from "react-bootstrap";
const Footer = () => {
  return (
    <Container
      style={{ height: "17%", backgroundColor: "#AAADC3" }}
      className="d-flex justify-content-center p-2"
    >
      <Row style={{ width: "85%" }}>
        <div className="my-1 text-center">
          <h1>Our Clients</h1>
          <p className="my-4">We have been working with some Fortune 500+ clients</p>
        </div>
        <div className="d-flex justify-content-between">
          <img src={clientone} />
          <img src={clienttwo} />
          <img src={clientthree} />
          <img src={clientfour} />
          <img src={clientfive} />
          <img src={clientsix} />
          <img src={clientseven} />
        </div>
      </Row>
    </Container>
  );
};

export default Footer;
