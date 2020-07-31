import Head from "next/head";
import Wrapper from "../../../components/Wrapper/Wrapper";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import LineLabel from "../../../components/LineLabel/LineLabel";
import Button from "../../../components/Button/Button";
import {Container, Row, Col} from "react-grid-system";
import styles from "../../../styles/sitecare/home.module.css";

export default function SiteCareHome() {
  return (
    <div>
      <Head>
        <title>SiteCare | Kreative Dreamflow</title>
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
        <meta content="width=device-width, initial-scale=1" name="viewport"/>
      </Head>
      <Navbar
        logo={"https://kmg-site-assets.kaycdn.com/sitecare-logo-color@4x.png"}
        logoAlt={"Kreative SiteCare logo in color"}
      />
      <Wrapper bg="#FFBDF9" paddingBottom="100px" paddingTop="200px">
        <Container style={{padding: "0px"}}>
          <Row gutterWidth={0}>
            <Col
              md={6}
              style={{
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <LineLabel color="black">KREATIVE SITECARE</LineLabel>
              <h1 style={{paddingBottom: "20px"}}>
                You've got a business to run. Let us worry about your website maintenance.
              </h1>
              <p>
                With Kreative SiteCare's site maintenance plans by your side, you can get back to what's important:
                building meaningful experiences for your customers.
              </p>
              <Button
                href="/get-started"
                fill="black"
                textColor="white"
                radius="3px"
                border="1px solid black"
                padding="15px 50px"
                raised={false}
                grow={true}
              >
                Get Started
              </Button>
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
                src={"https://kmg-site-assets.kaycdn.com/popeye-repairs.gif"}
                className={styles.image1}
                alt={"Earth rotating GIF"}
              />
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Wrapper bg="white" paddingBottom="250px" paddingTop="250px">
        <Container style={{padding: "0px"}}>
          <LineLabel color="black">THE PROBLEM</LineLabel>
          <Row gutterWidth={0} style={{marginTop: "20px"}}>
            <Col md={6}>
              <h2>
                Maintaining your website is imporant, but takes up too much valuable time
              ​</h2>
            </Col>
            <Col md={6}>
              <p className={styles.padded_text}>
                Almost every website needs fixing, upgrades, content changes, or just support. Without any of these,
                your customers maybe forced to use an old, unsecure, and difficult website hurting your brand and your
                wallet. And trying to take care of your website on your own can take up time that can be better spent
                on your business and customers.
                <br/>
                <br/>
                However, with Kreative SiteCare, all of those worries disappear. You can a partner you can trust, that
                will take care of your website, and in turn take care of your customers. Don't lose another customer or
                sale because of a problem on your website!
              </p>
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Wrapper bg="#FFA3A3" paddingTop="150px" paddingBottom="150px">
        <Container style={{padding: "0px"}} fluid>
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
                <LineLabel color="white">BE EVERYWHERE</LineLabel>
                <h2>
                  SiteCare comes with each Pageflow website by default.
                </h2>
                <p>
                  SiteCare makes it effortless to keep your website in tip-top shape and each website project through
                  our Kreative Pageflow service comes with SiteCare hours by default, with the flexibility to add more
                  in the future. Nobody else makes site maintenance this easy.
                </p>
                <Button
                  href="/pageflow/pricing"
                  fill="white"
                  textColor="black"
                  radius="3px"
                  border="1px solid white"
                  padding="15px 50px"
                  raised={false}
                  grow={true}
                >
                  Get Started
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
                  src={"https://kmg-site-assets.kaycdn.com/painless.gif"}
                  className={styles.image}
                  alt={"Easy button being pressed GIF"}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Wrapper>

      <Wrapper bg="white" paddingBottom="150px" paddingTop="250px">
        <LineLabel color="black">GET SITECARE</LineLabel>
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
      <Footer/>
    </div>
  );
}
