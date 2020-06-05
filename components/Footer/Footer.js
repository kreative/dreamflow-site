import React, { Component } from "react";
import Wrapper from "../Wrapper/Wrapper";
import LineLabel from "../LineLabel/LineLabel";
import Button from "../Button/Button";
import { Container, Row, Col } from "react-grid-system";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="Footer__CTA">
          <Wrapper bg="white" paddingTop="150px" paddingBottom="150px">
            <div style={{ textAlign: "center" }}>
              <LineLabel color="black">WORK WITH DREAMFLOW</LineLabel>
              <h1 className="CTA__Text">
                Give your business an unfair advantage{" "}
                <FontAwesomeIcon icon={faArrowRight} />
              </h1>
            </div>
          </Wrapper>
        </div>
        <div className="Footer__Support">
          <Wrapper bg="rgba(0,0,0,0)" paddingBottom="20px" paddingTop="20px">
            <p>
              Have questions? Call our support team 24/7 at{" "}
              <a href="tel:#">(480) 505-5050</a>
            </p>
          </Wrapper>
        </div>
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
            <Container style={{ padding: "0px" }} fluid>
              <Row gutterWidth={0}>
                <Col sm={6}>
                  <div className="Base__Left">
                    <a href="https://kreative.im">
                      Kreative, LLC. Radical Starts Here.
                    </a>
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="Base__Right">
                    <span>
                      <a href="#">Privacy Policy</a>
                    </span>
                    <span>
                      <a href="#">Terms & Conditions</a>
                    </span>
                  </div>
                </Col>
              </Row>
            </Container>
          </Wrapper>
        </div>
        <style jsx>{`
          .CTA__Text:hover {
            text-decoration: underline;
            cursor: pointer;
            color: #001aff;
          }

          .Footer__Support {
            background-color: black;
            color: white;
            text-align: center;
          }

          .Footer__Support a {
            text-decoration: none;
            color: white;
          }

          .Support__Pointer {
            position: relative;
            align-items: center;
            height: 8px;
            left: 48.5%;
          }

          .Footer__Nav {
            background-color: #f8f5f2;
            color: black;
            text-align: center;
          }

          .Footer__Base {
            text-align: right;
            font-family: monospace;
            background-color: #1e1e1e;
            color: #949494;
            font-size: 0.9em;
          }

          .Footer__Base a {
            text-decoration: none;
            color: #949494;
          }

          .Footer__Base a:hover,
          .Footer__Support a:hover {
            cursor: pointer;
            color: #93c8ff;
            text-decoration: underline;
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
