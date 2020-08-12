import React from "react";
import { Container, Row, Col } from "react-grid-system";
import ContentDownload from "../ContentDownload/ContentDownload";

class CaseStudyDownloadPage extends React.Component {
  render() {
    return (
      <div>
        <Container style={{padding: "0px"}}>
          <Row gutterWidth={50}>
            <Col sm={4}>
              <div className={"download_section"}>
                <img
                  src={this.props.cover}
                  alt={this.props.coverAlt}
                  className={"cover"}
                />
                <ContentDownload
                  postLink={""}
                  btnColor={this.props.color}
                />
              </div>
            </Col>
            <Col sm={8}>
              <h1>{this.props.title}</h1>
            </Col>
          </Row>
        </Container>
        <style jsx>{`
          .cover {
            
          }
          
          .download_section {
            padding: 25px;
            border: 1.5px solid #F6F6F4;
            border-radius: 10px;
          }
        `}</style>
      </div>
    );
  }
}

export default CaseStudyDownloadPage;