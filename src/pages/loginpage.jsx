import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import loginimg from "../imgs/loginimg.jpg";
const Loginpage = () => {
  return (
    <div style={{ backgroundColor: "#AEB4D4", height: "735px" }}>
      <Container>
        <h5 className="py-3" style={{ textAlign: "right" }}>
          Your Logo
        </h5>

        <div className="d-flex justify-content-between">
          <Col sm="4">
            <img
              style={{ height: "88vh", borderRadius: "22px" }}
              src={loginimg}
            />
          </Col>
          <Col sm="6">
            <Row className="my-4" style={{ textAlign: "center" }}>
              <h4>Welcome to lorem..!</h4>
            </Row>
            <Row className="d-flex justify-content-center">
              <Col
                sm="0"
                className="d-flex justify-content-between align-items-center "
                style={{
                  width: "415px",
                  backgroundColor: "rgba(115, 118, 187, 0.50)",
                  borderRadius: "33px",
                  height: "65px",
                  textAlign: "center",
                }}
              >
                <div
                  className="d-flex justify-content-center align-items-center mx-3"
                  style={{
                    backgroundColor: "#7376BB",
                    width: "186px",
                    height: "45px",
                    borderRadius: "33px",
                  }}
                >
                  Login
                </div>
                <div className="d-flex justify-content-center align-items-center mx-5">
                  Register
                </div>
              </Col>
            </Row>
            <p className="my-4 ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div>
              <Form>
                <Form.Group className="mb-4 " controlId="formBasicEmail">
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Email address
                  </Form.Label>
                  <Form.Control
                    style={{ height: "55px", borderRadius: "40px" }}
                    type="email"
                    placeholder="Enter email"
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Password
                  </Form.Label>
                  <Form.Control
                    style={{ height: "55px", borderRadius: "40px" }}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-4 px-3 d-flex justify-content-between"
                  controlId="formBasicCheckbox"
                >
                  <Form.Check type="checkbox" label="Remember me" />
                  <p>Forget Password?</p>
                </Form.Group>
                <div className="text-center">
                  <Button
                    style={{
                      backgroundColor: "#1E3C5F",
                      width: "295px",
                      height: "48px",
                      borderRadius: "35px",
                    }}
                  >
                    Login
                  </Button>
                </div>
              </Form>
            </div>{" "}
          </Col>
        </div>
      </Container>
    </div>
  );
};

export default Loginpage;
