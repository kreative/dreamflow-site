import React, { Component } from "react";
import Wrapper from "../Wrapper/Wrapper";
import { Container, Row, Col } from "react-grid-system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

class DreamflowNavbar extends Component {
  render() {
    return (
      <div className="Navbar__Wrapper">
        <Wrapper bg="rgab(0,0,0,0)" paddingTop="15px" paddingBottom="15px">
          <Container style={{padding:"0px"}} fluid>
            <Row nogutter>
              <Col>
                <p>Hello</p>
              </Col>
              <Col style={{textAlign:"right"}}>
                <FontAwesomeIcon icon={faBars} />
              </Col>
            </Row>
          </Container>
        </Wrapper>
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

          .logo {
            width: 30%;
          }
        `}</style>
      </div>
    );
  }
}

export default DreamflowNavbar;
