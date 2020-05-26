import Head from 'next/head';
import Wrapper from '../../components/Wrapper/Wrapper';
import LineLabel from '../../components/LineLabel/LineLabel';
import { Container, Row, Col } from 'react-grid-system';

export default function PageflowPricing() {
  return (
    <div>
      <Head>
        <title>Pageflow Web Development Pricing | Kreative Dreamflow</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Wrapper bg="#ABFAFF" paddingTop="150px" paddingBottom="150px">
        <Container style={{padding: "0px"}} fluid>
          <Row gutterWidth={0}>
            <Col 
              sm={6}
              style={{
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <LineLabel color="black">WEB DEVELOPMENT PRICING</LineLabel>
              <h1>Flexible web design pricing without the hidden fees</h1>
              <p>We make sure that what we quote is what you pay. So you can relax.</p>
            </Col>
            <Col sm={6}>
              <img
                className="image1"
                src="https://kmg-site-assets.kaycdn.com/relax.gif"
                alt="Relaxation GIF"
              />
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Wrapper bg="white" paddingBottom="50px" paddingTop="50px">
        
      </Wrapper>
      <style jsx>{`
        .image1 {
          width: 100%;
          padding-left: 25px;
        }

        @media screen and (max-width: 600px) {
          .image1 {
            padding-left: 0px;
          }
        }
      `}</style>
    </div>
  )
}
