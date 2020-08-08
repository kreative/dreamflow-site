import Head from "next/head";
import Wrapper from "../../../components/Wrapper/Wrapper";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import LineLabel from "../../../components/LineLabel/LineLabel";
import Button from "../../../components/Button/Button";
import {Container, Row, Col} from "react-grid-system";
import styles from "../../../styles/channels/home.module.css";

export default function ChannelsHome() {
  return (
    <div>
      <Head>
        <title>Channels | Kreative Dreamflow</title>
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
        <meta name={"description"} content={"Make your business omnipresent with Kreative Channels, our full service marketing services to put your brand in front of consumers, wherever they are."} />
      </Head>
      <Navbar
        logo={"https://kmg-site-assets.kaycdn.com/kreative-channels-logo.png"}
        logoAlt={"Kreative Channels logo in color"}
      />
      <Wrapper bg="#D1E1F1" paddingBottom="100px" paddingTop="200px">
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
              <LineLabel color="black">KREATIVE CHANNELS</LineLabel>
              <h1 style={{paddingBottom: "20px"}}>
                Your customers are everywhere, and you should be too.
              </h1>
              <p>
                Kreative Channels is here to help. With our full service marketing services to put your brand in front
                of consumers, wherever they are.
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
                src={"https://kmg-site-assets.kaycdn.com/earth.gif"}
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
              <h2>It's not enough to
                <span style={{fontStyle: "italic"}}> just </span>
                have a website​</h2>
            </Col>
            <Col md={6}>
              <p className={styles.padded_text}>
                As more and more digital mediums grow, like podcasts, YouTube, social media, blogs, news publications, etc, so does the amount of work needed to keep up and stay ahead of the competition. We understand how difficult it can be to keep track of trends, conduct user and market research, and create effective content for every single platform.
                <br/>
                <br/>
                But with Kreative Channels by your side, you gain a full service team by your side to take care of the hard work for you. We work directly with your leadership team to identify the most productive and profitable marketing channels and layout campaigns to help you find the perfect custoemrs on them.
              </p>
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Wrapper bg="#AFECFF" paddingTop="150px" paddingBottom="150px">
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
                <LineLabel color="black">BE EVERYWHERE</LineLabel>
                <h2>
                  Omnipresence doesn't have to be a burden on your business anymore
                </h2>
                <p>
                  Kreative Channels make it easy to reach your customers, wherever they are. And with our unique delivery model, The Kreative Dreamflow Partner Experience&trade;, working with Kreative Channels is quick, focused, and a net positive experience.
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
                  src={"https://kmg-site-assets.kaycdn.com/easy-button-cropped.gif"}
                  className={styles.image}
                  alt={"Easy button being pressed GIF"}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Wrapper bg="white" paddingTop="250px" paddingBottom="150px">
        <Container style={{ padding:"0px" }}>
          <Row nogutter>
            <Col sm={6}>
              <img
                src={"https://kmg-site-assets.kaycdn.com/go-team.gif"}
                className={styles.image2}
                alt={"Awesome Go Team GIF"}
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
              <LineLabel color="black">STAY IN THE LOOP</LineLabel>
              <h2>Your team and vision are a part of every decision</h2>
              <p>
                We stay true to The Kreative Dreamflow Partner Experience&trade; by keeping your key decision makers informed about campaigns, channels, new research and more. With Kreative Channels, it's like just like having an in-house marketing team, but without the heavy costs.
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
          </Row>
        </Container>
      </Wrapper>
      <Wrapper bg="#0075FF" paddingBottom="200px" paddingTop="200px">
        <div style={{color: "white", textAlign: "center"}}>
          <h1 className={styles.testimonial_text}>
            "Since Kreative Dreamflow did a fantastic job with our website, we decided to work with their Channels service and extend our reach across as many platforms as we can!"
          </h1>
          <p className={styles.testimonial_customer}>
            Pankaj Gupta, Eco Abode
          </p>
        </div>
      </Wrapper>
      <Wrapper bg="white" paddingBottom="150px" paddingTop="250px">
        <LineLabel color="black">WORK WITH CHANNELS</LineLabel>
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
