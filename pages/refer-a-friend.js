import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Wrapper from "../components/Wrapper/Wrapper";
import LineLabel from "../components/LineLabel/LineLabel";
import styles from "../styles/referrals.module.css";
import { Container, Row, Col } from "react-grid-system";

const ReferAFriend = () => {
  return (
    <div>
      <Head>
        <title>Refer a Friend | Kreative Dreamflow</title>
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
        <meta name={"description"} content={""} />
      </Head>
      <Navbar scrollColor={"rgba(255,255,255,0.6)"} />
      <Wrapper bg={"#111111"} paddingTop={"250px"} paddingBottom={"250px"}>
        <div className={styles.splash_content}>
          <h1><span className={styles.color2}>Changing an industry for good can't be done alone.</span> Help spread access to quality service and fair pricing with the Dreamflow Referral Program.</h1>
        </div>
      </Wrapper>
      <Wrapper bg={"white"} paddingTop={"250px"} paddingBottom={"250px"}>
        <div className={styles.right_text}>
          <LineLabel color={"black"}>How it works</LineLabel>
          <h2>Three easy steps towards a win-win-win</h2>
        </div>
        <Container style={{ padding: "0px" }} fluid>
          <Row nogutter className={styles.step_content}>
            <Col md={4}>
              <img
                src={""}
                alt={""}
                className={styles.step_image}
              />
              <p>Find other small businesses in need of growing their organization online and show them how Kreative Dreamflow can offer it's support and services.</p>
            </Col>
          </Row>
          <Row nogutter className={styles.step_content}>
            <Col md={4}></Col>
            <Col md={4}>
              <img
                src={""}
                alt={""}
                className={styles.step_image}
              />
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            </Col>
          </Row>
          <Row nogutter>
            <Col md={8}></Col>
            <Col md={4}>
              <img
                src={""}
                alt={""}
                className={styles.step_image}
              />
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default ReferAFriend;