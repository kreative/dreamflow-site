import Head from "next/head";
import Wrapper from "../../components/Wrapper/Wrapper";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import LineLabel from "../../components/LineLabel/LineLabel";
import IconBox from "../../components/IconBox/IconBox";
import Wave from "../../components/Wave/Wave";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Container, Row, Col } from "react-grid-system";
import { faPencilAlt, faEnvelopeOpenText, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/kopy/home.module.css";

export default function Kopy() {
  return (
    <div>
      <Head>
        <title>Kopy | Kreative Dreamflow</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/general/apple-touch-icon.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/general/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/general/favicon-16x16.png"
        ></link>
        <link rel="manifest" href="/favicons/general/site.webmanifest"></link>
        <script
          type="text/javascript"
          src="https://kit.fontawesome.com/abadd7b058.js"
          crossorigin="anonymous"
        ></script>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Navbar />
      <div className="splash" style={{ backgroundColor: "#D1E8FF" }}>
        <Wrapper bg="rgba(0,0,0,0)" paddingTop="300px" paddingBottom="100px">
          <Container style={{ padding: "0px" }} fluid>
            <Row gutterWidth={0}>
              <Col md={9}>
                <LineLabel color="black">WELCOME TO Kopy</LineLabel>
                <h1>Affordable copywriting you can count on</h1>
              </Col>
              <Col sm={3}></Col>
            </Row>
          </Container>
        </Wrapper>
      </div>
      <Wrapper bg="white" paddingBottom="150px" paddingTop="150px">
        <Container style={{ padding: "0px" }} fluid>
          <Row gutterWidth={0}>
            <Col sm={6}>
              <img
                className={styles.why_image}
                src="https://kmg-site-assets.kaycdn.com/pondering.gif"
                alt="GIF of someone pondering about what to write"
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
              <LineLabel color="blac">WHY KOPY?</LineLabel>
              <h2>
                Stop wasting your time trying to come up with the perfect word.
                Let Kopy do that for you.
              </h2>
              <p>
                Get back to doing what you do best - providing fantasic products
                and services to your customers. When you use Kopy, you can say
                goodbye to countless hours staring at a blank screen, and say
                hello to compelling copywriting that sells.
              </p>
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <div className="products-section">
        <Wrapper bg="rgba(0,0,0,0)" paddingTop="150px" paddingBottom="150px">
          <div
            style={{
              textAlign: "center",
            }}
          >
            <h2>Kopy Products</h2>
          </div>
          <Container style={{ padding: "0px" }} fluid>
            <Row gutterWidth={25}>
              <Col md={6} className={styles.kopy_product}>
                <ProductCard
                  bg="white"
                  border="1.5px solid #E3E3E3"
                  header="Kopy Blog Posts"
                  text={`Extensive blog post writing service for whatever topic your heart desires. 
                        Blog posts come with revisions and are professionally written by the Kopy team.`}
                  button={
                    <Button
                      fill="#1C5592"
                      textColor="white"
                      hoverColor="#338EEE"
                      radius="3px"
                      border="1px solid #1C5592"
                      hoverBorder="1px solid #338EEE"
                      padding="20px 50px"
                      raised={false}
                      grow={false}
                      width="100%"
                    >
                      Get started with Blog Posts
                    </Button>
                  }
                />
              </Col>
              <Col md={6} className={styles.kopy_product}>
                <ProductCard
                  bg="white"
                  border="1.5px solid #E3E3E3"
                  header="Kopy Webpages"
                  text={`Transform your website into a powerful sales tool,
                        overnight with Kopy Webpages. Our team uses proven sales 
                        copy techniques to enhance your copy. Kopy Webpages is
                        perfect for landing pages and sales oriented business
                        pages.`}
                  button={
                    <Button
                      fill="#1C5592"
                      textColor="white"
                      hoverColor="#338EEE"
                      radius="3px"
                      border="1px solid #1C5592"
                      hoverBorder="1px solid #338EEE"
                      padding="20px 50px"
                      raised={false}
                      grow={false}
                      width="100%"
                    >
                      Get started with Webpages
                    </Button>
                  }
                />
              </Col>
            </Row>
          </Container>
        </Wrapper>
      </div>
      <Wave color="white">
        <path
          className="wave-fill"
          d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
        c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
        c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
        ></path>
      </Wave>
      <Wrapper bg="#338EEE" paddingBottom="100px" paddingTop="200px">
        <div className="process-header">
          <LineLabel color="white">THE KOPY PROCESS</LineLabel>
          <h2 style={{ color: "white" }}>
            Kopy takes care of everything. You just tell us what to write.
          </h2>
        </div>
        <Container style={{ padding: "0px" }} fluid>
          <Row gutterWidth={100}>
            <Col md={4} className={styles.iconbox}>
              <IconBox
                icon={faEnvelopeOpenText}
                iconColor="white"
                headerColor="white"
                textColor="white"
                header="You send an inquiry outlining what you need from Kopy"
                align="left"
                iconAlign="flex-start"
                size="3x"
              />
            </Col>
            <Col md={4} className={styles.iconbox}>
              <IconBox
                icon={faPencilAlt}
                iconColor="white"
                header="Our team goes hard at work to write your blog post or webpage"
                headerColor="white"
                textColor="white"
                align="left"
                iconAlign="flex-start"
                size="3x"
              />
            </Col>
            <Col md={4} className={styles.iconbox}>
              <IconBox
                icon={faEnvelope}
                iconColor="white"
                headerColor="white"
                textColor="white"
                header="You get the finished product in your inbox"
                align="left"
                iconAlign="flex-start"
                size="3x"
              />
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Wave color="#338EEE">
        <path
          className="wave-fill"
          d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
        c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
        c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
        ></path>
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
              <h2>Up your copywriting game today with Kopy</h2>
              <div style={{ marginTop: "35px" }}>
                <Button
                  href="/kopy/contact"
                  fill="black"
                  textColor="white"
                  radius="3px"
                  border="1px solid black"
                  padding="15px 50px"
                  raised={true}
                  grow={true}
                >
                  Get started with Kopy
                </Button>
              </div>
            </Col>
            <Col sm={6} style={{ textAlign: "right" }}>
              <img
                className={styles.cta_image}
                src="https://kmg-site-assets.kaycdn.com/piling-up.gif"
                alt="GIF of books and writing piling up"
              />
            </Col>
          </Row>
        </Container>
      </Wrapper>

      <Footer />
    </div>
  );
}
