import React, { Component } from 'react';
import Button from "../Button/Button";
import { Container, Row, Col } from 'react-grid-system';

class Footer extends Component {
  render() {
    return(
      <div className="Footer">
        <div className="Footer__Nav">
          <Container style={{padding:"0px"}} fluid>
            <Row gutterWidth={25}>
              <Col sm={4}>
                <img
                  className="Footer__Logo"
                  src="https://kmg-site-assets.kaycdn.com/kreative-dreamflow-w.png"
                  alt="Kreative Dreamflow logo in White"
                />
                <h2 style={{paddingBottom:"25px"}}>Some sort of inspiring slogan.</h2>
                <Button
                  fill="white"
                  textColor="black"
                  radius="3px"
                  border="1px solid white"
                  padding="15px 50px"
                  raised={false}
                  grow={true}
                  width="100%"
                >
                  Start a project
                </Button>
              </Col>
              <Col sm={4}>
                
              </Col>
              <Col sm={4}>
                
              </Col>
            </Row>
          </Container>
        </div>
        <div className="Footer__Base">
          <p>Kreative, LLC</p>
          <p>Radical Starts Here.</p>
        </div>
        <style jsx>{`
          .Footer {

          }

          .Footer__Nav {
            background-color: black;
            color: white;
            padding: 100px 10%;
          }

          .Footer__Base {
            text-align: right;
            font-family: monospace;
            background-color: black;
            color: white;
          }

          .Footer__Logo {
            width: 60%;
            padding-bottom: 25px;
          }
        `}</style>
      </div>
    );
  };
}

export default Footer;