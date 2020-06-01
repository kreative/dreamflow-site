import Head from 'next/head';
import Wrapper from '../../components/Wrapper/Wrapper';
import Footer from '../../components/Footer/Footer';
import LineLabel from '../../components/LineLabel/LineLabel';
import NumberBox from '../../components/NumberBox/NumberBox';
import { Container, Row, Col } from 'react-grid-system';

export default function TopRank() {
  return (
    <div>
      <Head>
        <title>Get in touch | TopRank | Dreamflow</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="splash">
        <Wrapper bg="rgba(0,0,0,0)" paddingTop="100px" paddingBottom="100px">
          <Container style={{padding:"0px"}} fluid>
            <Row gutterWidth={0}>
              <Col
                sm={6}
                style={{
                  justifyContent: "flex-end",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <LineLabel color="black">WELCOME TO TOPRANK</LineLabel>
                <h1>Some sort of headline that mentions our amazing SEO product that is TopRank</h1>
              </Col>
              <Col sm={6}>
                <img
                  className="image splash-image"
                  src=""
                  alt=""
                />
              </Col>
            </Row>
          </Container>
        </Wrapper>
      </div>
      <Wrapper bg="white" paddingBottom="150px" paddingTop="150px">
        <Container style={{padding:"0px"}} fluid>
          <Row gutterWidth={0}>
            <Col sm={6}>
              <img
                className="image"
                src=""
                alt=""
              />
            </Col>
            <Col sm={6}>
              <div className="why-seo-content">
                <LineLabel color="blac">Why SEO?</LineLabel>
                <h2>A statement that inspires business owners to add SEO to their strategy</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </Wrapper>


      <Footer />

      <style jsx>{`
        .splash {
          background-color: lightgrey;
        }

        .image {
          width: 100%;
        }

        .splash-image {

        }

        .why-seo-content {
          padding-top: 100px;
        }
      `}</style>
    </div>
  );
}