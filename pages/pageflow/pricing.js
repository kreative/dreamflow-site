import Head from 'next/head';
import Wrapper from '../../components/Wrapper/Wrapper';
import LineLabel from '../../components/LineLabel/LineLabel';
import PricingCard from '../../components/PricingCard/PricingCard';
import { Container, Row, Col } from 'react-grid-system';

export default function PageflowPricing() {
  return (
    <div>
      <Head>
        <title>Pageflow Web Development Pricing | Kreative Dreamflow</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/abadd7b058.js" crossorigin="anonymous"></script>
      </Head>
      
      <Wrapper bg="#ABFAFF" paddingTop="150px" paddingBottom="100px">
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
        <div className="signup-bonus">
          <h3>Signup bonus</h3>
        </div> 
      </Wrapper>
      <Wrapper bg="white" paddingBottom="100px" paddingTop="100px">
        <Container style={{padding:"0px"}} fluid>
          <Row gutterWidth={0}>
            <Col sm={4}></Col>
            <Col sm={4}>
              <PricingCard
                primary={true}
                color="#7651E0"
                name="Deluxe"
                price="$1999"
                buttonText="Signup"
                buttonTextColor="white"
                buttonRadius="3px"
                buttonPadding="15px 40px"
                image="https://kmg-site-assets.kaycdn.com/trophy_ikon.jpg"
                imageAlt="Trophy Ikon by Kreative Fantasia Design"
                includedItems={[
                  "5 Pageflow Pages",
                  "Mobile Responsive Site",
                  "Site Security & SSL",
                  "SEO Setup through TopRank",
                  "Web Analytics Setup",
                  "Content Management System",
                  "Dynamic Forms",
                  "Copywriting through Kopy",
                ]}
                missingItems={[
                  "Multilingual",
                  "Payment Gateway Integration",
                  "Custom Function Development",
                  "We send you coffee when you join"
                ]}
              />
            </Col>
            <Col sm={4}></Col>
          </Row>
        </Container>
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
