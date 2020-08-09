import React from "react";
import { Container, Row, Col } from "react-grid-system";

class DreamflowGallery extends React.Component {
  render() {
    return (
      <div>
        <Container style={{padding:"0px", maxWidth: "100%"}}>
          <Row gutterWidth={50}>
            <Col sm={6}>
              <img src={"https://kmg-site-assets.kaycdn.com/portfolio/split_landing.jpg"} />
              <img src={"https://kmg-site-assets.kaycdn.com/portfolio/daydream-landing.jpg"} />
            </Col>
            <Col sm={6}>
              <img src={"https://kmg-site-assets.kaycdn.com/portfolio/freeasap-landing.jpg"} />
              <img src={"https://kmg-site-assets.kaycdn.com/portfolio/botonomy.jpg"} />
              <img src={"https://kmg-site-assets.kaycdn.com/portfolio/starbucks-redesign.jpg"} />
              <img src={"https://kmg-site-assets.kaycdn.com/portfolio/wallet-prototype.jpg"} />
            </Col>
          </Row>
        </Container>
        <style jsx>{`
          img {
            width: 100%;
            margin-bottom: 50px;
            -webkit-box-shadow: 0px 6px 17px -6px rgba(0, 0, 0, 0.45);
            -moz-box-shadow: 0px 6px 17px -6px rgba(0, 0, 0, 0.45);
            box-shadow: 0px 6px 17px -6px rgba(0, 0, 0, 0.45);
          }
        `}</style>
      </div>
    );
  }
}

export default DreamflowGallery;
