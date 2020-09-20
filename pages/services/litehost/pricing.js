import Head from "next/head";
import Wrapper from "../../../components/Wrapper/Wrapper";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import Button from "../../../components/Button/Button";
import LineLabel from "../../../components/LineLabel/LineLabel";
import PricingCard from "../../../components/PricingCard/PricingCard";
import AlertBlock from "../../../components/AlertBlock/AlertBlock";
import { Container, Row, Col } from "react-grid-system";

export default function LitehostPricing() {
  return (
    <div>
      <Head>
        <title>LiteHost Hosting Pricing | Kreative Dreamflow</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/general/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/general/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/general/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/general/site.webmanifest"/>
        <script
          type="text/javascript"
          src="https://kit.fontawesome.com/abadd7b058.js"
          crossOrigin="anonymous"
        />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <script
          type="text/javascript"
          src="https://kit.fontawesome.com/abadd7b058.js"
          crossOrigin="anonymous"
        />
      </Head>
      <Navbar
        logo={"https://kmg-site-assets.kaycdn.com/litehost-logo-color@4x.png"}
        logoAlt={"Kreative LiteHost logo in color"}
      />
      <Wrapper bg="#FFFAE4" paddingTop="30vh" paddingBottom="10vh">
        <LineLabel color="black">WEBSITE HOSTING PRICING</LineLabel>
        <h1>The best bang for your buck web host pricing</h1>
      </Wrapper>
      <Wrapper bg="white" paddingBottom="50px" paddingTop="50px">
        <AlertBlock
          bg="#CDF6FF"
          headerColor="black"
          labelColor="black"
          label="PREPAY AND GET A DISCOUNT"
          header="Purchase any plan for at least 3 years and get 15% off your bill!​"
          align="center"
        />
      </Wrapper>
      <Wrapper bg="white" paddingBottom="100px" paddingTop="0px">
        <Container style={{ padding: "0px" }} fluid>
          <Row gutterWidth={15}>
            <Col sm={6}>
              <PricingCard
                primary={true}
                color="#F2C200"
                name="Deluxe"
                price="$17/month"
                subPrice={"$25/month when paid per month"}
                buttonText="Get Started"
                buttonTextColor="white"
                buttonRadius="3px"
                buttonPadding="15px 50px"
                buttonLink="/get-started"
                image="https://kmg-site-assets.kaycdn.com/trophy_ikon.jpg"
                imageAlt="Trophy Ikon by Kreative Fantasia Design"
                includedItems={[
                  "5 Websites",
                  "Daily Backups",
                  "Free SSL",
                  "Free CDN",
                  "Unlimited databases",
                  "Unlimited web space",
                  "Built-in caching",
                  "Ultrafast PHP",
                  "Free Wordpress updates",
                  "Kreative SiteCare included"
                ]}
                missingItems={[]}
              />
            </Col>
            <Col sm={6}>
              <PricingCard
                primary={false}
                color="#F2C200"
                name="Startup"
                price="$15/month"
                subPrice={"$20/month when paid per month"}
                buttonText="Get Started"
                buttonTextColor="#F2C200"
                buttonRadius="3px"
                buttonPadding="15px 50px"
                buttonLink="/get-started"
                image="https://kmg-site-assets.kaycdn.com/coffee_cup_ikon.jpg"
                imageAlt="Coffe Cup Ikon by Kreative Fantasia Design"
                includedItems={[
                  "2 Websites",
                  "Daily Backups",
                  "Free SSL",
                  "Free CDN",
                  "Unlimited databases",
                  "Unlimited web space",
                  "Built-in caching",
                  "Ultrafast PHP",
                  "Free Wordpress updates",
                  "Kreative SiteCare included"
                ]}
                missingItems={[]}
              />
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
                href="/contact"
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
              <video className="image image1" autoPlay loop muted playsInline>
                <source
                  src="https://kmg-site-assets.kaycdn.com/support.webm"
                  type="video/webm"
                />
                <source
                  src="https://kmg-site-assets.kaycdn.com/support.mp4"
                  type="video/mp4"
                />
              </video>
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
