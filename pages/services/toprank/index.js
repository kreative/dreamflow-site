import Head from "next/head";
import Wrapper from "../../../components/Wrapper/Wrapper";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import Button from "../../../components/Button/Button";
import LineLabel from "../../../components/LineLabel/LineLabel";
import IconBox from "../../../components/IconBox/IconBox";
import Wave from "../../../components/Wave/Wave";
import { Container, Row, Col } from "react-grid-system";
import {
  faComment,
  faLaptopCode,
  faMedal,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../../../styles/toprank/home.module.css";

export default function TopRank() {
  return (
    <div>
      <Head>
        <title>TopRank | Kreative Dreamflow</title>
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
        <link rel="manifest" href="/favicons/general/site.webmanifest"></link>
        <script
          type="text/javascript"
          src="https://kit.fontawesome.com/abadd7b058.js"
          crossOrigin="anonymous"
        />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Navbar
        logo={"https://kmg-site-assets.kaycdn.com/toprank-logo-new.png"}
        logoAlt={"Kreative TopRank logo in color"}
      />
      <div className="splash" style={{ backgroundColor: "#E5FFF0" }}>
        <Wrapper bg="rgba(0,0,0,0)" paddingTop="300px" paddingBottom="100px">
          <LineLabel color="black">KREATIVE TOPRANK</LineLabel>
          <h1>Achieve higher search engine rankings with The Kreative Dreamflow Partner Experience&trade;</h1>
        </Wrapper>
      </div>
      <Wrapper bg="white" paddingBottom="150px" paddingTop="150px">
        <Container style={{ padding: "0px" }} fluid>
          <Row gutterWidth={0}>
            <Col md={6}>
              <video
                className={styles.why_image}
                autoPlay
                loop
                muted
                playsInline
              >
                <source
                  src="https://kmg-site-assets.kaycdn.com/searching.webm"
                  type="video/webm"
                />
                <source
                  src="https://kmg-site-assets.kaycdn.com/searching.mp4"
                  type="video/mp4"
                />
              </video>
            </Col>
            <Col
              md={6}
              style={{
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <LineLabel color="blac">WHY SEO?</LineLabel>
              <h2>
                Build authority and make it easier for your future customers to
                find your
              </h2>
              <p>
                Search Engine Optimization, or SEO, is the practice of optimzing
                a website to rank higher in search engines like Google. By
                getting to the top of the first page, you gain traffic to your
                website without having to spend money on services like Google
                Ads. By using TopRank, you can potentially save thousands in
                search engine advertising costs.
              </p>
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Wave color="white">
        <path
          className="wave-fill"
          d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
        c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
        c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
        />
      </Wave>
      <Wrapper bg="#7FE8AB" paddingBottom="150px" paddingTop="250px">
        <div className="process-header">
          <LineLabel color="black">THE TOPRANK PROCESS</LineLabel>
          <h2>We take care of everything</h2>
        </div>
        <Container style={{ padding: "0px" }} fluid>
          <Row gutterWidth={100}>
            <Col md={4} className={styles.iconbox}>
              <IconBox
                icon={faComment}
                iconColor="black"
                header="Strategy Session"
                text={`Our team works with you to figure out what keywords to rank for, 
                      what locations to target, and how to get the most value out of TopRank`}
                align="left"
                iconAlign="flex-start"
                size="3x"
              />
            </Col>
            <Col md={4} className={styles.iconbox}>
              <IconBox
                icon={faLaptopCode}
                iconColor="black"
                header="Site Optimization"
                text={`The TopRank team then works to optimize your website,
                      keeping you in the loop every step`}
                align="left"
                iconAlign="flex-start"
                size="3x"
              />
            </Col>
            <Col md={4} className={styles.iconbox}>
              <IconBox
                icon={faMedal}
                iconColor="black"
                header="Ranking"
                text={`After a few weeks to a few months of work from the TopRank team,
                      you'll start seeing your website rankings go up and new traffic
                      coming in!`}
                align="left"
                iconAlign="flex-start"
                size="3x"
              />
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Wave color="#7FE8AB">
        <path
          className="wave-fill"
          d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
        c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
        c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
        />
      </Wave>
      <Wrapper bg="white" paddingTop="250px" paddingBottom="150px">
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
              <LineLabel color="black">TAKE ACTION</LineLabel>
              <h2>Don't waste more money paying for traffic</h2>
              <div style={{ marginTop: "35px" }}>
                <Button
                  href="/get-started"
                  fill="black"
                  textColor="white"
                  radius="3px"
                  border="1px solid black"
                  padding="15px 50px"
                  raised={true}
                  grow={true}
                >
                  Get started with TopRank
                </Button>
              </div>
            </Col>
            <Col sm={6} className={styles.cta_image_wrapper}>
              <video
                className={styles.cta_image}
                autoPlay
                loop
                muted
                playsInline
              >
                <source
                  src="https://kmg-site-assets.kaycdn.com/rocket-launch.webm"
                  type="video/webm"
                />
                <source
                  src="https://kmg-site-assets.kaycdn.com/rocket-launch.mp4"
                  type="video/mp4"
                />
              </video>
            </Col>
          </Row>
        </Container>
      </Wrapper>

      <Footer />
    </div>
  );
}
