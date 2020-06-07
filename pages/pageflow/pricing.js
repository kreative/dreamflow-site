import Head from "next/head";
import Wrapper from "../../components/Wrapper/Wrapper";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import LineLabel from "../../components/LineLabel/LineLabel";
import PricingCard from "../../components/PricingCard/PricingCard";
import AlertBlock from "../../components/AlertBlock/AlertBlock";
import { Container, Row, Col } from "react-grid-system";

export default function PageflowPricing() {
  return (
    <div>
      <Head>
        <title>Pageflow Web Development Pricing | Kreative Dreamflow</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="text/javascript"
          src="https://kit.fontawesome.com/abadd7b058.js"
          crossorigin="anonymous"
        ></script>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>

      <Wrapper bg="#E7DFFF" paddingTop="150px" paddingBottom="100px">
        <Container style={{ padding: "0px" }} fluid>
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
              <p>
                We make sure that what we quote is what you pay. So you can
                relax.
              </p>
            </Col>
            <Col sm={6}>
              <img
                className="image image1"
                src="https://kmg-site-assets.kaycdn.com/relax.gif"
                alt="Relaxation GIF"
              />
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Wrapper bg="white" paddingBottom="50px" paddingTop="50px">
        <AlertBlock
          bg="#F6F6F4"
          headerColor="black"
          labelColor="black"
          label="SIGNUP BONUS !!!"
          header="New customers get a free logo, business card design, and 100 premium business cards​"
          align="center"
        />
      </Wrapper>
      <Wrapper bg="white" paddingBottom="100px" paddingTop="0px">
        <Container style={{ padding: "0px" }} fluid>
          <Row gutterWidth={15}>
            <Col sm={4}>
              <PricingCard
                primary={false}
                color="#7651E0"
                name="Coffee Room"
                price="$4999"
                buttonText="Get Started"
                buttonTextColor="#7651E0"
                buttonRadius="3px"
                buttonPadding="15px 50px"
                buttonLink="/get-started"
                image="https://kmg-site-assets.kaycdn.com/coffee_cup_ikon.jpg"
                imageAlt="Coffe Cup Ikon by Kreative Fantasia Design"
                includedItems={[
                  "5 Pageflow Pages",
                  "Mobile Responsive Site",
                  "Site Security & SSL",
                  "Web Analytics Setup",
                  "SEO Setup through TopRank",
                  "Content Management System",
                  "Dynamic Forms",
                  "Copywriting through Kopy",
                  "Multilingual",
                  "Payment Gateway Integration",
                  "Custom Function Development",
                  "We send you coffee when you join",
                ]}
                missingItems={[]}
              />
            </Col>
            <Col sm={4}>
              <PricingCard
                primary={true}
                color="#7651E0"
                name="Deluxe"
                price="$1999"
                buttonText="Get Started"
                buttonTextColor="white"
                buttonRadius="3px"
                buttonPadding="15px 50px"
                buttonLink="/get-started"
                image="https://kmg-site-assets.kaycdn.com/trophy_ikon.jpg"
                imageAlt="Trophy Ikon by Kreative Fantasia Design"
                includedItems={[
                  "5 Pageflow Pages",
                  "Mobile Responsive Site",
                  "Site Security & SSL",
                  "Web Analytics Setup",
                  "SEO Setup through TopRank",
                  "Content Management System",
                  "Dynamic Forms",
                  "Copywriting through Kopy",
                ]}
                missingItems={[
                  "Multilingual",
                  "Payment Gateway Integration",
                  "Custom Function Development",
                  "We send you coffee when you join",
                ]}
              />
            </Col>
            <Col sm={4}>
              <PricingCard
                primary={false}
                color="#7651E0"
                name="Deluxe"
                price="$997"
                buttonText="Get Started"
                buttonTextColor="#7651E0"
                buttonRadius="3px"
                buttonPadding="15px 50px"
                buttonLink="/get-started"
                image="https://kmg-site-assets.kaycdn.com/art_tools_ikon.jpg"
                imageAlt="Art Tools Ikon by Kreative Fantasia Design"
                includedItems={[
                  "5 Pageflow Pages",
                  "Mobile Responsive Site",
                  "Site Security & SSL",
                  "Web Analytics Setup",
                ]}
                missingItems={[
                  "SEO Setup through TopRank",
                  "Content Management System",
                  "Dynamic Forms",
                  "Copywriting through Kopy",
                  "Multilingual",
                  "Payment Gateway Integration",
                  "Custom Function Development",
                  "We send you coffee when you join",
                ]}
              />
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Wrapper bg="#FFF2DF" paddingBottom="100px" paddingTop="100px">
        <Container style={{ padding: "0px" }}>
          <Row gutterWidth={0}>
            <Col sm={3}>
              <img
                className="image"
                src="https://kmg-site-assets.kaycdn.com/the-pageflow-pledge.png"
                alt="The Pageflow Pledge Badge in Black"
              />
            </Col>
            <Col
              sm={9}
              style={{
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div className="pageflow-pledge-content">
                <LineLabel>OUR PLEDGE</LineLabel>
                <h2>
                  Every customer recieves a Dedicated Success Team, revisions,
                  SEO consultations, and a Satisfaction Guarantee.
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Wrapper bg="#6135DE" paddingBottom="150px" paddingTop="150px">
        <Container style={{ padding: "0px" }} fluid>
          <Row gutterWidth={0}>
            <Col sm={6}>
              <img
                className="image image2"
                src="https://kmg-site-assets.kaycdn.com/cashflow.gif"
                alt="Payment image"
              />
            </Col>
            <Col
              sm={6}
              style={{
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <LineLabel color="white">WEB DEVELOPMENT PAYMENT PLANS</LineLabel>
              <h2 style={{ color: "white" }}>
                Don't let cashflow get in between you and your future customers​
              </h2>
              <p style={{ color: "white" }}>
                We offer payment plans that help break down your costs between
                three, six, twelve months.
              </p>
              <Button
                fill="rgba(255, 255, 255, 0.17)"
                textColor="white"
                radius="3px"
                border="1px solid white"
                padding="15px 50px"
              >
                Get Started
              </Button>
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Wrapper bg="white" paddingBottom="150px" paddingTop="150px">
        <Container style={{ padding: "0px" }} fluid>
          <Row gutterWidth={0}>
            <Col sm={6}>
              <LineLabel color="black">ANY QUESTIONS?</LineLabel>
              <h2 style={{ fontWeight: "bold" }}>
                Our Support Team is here for any concern you have
              </h2>
              <Button
                fill="black"
                textColor="white"
                radius="3px"
                border="1px solid black"
                padding="15px 50px"
                raised={true}
                grow={true}
              >
                Contact Support
              </Button>
            </Col>
            <Col sm={6}>
              <img
                className="image image1"
                src="https://kmg-site-assets.kaycdn.com/support.gif"
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </Wrapper>

      <Footer />

      <style jsx>{`
        .image {
          width: 100%;
        }

        .image1 {
          padding-left: 75px;
        }

        .image2 {
          padding-right: 50px;
        }

        .pageflow-pledge-content {
          padding-left: 50px;
        }

        @media screen and (max-width: 600px) {
          .image1 {
            padding-left: 0px;
          }

          .image2 {
            padding-right: 0px;
          }

          .pageflow-pledge-content {
            padding-left: 0px;
          }
        }
      `}</style>
    </div>
  );
}
