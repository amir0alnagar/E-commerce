import React from "react";
import { Button, Form } from "react-bootstrap";

const Loginform = () => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-4 " controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            style={{ height: "55px", borderRadius: "40px" }}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label style={{ fontWeight: "bold" }}>Password</Form.Label>
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
    </div>
  );
};

export default Loginform;
