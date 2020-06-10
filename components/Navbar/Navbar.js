import React, { Component } from "react";
import Wrapper from "../Wrapper/Wrapper";
import { Container, Row, Col } from "react-grid-system";

class DreamflowNavbar extends Component {
  openMenu() {
    document.getElementById("__overlay").style.display = "block";
  }

  closeMenu() {
    document.getElementById("__overlay").style.display = "none";
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
                    onClick={this.openMenu}
                    fill="black"
                  >
                    <rect width="154" height="11.7297" rx="5" />
                    <rect
                      x="37.6047"
                      y="25.1351"
                      width="116.395"
                      height="11.7297"
                      rx="5"
                    />
                    <rect
                      x="82.3721"
                      y="50.2703"
                      width="71.6279"
                      height="11.7297"
                      rx="5"
                    />
                  </svg>
                </Col>
              </Row>
            </Container>
          </Wrapper>
        </div>
        <div className="overlay" id="__overlay">
        <Wrapper bg="rgab(0,0,0,0)" paddingTop="15px" paddingBottom="15px">
            <Container style={{ padding: "0px", color: "white" }} fluid>
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
                    onClick={this.closeMenu}
                    fill="white"
                  >
                    <rect width="154" height="11.7297" rx="5" />
                    <rect
                      x="37.6047"
                      y="25.1351"
                      width="116.395"
                      height="11.7297"
                      rx="5"
                    />
                    <rect
                      x="82.3721"
                      y="50.2703"
                      width="71.6279"
                      height="11.7297"
                      rx="5"
                    />
                  </svg>
                </Col>
              </Row>
            </Container>
          </Wrapper>
          <div className="overlay-content">
            <div className="menu-content">
              <Wrapper>
                <Container style={{padding:"0px"}} fluid>
                  <Row gutterWidth={50}>
                    <Col sm={6}>
                      <div>
                        <a href="#">About</a>
                        <a href="#">Services</a>
                        <a href="#">Clients</a>
                        <a href="#">Contact</a>
                      </div>
                    </Col>
                    <Col sm={6}>

                    </Col>
                  </Row>
                </Container>
              </Wrapper>
            </div>
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
            width: 27%;
          }

          .overlay {
            display: none;
            height: 100%;
            width: 100%;
            position: fixed;
            z-index: 2000;
            left: 0;
            top: 0;
            background-color: rgb(0, 0, 0);
            background-color: rgba(0, 0, 0, 1);
            overflow-x: hidden;
            backdrop-filter: blur(5px);
          }

          .overlay-content {
            width: 100%;
            height: 90%;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .menu-content {
            text-align: center;
            width: 100%;
          }

          .menu-content a {
            padding: 8px;
            text-decoration: none;
            font-size: 36px;
            color: #818181;
            display: block;
          }
        `}</style>
      </div>
    );
  }
}

export default DreamflowNavbar;
