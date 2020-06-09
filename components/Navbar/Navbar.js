import React, { Component } from "react";
import Wrapper from "../Wrapper/Wrapper";
import { Container, Row, Col } from "react-grid-system";

class DreamflowNavbar extends Component {
  handleToggle() {
    document.getElementById("__overlay").style.width = "100%";
  }

  render() {
    return (
      <div>
        <div className="Navbar__Wrapper">
          <Wrapper bg="rgab(0,0,0,0)" paddingTop="15px" paddingBottom="15px">
            <Container style={{ padding: "0px" }} fluid>
              <Row nogutter>
                <Col>
                  <p>Hello</p>
                </Col>
                <Col
                  style={{
                    textAlign: "right",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-end",
                  }}
                >
                  <svg
                    className="toggle"
                    viewBox="0 0 154 62"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={this.handleToggle}
                  >
                    <rect width="154" height="11.7297" rx="5" fill="black" />
                    <rect
                      x="37.6047"
                      y="25.1351"
                      width="116.395"
                      height="11.7297"
                      rx="5"
                      fill="black"
                    />
                    <rect
                      x="82.3721"
                      y="50.2703"
                      width="71.6279"
                      height="11.7297"
                      rx="5"
                      fill="black"
                    />
                  </svg>
                </Col>
              </Row>
            </Container>
          </Wrapper>
        </div>
        <div className="overlay" id="__overlay">
          <div className="overlay-content">
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <style jsx>{`
          .Navbar__Wrapper {
            background: rgba(255, 255, 255, 0.6);
            position: fixed;
            top: 0;
            width: 100%;
            overflow: hidden;
            z-index: 1000;
            backdrop-filter: blur(5px);
          }

          .Navbar {
            display: flex;
            font-family: sans-serif;
            align-items: center;
            padding: 20px 10%;
          }

          .toggle {
            width: 30px;
          }

          .logo {
            width: 30%;
          }

          .overlay {
            height: 100%;
            width: 0;
            position: fixed; /* Stay in place */
            z-index: 2000; /* Sit on top */
            left: 0;
            top: 0;
            background-color: rgb(0, 0, 0); /* Black fallback color */
            background-color: rgba(0, 0, 0, 0.9); /* Black w/opacity */
            overflow-x: hidden; /* Disable horizontal scroll */
            transition: 0.5s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
          }

          .overlay-content {
            position: relative;
            top: 50%;
            width: 100%;
            text-align: center;
            margin-top: 30px;
          }

          .overlay a {
            padding: 8px;
            text-decoration: none;
            font-size: 36px;
            color: #818181;
            display: block;
            transition: 0.3s;
          }
        `}</style>
      </div>
    );
  }
}

export default DreamflowNavbar;
