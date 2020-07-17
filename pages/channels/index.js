import Head from "next/head";
import Wrapper from "../../components/Wrapper/Wrapper";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import LineLabel from "../../components/LineLabel/LineLabel";
import Button from "../../components/Button/Button";
import Wave from "../../components/Wave/Wave";
import {Container, Row, Col} from "react-grid-system";
import styles from "../../styles/pageflow/home.module.css";

export default function ChannelsHome() {
  return (
    <div>
      <Head>
        <title>Channels | Kreative Dreamflow</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/pageflow/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/pageflow/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/pageflow/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/pageflow/site.webmanifest"/>
        <script
          type="text/javascript"
          src="https://kit.fontawesome.com/abadd7b058.js"
          crossOrigin="anonymous"
        />
        <meta content="width=device-width, initial-scale=1" name="viewport"/>
      </Head>
      <Navbar/>
      <Wrapper bg="#3BA1FF" paddingBottom="100px" paddingTop="200px">
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
      <Wrapper bg="white" paddingBottom="150px" paddingTop="150px">
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
        <div>
          <LineLabel color="black">HOW IT WORKS</LineLabel>
          <h2>You're a part of every step, without having to do the work</h2>
          <p>
            We’ve perfected the Pageflow Design and Development Process
            (DevDesign) to only require a few hours of your time each week, so
            you can get back to running your business.
          </p>
        </div>
      </Wrapper>
      <Wave color="white">
        <path
          className="wave-fill"
          d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
        c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
        c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
        />
      </Wave>
      <Wrapper bg="#6135DE" paddingBottom="150px" paddingTop="250px">
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
              <video className={styles.image2} autoPlay loop muted playsInline>
                <source
                  src="https://kmg-site-assets.kaycdn.com/new-plant-growing.webm"
                  type="video/webm"
                />
                <source
                  src="https://kmg-site-assets.kaycdn.com/new-plant-growing.mp4"
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
              <div style={{color: "white"}}>
                <h1 className={styles.testimonial_text}>
                  "Even though we worked with their Chicago team remotely, they
                  never kept us out of the loop and always responded when we
                  reached out. They turned our website cost into an investment."
                </h1>
                <p className={styles.testimonial_customer}>
                  Byron Stanger, Founder at Phoenix Media
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Wave color="#6135DE">
        <path
          d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
        c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
        c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
        />
      </Wave>
      <Wrapper bg="white" paddingBottom="150px" paddingTop="250px">
        <LineLabel color="black">WORK WITH PAGEFLOW</LineLabel>
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
