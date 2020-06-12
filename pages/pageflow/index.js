import Head from "next/head";
import Wrapper from "../../components/Wrapper/Wrapper";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import LineLabel from "../../components/LineLabel/LineLabel";
import Button from "../../components/Button/Button";
import Wave from "../../components/Wave/Wave";
import IconBox from "../../components/IconBox/IconBox";
import { Container, Row, Col } from "react-grid-system";
import {
  faComments,
  faPencilRuler,
  faSpaceShuttle,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/pageflow/home.module.css";

export default function PageflowHome() {
  return (
    <div>
      <Head>
        <title>Pageflow | Kreative Dreamflow</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/pageflow/apple-touch-icon.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/pageflow/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/pageflow/favicon-16x16.png"
        ></link>
        <link rel="manifest" href="/favicons/pageflow/site.webmanifest"></link>
        <script
          type="text/javascript"
          src="https://kit.fontawesome.com/abadd7b058.js"
          crossOrigin="anonymous"
        ></script>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Navbar />
      <Wrapper bg="#C8B5FD" paddingBottom="100px" paddingTop="200px">
        <Container style={{ padding: "0px" }}>
          <Row gutterWidth={0}>
            <Col
              md={6}
              style={{
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <LineLabel color="black">PAGEFLOW</LineLabel>
              <h1 style={{ paddingBottom: "20px" }}>
                Customers aren't just going to fall into your lap
              </h1>
              <p>
                Having a website from 5 years ago isn’t going to cut it. In
                2020, you’re going to need a website with a strategy and design
                that finds you new customers and keep them coming back. With
                Pageflow, we make your website into a sales-making machine,
                bringing you leads 24/7.
              </p>
              <Button
                href="/pageflow/pricing"
                fill="black"
                textColor="white"
                radius="3px"
                border="1px solid black"
                padding="15px 50px"
                raised={true}
                grow={true}
              >
                View Pricing
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
              <video className={styles.image1} autoPlay loop muted playsInline>
                <source
                  src="https://kmg-site-assets.kaycdn.com/new-fall.webm"
                  type="video/webm"
                />
                <source
                  src="https://kmg-site-assets.kaycdn.com/new-fall.mp4"
                  type="video/mp4"
                />
              </video>
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Wrapper bg="white" paddingBottom="150px" paddingTop="150px">
        <Container style={{ padding: "0px" }}>
          <LineLabel color="black">THE PROBLEM</LineLabel>
          <Row gutterWidth={0} style={{ marginTop: "20px" }}>
            <Col md={6}>
              <h2>Every other solution wastes your time - and money​</h2>
            </Col>
            <Col md={6}>
              <p className={styles.padded_text}>
                We get it. Agencies, freelancers, and even DIY solutions like
                Wix or Squarespace suck. Either it's too expensive, or too slow,
                or too unreliable. Even worse, you go with one of these
                providers, and in a year or two, have to go back, because they
                sold you something that looked fancy, but didn't do the job of
                getting your business in front of new customers.
                <br />
                <br />
                Our company decided to open up Pageflow because we dealt with
                the same thing: an over-promising, under-delivering agency. No
                part of their strategy included "sales" or "lead-generation", it
                was always about making things look pretty or "modern" or trying
                to upsell us on an extra animation we didn't need.
              </p>
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Wrapper bg="#E7DFFF" paddingTop="150px" paddingBottom="150px">
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
                  Pageflow delivers a website that sells and looks better than
                  your compeition​
                </h2>
                <p>
                  We combine the best of marketing and sales to help you grow
                  your business online.
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
                  View Pricing
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
                <video className={styles.image} autoPlay loop muted playsInline>
                  <source
                    src="https://kmg-site-assets.kaycdn.com/new-heart-eyes-daffy.webm"
                    type="video/webm"
                  />
                  <source
                    src="https://kmg-site-assets.kaycdn.com/new-heart-eyes-daffy.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Wrapper bg="" paddingBottom="150px" paddingTop="150px">
        <div style={{ textAlign: "center" }}>
          <LineLabel color="black">THE COMPLETE PACKAGE</LineLabel>
          <h2>Every single thing you need for online success</h2>
          <div className={styles.squeezed_container}>
            <Container style={{ padding: "0px" }}>
              <Row gutterWidth={25}>
                <Col xs={6} sm={4} lg={2}>
                  <img
                    className={styles.feature_image}
                    src="https://kmg-site-assets.kaycdn.com/pageflow-analytics-ikon@3x.png"
                    alt="Pageflow Analytics Ikon"
                  />
                  <p className={styles.feature_text}>
                    Analytics & Data Tracking
                  </p>
                </Col>
                <Col xs={6} sm={4} lg={2}>
                  <img
                    className={styles.feature_image}
                    src="https://kmg-site-assets.kaycdn.com/pageflow-medal-ikon@3x.png"
                    alt="Kreative Pageflow Medal Ikon"
                  />
                  <p className={styles.feature_text}>Dedicated Success Team</p>
                </Col>
                <Col xs={6} sm={4} lg={2}>
                  <img
                    className={styles.feature_image}
                    src="https://kmg-site-assets.kaycdn.com/pageflow-newspaper-ikon@3x.png"
                    alt="Kreative Pageflow Newspaper Ikon"
                  />
                  <p className={styles.feature_text}>Blog & CMS</p>
                </Col>
                <Col xs={6} sm={4} lg={2}>
                  <img
                    className={styles.feature_image}
                    src="https://kmg-site-assets.kaycdn.com/pageflow-search-ikon@3x.png"
                    alt="Kreative Pageflow Search Ikon"
                  />
                  <p className={styles.feature_text}>
                    Search Engine Optimization
                  </p>
                </Col>
                <Col xs={6} sm={4} lg={2}>
                  <img
                    className={styles.feature_image}
                    src="https://kmg-site-assets.kaycdn.com/pageflow-security-ikon@3x.png"
                    alt="Kreative Pageflow Security Ikon"
                  />
                  <p className={styles.feature_text}>Site Security & SSL</p>
                </Col>
                <Col xs={6} sm={4} lg={2}>
                  <img
                    className={styles.feature_image}
                    src="https://kmg-site-assets.kaycdn.com/pageflow-wallet-ikon@3x.png"
                    alt="Kreative Pageflow Wallet Ikon"
                  />
                  <p className={styles.feature_text}>
                    Ecommerce & Online Payments
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </Wrapper>
      <Wave color="white">
        <path
          className="wave-fill"
          d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
        c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
        c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
        ></path>
      </Wave>
      <Wrapper bg="#6135DE" paddingBottom="150px" paddingTop="250px">
        <Container style={{ padding: "0px" }}>
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
              <div style={{ color: "white" }}>
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
        ></path>
      </Wave>
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
        <Container style={{ padding: "0px" }} fluid>
          <Row gutterWidth={50}>
            <Col md={4} className={styles.iconbox}>
              <IconBox
                icon={faComments}
                iconColor="black"
                header="Strategy Session"
                text={`Every project begins with a Strategy Session to understand your goals, 
                      needs, and how we can deliver the sales-making machine to grow your 
                      business.`}
                align="left"
                iconAlign="flex-start"
                size="3x"
              />
            </Col>
            <Col md={4} className={styles.iconbox}>
              <IconBox
                icon={faPencilRuler}
                iconColor="black"
                header="Design & Development"
                text={`The next step involves our expert team of designers, developers, 
                      copywriters, and graphic designers, who build the first version 
                      of your future website within a few weeks.`}
                align="left"
                iconAlign="flex-start"
                size="3x"
              />
            </Col>
            <Col md={4} className={styles.iconbox}>
              <IconBox
                icon={faSpaceShuttle}
                iconColor="black"
                header="Launch"
                text={`Once the website is built to your satisfaction, we make the website
                      public and open to the internet, ready for you to find new customers`}
                align="left"
                iconAlign="flex-start"
                size="3x"
              />
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Wrapper bg="#1E1E1E" paddingBottom="150px" paddingTop="150px">
        <Container style={{ padding: "0px" }}>
          <Row gutterWidth={50}>
            <Col md={6} style={{ color: "white" }}>
              <div>
                <LineLabel color="white">BRANDING BENEFITS</LineLabel>
                <h2>If you're not on the internet, you don't exist.​</h2>
                <p>
                  80% of consumers research a business online before making a
                  purchase. (Blue Corona)
                </p>
                <p>
                  83% of the small business owners with a website feel they have
                  a competitive advantage on those without one. (GoDaddy Global
                  Small Business Report)
                </p>
                <p>
                  Over 60% of small businesses without a website plan to get a
                  website in the next year. (Clutch.co)
                </p>
              </div>
            </Col>
            <Col
              md={6}
              className={styles.design_benefits}
              style={{ color: "#C8B5FD" }}
            >
              <div>
                <LineLabel color="#C8B5FD">DESIGN BENEFITS</LineLabel>
                <h2>Looking good matters, web design isn't a DIY thing.​</h2>
                <p>
                  75% of users admit to making judgments about a company’s
                  credibility based on their website’s design. (Stanford
                  University)
                </p>
                <p>
                  88% of online consumers are less likely to return to a site
                  after a bad experience. (Sweor)
                </p>
                <p>
                  Every dollar invested in design brings 100 dollars in return.
                  That’s an ROI of a whopping 9,900 percent. (Forester Research)
                </p>
                <p>
                  Only 16% of small business owners have a website that they’re
                  proud of. (ChannelBiz UK Survey)
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Wrapper bg="#FFF2DF" paddingBottom="100px" paddingTop="100px">
        <Container style={{ padding: "0px" }}>
          <Row gutterWidth={0}>
            <Col sm={4}>
              <div className={styles.pledge_badge_wrapper}>
                <img
                  className={styles.pledge_badge}
                  src="https://kmg-site-assets.kaycdn.com/the-pageflow-pledge-badge.webp"
                  alt="The Pageflow Pledge Badge in Black"
                />
              </div>
            </Col>
            <Col sm={8} className={styles.pledge_content}>
              <LineLabel>OUR PLEDGE</LineLabel>
              <h2>
                Every customer recieves a Dedicated Success Team, revisions, SEO
                consultations, and a Satisfaction Guarantee.
              </h2>
              <Button
                href="/pageflow/pricing"
                fill="black"
                textColor="white"
                radius="3px"
                border="1px solid black"
                padding="15px 50px"
                raised={true}
                grow={true}
              >
                View Pricing
              </Button>
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Wrapper bg="white" paddingBottom="150px" paddingTop="250px">
        <LineLabel color="black">WORK WITH PAGEFLOW</LineLabel>
        <h2 style={{ fontWeight: "bold", paddingBottom: "25px" }}>
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
