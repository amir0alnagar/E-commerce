import React from "react";
import { Container } from "react-bootstrap";
import Header from "../components/header";
import Footer from "../components/footer";
import langingimg from "../imgs/landingcontent.jpg";
const LandingPage = () => {


  return (
    <div style={{ backgroundColor: "#AAADC3", height: "100vh" }}>
      <Container>
        <Header />
        <img src={langingimg} style={{ width: "100%" }} alt="" />
        {/* <div
          className="maincontent d-flex justify-content-around align-items-center"
          style={{ height: "60vh", backgroundColor: "#12263A" }}
        >
          <div className="leftside ">
            <h1 style={{ color: "white" }}>Lessons and insights</h1>
            <h1 style={{ color: "#7376BB" }}>from 8 years</h1>
            <p style={{ color: "white" }}>
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <Button
              style={{
                backgroundColor: "#7376BB",
                border: "1px solid #7376BB",
              }}
            >
              Register
            </Button>
          </div>
          <div className="rightside">
            <div className="leftside">
              <h1 style={{ color: "white" }}>Lessons and insights</h1>
              <h1 style={{ color: "#7376BB" }}>from 8 years</h1>
              <p style={{ color: "white" }}>
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <Button
                style={{
                  backgroundColor: "#7376BB",
                  border: "1px solid #7376BB",
                }}
              >
                Register
              </Button>
            </div>
          </div>
        </div> */}
        <Footer />
      </Container>
    </div>
  );
};

export default LandingPage;
