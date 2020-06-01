import React, { Component } from "react";
import Wrapper from "../Wrapper/Wrapper";
import Button from "../Button/Button";
import { Container, Row, Col } from "react-grid-system";

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="Footer__Support">
          <Wrapper bg="rgba(0,0,0,0)" paddingBottom="20px" paddingTop="20px">
            <p>Have questions? Call our support team 24/7 at (480) 505-5050</p>
          </Wrapper>
        </div>
        {/* <div className="Support__Pointer">
          <svg height="40" viewBox="0 0 80 74" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M41 74L41 -9.53674e-07H80L41 74Z" fill="black"/>
            <path d="M41 74L41 -9.53674e-07H0L41 74Z" fill="black"/>
          </svg>
        </div> */}
        <div className="Footer__Nav">
          <Wrapper bg="rgba(0,0,0,0)" paddingTop="100px" paddingBottom="100px">
            <Container style={{ padding: "0px" }} fluid>
              <Row gutterWidth={25}>
                <Col sm={3}></Col>
                <Col sm={6}>
                  <h2 style={{ paddingBottom: "25px" }}>
                    Some sort of inspiring slogan.
                  </h2>
                  <Button
                    fill="white"
                    textColor="black"
                    radius="3px"
                    border="1px solid white"
                    padding="15px 50px"
                    raised={false}
                    grow={true}
                  >
                    Start a project
                  </Button>
                </Col>
                <Col sm={3}></Col>
              </Row>
            </Container>
          </Wrapper>
        </div>
        <div className="Footer__Base">
          <Wrapper bg="rgba(0,0,0,0)" paddingTop="15px" paddingBottom="15px">
            <Container style={{padding:"0px"}} fluid>
              <Row gutterWidth={0}>
                <Col sm={6}>
                  <div className="Base__Left">Kreative, LLC. Radical Starts Here.</div>
                </Col>
                <Col sm={6}>
                  <div className="Base__Right">
                    <span>Privacy Policy</span>
                    <span>Terms & Conditions</span>
                  </div>
                </Col>
              </Row>
            </Container>
          </Wrapper>
        </div>
        <style jsx>{`
          .Footer {
          }

          .Footer__Support {
            background-color: black;
            color: white;
            text-align: center;
          }

          .Support__Pointer {
            position: relative;
            align-items: center;
            height: 8px;
            left: 48.5%;
          }

          .Footer__Nav {
            background-color: #F8F5F2;
            color: black;
            text-align: center;
          }

          .Footer__Base {
            text-align: right;
            font-family: monospace;
            background-color: #1E1E1E;
            color: #949494;
            font-size: 0.9em;
          }

          .Base__Right {
            text-align: right;
          }

          .Base__Right span {
            padding-left: 20px;
          }

          .Base__Left {
            text-align: left;
          }

          @screen media and (max-width: 600px) {
            .Base__Left,
            .Base__Right {
              text-align: center;
            }

            .Base__Right span {
              padding-left: 0px;
              padding-bottom: 20px;
              display: block;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default Footer;
