import Head from "next/head";
import Wrapper from "../../../components/Wrapper/Wrapper";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import Button from "../../../components/Button/Button";
import LineLabel from "../../../components/LineLabel/LineLabel";
import { Container, Row, Col } from "react-grid-system";
import styles from "../../../styles/litehost/home.module.css";

export default function Litehost() {
  return (
    <div>
      <Head>
        <title>LiteHost | Kreative Dreamflow</title>
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
        <meta name={"description"} content={"Keep your business within reach of your customers with Kreative LiteHost, our worry free, managed hosting plans for your digital presence with incredible speeds."} />
      </Head>
      <Navbar
        logo={"https://kmg-site-assets.kaycdn.com/litehost-logo-color@4x.png"}
        logoAlt={"Kreative LiteHost logo in color"}
      />
      <Wrapper bg="#FFEFAE" paddingTop="20vh" paddingBottom="10vh">
        <Container style={{ padding: "0px" }}>
          <Row gutterWidth={50}>
            <Col
              md={6}
              style={{
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <LineLabel color="black">KREATIVE LITEHOST</LineLabel>
              <h1>Worry free, managed hosting plans for your digital presence with lightning speeds.</h1>
              <p>By using Kreative LiteHost as your partner for website, landing page, and database hosting, you won't have to worry about whether your website is online or not, whether your website is loading fast enough or not, or even if everything that goes on in the background is working or not. Let us take care of the hosting, and you can go back to doing what you do best: serving your customers.</p>
            </Col>
            <Col
              md={6}
              style={{
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img
                className={styles.image1}
                src={"https://kmg-site-assets.kaycdn.com/lightning-doggo.gif"}
                alt={"GIF of a dog blasting lightning from it's eyes"}
              />
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Wrapper bg="white" paddingBottom="150px" paddingTop="200px">
        <Container style={{padding: "0px"}}>
          <Row gutterWidth={50}>
            <Col md={6}>
              <LineLabel color="black">THE PROBLEM</LineLabel>
              <h2>Hosting your own website, landing pages, or database can be a real pain​</h2>
              <p>With marketing campaigns moving online and more and more customers shopping online, your business can't afford any downtime. If your website isn't on 24/7, it could be costing you real money.</p>
              <Button
                href="/get-started"
                fill="#F2C200"
                textColor="white"
                radius="3px"
                border="1px solid #F2C200"
                padding="15px 50px"
                raised={false}
                grow={true}
              >
                Get started
              </Button>
            </Col>
            <Col md={6}>
              <img
                className={styles.image1}
                src={"https://kmg-site-assets.kaycdn.com/silly-doodles/22.png"}
                alt={"Silly doodle of a person fixing something"}
              />
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Wrapper bg="#FFEFAE" paddingTop="150px" paddingBottom="150px">
        <Container style={{ padding: "0px" }} fluid>
          <Row gutterWidth={0}>
            <Col
              lg={8}
              style={{
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div className={styles.solution_content}>
                <LineLabel color="black">THE SOLUTION</LineLabel>
                <h2>
                  LiteHost gives you the flexibility to relax, and rest easy knowing your website is in good hands.
                </h2>
                <p>
                  We provide mission critical features at unbeatable prices.
                </p>
                <Button
                  href="/get-started"
                  fill="white"
                  textColor="black"
                  radius="3px"
                  border="1px solid white"
                  padding="15px 50px"
                  raised={false}
                  grow={true}
                >
                  Get started
                </Button>
              </div>
            </Col>
            <Col
              lg={4}
              style={{
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div className={styles.solution_image_wrapper}>
                <img
                  className={styles.image}
                  src={"https://kmg-site-assets.kaycdn.com/peace-and-quiet.gif"}
                  alt={"GIF of a river and some peaceful trees"}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Wrapper bg="white" paddingBottom="250px" paddingTop="250px">
        <div style={{ textAlign: "center" }}>
          <LineLabel color="black">FULLY FEATURED</LineLabel>
          <h2>All the mission critical features you need to succeed online</h2>
          <div className={styles.squeezed_container}>
            <Container style={{ padding: "0px" }}>
              <Row gutterWidth={25}>
                <Col xs={6} sm={4} lg={2}>
                  <img
                    className={styles.feature_image}
                    src="https://kmg-site-assets.kaycdn.com/litehost-loop-ikon.png"
                    alt="Kreative LiteHost Loop Ikon"
                  />
                  <p className={styles.feature_text}>
                    Wordpress AutoUpdates
                  </p>
                </Col>
                <Col xs={6} sm={4} lg={2}>
                  <img
                    className={styles.feature_image}
                    src="https://kmg-site-assets.kaycdn.com/litehost-security-ikon.png"
                    alt="Kreative LiteHost Secutiry Ikon"
                  />
                  <p className={styles.feature_text}>Free SSL</p>
                </Col>
                <Col xs={6} sm={4} lg={2}>
                  <img
                    className={styles.feature_image}
                    src="https://kmg-site-assets.kaycdn.com/litehost-web-ikon.png"
                    alt="Kreative LiteHost Web Ikon"
                  />
                  <p className={styles.feature_text}>Free CDN</p>
                </Col>
                <Col xs={6} sm={4} lg={2}>
                  <img
                    className={styles.feature_image}
                    src="https://kmg-site-assets.kaycdn.com/litehost-cog-ikon.png"
                    alt="Kreative LiteHost Cog Ikon"
                  />
                  <p className={styles.feature_text}>Built in caching</p>
                </Col>
                <Col xs={6} sm={4} lg={2}>
                  <img
                    className={styles.feature_image}
                    src="https://kmg-site-assets.kaycdn.com/litehost-databases-ikon.png"
                    alt="Kreative LiteHost Databases Ikon"
                  />
                  <p className={styles.feature_text}>Unlimited Databases</p>
                </Col>
                <Col xs={6} sm={4} lg={2}>
                  <img
                    className={styles.feature_image}
                    src="https://kmg-site-assets.kaycdn.com/litehost-folder-ikon.png"
                    alt="Kreative LiteHost Folder Ikon"
                  />
                  <p className={styles.feature_text}>Daily Backups</p>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </Wrapper>
      <Wrapper bg={"#FFFAE4"} paddingBottom="150px" paddingTop="250px">
        <LineLabel color="black">WORK WITH LITEHOST</LineLabel>
        <h2 style={{fontWeight: "bold", paddingBottom: "25px"}}>
          It's simple, easy, and free to get started
        </h2>
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
          Get Started
        </Button>
      </Wrapper>
      <Footer />
    </div>
  );
}
