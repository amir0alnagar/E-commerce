import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Completeregisterimg from "../imgs/unsplash_B7BnSfy0Lws.png";
import failed from "../imgs/alert.png";
import success from "../imgs/check-circle.png";

const Completeregister = () => {



 

  return (
    <div>
      <div style={{ backgroundColor: "#AEB4D4", height: "735px" }}>
        <Container>
          <Row className="d-flex justify-content-around align-items-center py-4">
            <Col sm="12" md="7">
              <img
                style={{ height: "85vh", borderRadius: "22px" }}
                src={Completeregisterimg}
                alt="ddd"
              />
            </Col>
            <Col sm="12" md="5">
              <div className="mb-5 mt-2 mx-3">
                <h4 style={{ color: "#646B85", fontFamily: "Ribeye" }}>
                  Register
                </h4>
                <p style={{ color: "#646B85" }}>
                  Please enter your details to register :
                </p>
              </div>
              <div>
                <Form >
                  <Form.Group className="mb-2 " controlId="formBasicEmail">
                    <Form.Label style={{ fontWeight: "bold" }}>Name</Form.Label>
                    <input
                      style={{
                        height: "20px",
                        backgroundColor: "#AEB4D4",
                        border: "0px solid #AEB4D4",
                        outline: "none",
                        borderBottom: "1px solid #847E7E",
                        width: "80%",
                        display: "block",
                      }}
                      type="text"
                    />
                  </Form.Group>

                  <Form.Group className=" " controlId="formBasicEmail">
                    <Form.Label style={{ fontWeight: "bold" }}>
                      Email address
                    </Form.Label>
                    <Form.Control
                      style={{
                        height: "45px",
                        borderRadius: "8px",
                      }}
                      type="email"
                      placeholder="Enter email"
                    />
                    <img
                      style={{
                        position: "absolute",
                        right: "9%",
                        top: "32.8%",
                      }}
                      src={success}
                      alt="ddd"
                    />
                    <p style={{ fontSize: "13px" }}>available</p>
                  </Form.Group>
                  <Form.Group className="mb-1" controlId="formBasicPassword">
                    <Form.Label style={{ fontWeight: "bold" }}>
                      Username
                    </Form.Label>
                    <Form.Control
                      style={{
                        height: "45px",
                        borderRadius: "8px",
                      }}
                      type="text"
                      placeholder="Username"
                    />
                    <img
                      style={{
                        position: "absolute",
                        right: "9%",
                        top: "48%",
                      }}
                      src={failed}
                      alt="ssss"
                    />
                    <p style={{ fontSize: "13px" }}>
                      That username is taken. Try another
                    </p>{" "}
                  </Form.Group>
                  <Form.Group className="mb-1" controlId="formBasicPassword">
                    <Form.Label style={{ fontWeight: "bold" }}>
                      Password
                    </Form.Label>
                    <Form.Control
                      style={{
                        height: "45px",
                        borderRadius: "8px",
                      }}
                      type="password"
                      placeholder="Password"
                    />
                    <img
                      style={{
                        position: "absolute",
                        right: "9%",
                        top: "63.4%",
                      }}
                      src={success}
                      alt="ddddd"
                    />
                    <p style={{ fontSize: "13px" }}>available</p>
                  </Form.Group>
                  <Form.Group className="mb-1" controlId="formBasicPassword">
                    <Form.Label style={{ fontWeight: "bold" }}>
                      Confirm Password
                    </Form.Label>
                    <Form.Control
                      style={{
                        height: "45px",
                        borderRadius: "8px",
                      }}
                      type="password"
                      placeholder="Password"
                    />
                    <img
                      style={{
                        position: "absolute",
                        right: "9%",
                        top: "78.8%",
                      }}
                      src={failed}
                      alt="ddddd"
                    />
                    <p style={{ fontSize: "13px" }}>
                      Please choose a stronger password.Try a mix of letters
                      numbers and symbols
                    </p>
                  </Form.Group>

                  <div className="text-center pt-2 ">
                    <Button
                      type="submit"
                      style={{
                        backgroundColor: "#1E3C5F",
                        width: "295px",
                        height: "48px",
                        borderRadius: "35px",
                      }}
                    >
                      Register
                    </Button>
                  </div>
                </Form>
              </div>{" "}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Completeregister;
