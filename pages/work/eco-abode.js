import Head from "next/head";
import Wrapper from "../../components/Wrapper/Wrapper";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import LineLabel from "../../components/LineLabel/LineLabel";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import { Container, Row, Col } from "react-grid-system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/work/eco-abode.module.css";

const EcoAbodeCaseStudy = () => {
  return (
    <div>
      <Head>
        <title>Eco Abode | Work | Kreative Dreamflow</title>
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
      <Wrapper bg="white" paddingTop="200px" paddingBottom="100px">
        <div className={styles.hero}>
          <div>
            <LineLabel color="black">Eco Abode</LineLabel>
            <h1 style={{paddingBottom:"100px"}}>
              A rental property management company creating the simplest
              experience for new home owners
            </h1>
            <FontAwesomeIcon icon={faArrowDown} size="md" />
          </div>
        </div>
      </Wrapper>
      <ParallaxProvider>
        <ParallaxBanner
          layers={[
            {
              image:
                "https://images.unsplash.com/photo-1592410811000-80b57d6f18ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1717&q=80",
              amount: 0.7,
            },
          ]}
          style={{
            height: "700px",
          }}
        >
          <h2>Hello</h2>
        </ParallaxBanner>
      </ParallaxProvider>
      <Wrapper bg="white" paddingTop="250px" paddingBottom="250px">
        <Container style={{ padding: "0px" }} fluid>
          <Row gutterWidth={20}>
            <Col sm={12} md={4}>
              <h2 style={{paddingBottom:"50px"}}>The Challenge</h2>
            </Col>
            <Col sm={12} md={8}>
              <p className={styles.larger_p} style={{paddingBottom:"20px"}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <a className={styles.link} href="https://ecoabodellc.com">View Project</a>
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Wrapper bg="#EEF8F7" paddingTop="200px" paddingBottom="200px">
        <div className={styles.project_video}></div>
      </Wrapper>
      <Wrapper bg="" paddingTop="" paddingBottom="">
        <Container style={{padding:"0px"}} fluid>
          <Row gutterWidth={0}>
            <Col sm={6}></Col>
            <Col sm={6}></Col>
          </Row>
        </Container>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default EcoAbodeCaseStudy;
