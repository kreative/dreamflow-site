import Head from "next/head";
import Wrapper from "../../components/Wrapper/Wrapper";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import LineLabel from "../../components/LineLabel/LineLabel";
import IconBox from "../../components/IconBox/IconBox";
import Wave from "../../components/Wave/Wave";
import { Container, Row, Col } from "react-grid-system";
import { faPencilRuler } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/toprank/home.module.css";

export default function TopRank() {
  return (
    <div>
      <Head>
        <title>Get in touch | TopRank | Dreamflow</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="text/javascript"
          src="https://kit.fontawesome.com/abadd7b058.js"
          crossorigin="anonymous"
        ></script>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>

      <div className="splash" style={{ backgroundColor: "#E5FFF0" }}>
        <Wrapper bg="rgba(0,0,0,0)" paddingTop="300px" paddingBottom="100px">
          <Container style={{ padding: "0px" }} fluid>
            <Row gutterWidth={0}>
              <Col
                md={9}
              >
                <LineLabel color="black">WELCOME TO TOPRANK</LineLabel>
                <h1>
                  Some sort of headline that mentions our amazing SEO product
                  that is TopRank
                </h1>
              </Col>
            </Row>
          </Container>
        </Wrapper>
      </div>
      <Wrapper bg="white" paddingBottom="150px" paddingTop="150px">
        <Container style={{ padding: "0px" }} fluid>
          <Row gutterWidth={0}>
            <Col md={6}>
              <img
                className={styles.why_image}
                src="https://kmg-site-assets.kaycdn.com/searching.gif"
                alt="GIF of someone looking around and searching"
              />
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
                A statement that inspires business owners to add SEO to their
                strategy
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
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
        ></path>
      </Wave>
        <Wrapper bg="#7FE8AB" paddingBottom="100px" paddingTop="200px">
          <div className="process-header">
            <LineLabel color="black">THE TOPRANK PROCESS</LineLabel>
            <h2>Headline talking about our superior and effecient process.</h2>
          </div>
            <Container style={{ padding: "0px" }} fluid>
              <Row gutterWidth={100}>
                <Col md={4} className={styles.iconbox}>
                  <IconBox
                    icon={faPencilRuler}
                    iconColor="black"
                    header="First Step"
                    text="Explanation about the first step that makes sense to the reader."
                    align="left"
                    iconAlign="flex-start"
                    size="3x"
                  />
                </Col>
                <Col md={4} className={styles.iconbox}>
                  <IconBox
                    icon={faPencilRuler}
                    iconColor="black"
                    header="First Step"
                    text="Explanation about the first step that makes sense to the reader."
                    align="left"
                    iconAlign="flex-start"
                    size="3x"
                  />
                </Col>
                <Col md={4} className={styles.iconbox}>
                  <IconBox
                    icon={faPencilRuler}
                    iconColor="black"
                    header="First Step"
                    text="Explanation about the first step that makes sense to the reader."
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
              <LineLabel color="black">GET STARTED</LineLabel>
              <h2>Some sort of inspiring call to action</h2>
              <div style={{ marginTop: "35px" }}>
                <Button
                  href="/toprank/contact"
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
              <img
                className={styles.cta_image}
                src="https://kmg-site-assets.kaycdn.com/rocket-launch.gif"
                alt="GIF of a rocket ship launching into outer space"
              />
            </Col>
          </Row>
        </Container>
      </Wrapper>

      <Footer />
    </div>
  );
}
