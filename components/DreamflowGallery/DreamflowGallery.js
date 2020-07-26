import React from "react";
import { Container, Row, Col } from "react-grid-system";

class DreamflowGallery extends React.Component {
  render() {
    return (
      <div>
        <Container style={{padding:"0px"}}>
          <Row gutterWidth={25}>
            <Col sm={6}>
              <img src={""} />
            </Col>
            <Col sm={6}>
              <img src={""} />
            </Col>
          </Row>
        </Container>
        <style jsx>{`
          img {
            width: 100%;
            padding-bottom: 25px;  
          }
        `}</style>
      </div>
    );
  }
}

export default DreamflowGallery;
