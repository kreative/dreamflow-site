import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Wrapper from "../components/Wrapper/Wrapper";
import Button from "../components/Button/Button";
import LineLabel from "../components/LineLabel/LineLabel";
import HeaderLine from "../components/HeaderLine/HeaderLine";
import ProductCard from "../components/ProductCard/ProductCard";
import { Container, Row, Col } from "react-grid-system";
import { faTimes, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Welcome | Kreative Dreamflow</title>
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

      <div className={styles.splash}>
        <Wrapper bg="rgba(0,0,0,0)" paddingTop="0px" paddingBottom="0px">
          <h1>Supercharge your marketing and business with Dreamflow.</h1>
        </Wrapper>
      </div>
      <Wrapper bg="white" paddingTop="150px" paddingBottom="150px">
        <Container style={{ padding: "0px" }} fluid>
          <Row gutterWidth={0}>
            <Col
              lg={4}
              style={{
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div className={styles.problem_image_wrapper}>
                <img
                  className={styles.image}
                  src="https://kmg-site-assets.kaycdn.com/panda-angry.gif"
                  alt="Angry Panda smashing computer GIF"
                />
              </div>
            </Col>
            <Col lg={8}>
              <div className={styles.problem_content}>
                <LineLabel color="black">THE PROBLEM</LineLabel>
                <h2>Finding new customers online doesn't have to be so hard</h2>
                <p>
                  Your businesses responsibility is to your customers and
                  employees. Your current customers love your products and
                  services, but when you don't see your website bringing in new
                  leads, sales, and customers, you're left scratching your head
                  why?
                </p>

                <ul className={styles.reasons_list}>
                  <li>
                    <span className={styles.problem_reason_text}>
                      Nobody is booking a call, meeting, or consultation.
                    </span>
                  </li>
                  <li>
                    <span className={styles.problem_reason_text}>
                      Your website doesn't stand out from the other billion
                      already on the internet.
                    </span>
                  </li>
                  <li>
                    <span className={styles.problem_reason_text}>
                      You're stuck wondering whether expanding your business
                      online will ever be a reality for you.
                    </span>
                  </li>
                </ul>

                <div className={styles.problem_reason}>
                  <FontAwesomeIcon icon={faTimes} size="sm" />
                  <span className={styles.problem_reason_text}>
                    Nobody is booking a call, meeting, or consultation.
                  </span>
                </div>
                <div className={styles.problem_reason}>
                  <FontAwesomeIcon icon={faTimes} size="sm" />
                  <span className={styles.problem_reason_text}>
                    Your website doesn't stand out from the other billion
                    already on the internet.
                  </span>
                </div>
                <div className={styles.problem_reason}>
                  <FontAwesomeIcon icon={faTimes} size="sm" />
                  <span className={styles.problem_reason_text}>
                    You're stuck wondering whether expanding your business
                    online will ever be a reality for you.
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Wrapper bg="#F6F6F4" paddingTop="150px" paddingBottom="150px">
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
                <h2>Dreamflow turns those hopes into reality.</h2>
                <p>
                  Our websites and digital marketing solutions help get
                  businesses like yours the RESULTS they need to grow online.
                  <br />
                  Dreamflow is here to help your business find new customers to
                  fall in love with your products and services. And with our
                  customer-centric design and transparent pricing, doing that
                  becomes easier than ever.
                  <br />
                  Find out you can work with Dreamflow
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
                  className={styles.image}
                  src="https://kmg-site-assets.kaycdn.com/relaxing-brain.gif"
                  alt="Angry Panda smashing computer GIF"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Wrapper bg="white" paddingTop="150px" paddingBottom="150px">
        <Container style={{ padding: "0px" }} fluid>
          <Row gutterWidth={0}>
            <Col
              lg={4}
              style={{
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div className={styles.problem_image_wrapper}>
                <img
                  className={styles.image}
                  src="https://kmg-site-assets.kaycdn.com/burning-money.gif"
                  alt="Angry Panda smashing computer GIF"
                />
              </div>
            </Col>
            <Col
              lg={8}
              style={{
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div className={styles.understanding_content}>
                <LineLabel color="black">DON'T STRESS</LineLabel>
                <h2>
                  We get it. Online marketing can feel like burning money.
                </h2>
                <p>We here it all the time from our clients...</p>
                <div className={styles.problem_reason}>
                  <FontAwesomeIcon icon={faTimes} size="sm" />
                  <span className={styles.problem_reason_text}>
                    You scrape together a DIY website, looking to save money,
                    but no one is finding your website online. And when people
                    do, no one is downloading your free offers, let alone
                    booking a meeting with you.
                  </span>
                </div>
                <div className={styles.problem_reason}>
                  <FontAwesomeIcon icon={faTimes} size="sm" />
                  <span className={styles.problem_reason_text}>
                    You spend hours every week searching Google for answers to
                    tech problems, only to pay some new developer to fix them.
                  </span>
                </div>
                <div className={styles.problem_reason}>
                  <FontAwesomeIcon icon={faTimes} size="sm" />
                  <span className={styles.problem_reason_text}>
                    You want to implement new features, like ecommerce, online
                    bookings, popup offers, email newsletter signups... but
                    don't have the time to do it yourself.
                  </span>
                </div>
                <div className={styles.problem_reason}>
                  <FontAwesomeIcon icon={faTimes} size="sm" />
                  <span className={styles.problem_reason_text}>
                    You decide to finally look for an outside agency to help,
                    but quit your search when you hear their prices.
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Wrapper bg="#004893" paddingBottom="100px" paddingTop="100px">
        <div style={{ textAlign: "center", color: "white" }}>
          <LineLabel color="white">HINT HINT:</LineLabel>
          <p className={styles.explainer}>
            Tell them how its not their fault and that its because they're just
            not working with us yet.
          </p>
          <FontAwesomeIcon icon={faArrowDown} size="3x" />
          <h2>Say how working with us solve all of their problems</h2>
        </div>
      </Wrapper>
      <Wrapper bg="#F8F5F2" paddingBottom="200px" paddingTop="200px">
        <div style={{ textAlign: "center" }}>
          <h1>
            "Testimonial about{" "}
            <span className={styles.highlight}>
              how great we were and how they would work with us again
            </span>{" "}
            at any cost because thats how good Dreamflow is at what Dreamflow
            does."
          </h1>
          <p>Bob Dylan, Acme Corporation</p>
        </div>
      </Wrapper>
      <Wrapper bg="white" paddingTop="150px" paddingBottom="150px">
        <div className={styles.header} style={{ paddingBottom: "35px" }}>
          <h2 style={{ textAlign: "center" }}>Our Products</h2>
          <HeaderLine color="black" />
        </div>
        <Container style={{ padding: "0px" }} fluid>
          <Row gutterWidth={25}>
            <Col sm={4} xxl={3}>
              <ProductCard
                bg="white"
                border="1.5px solid #E3E3E3"
                raised={true}
                logo="/toprank-color.png"
                alt="Kreative TopRank logo in Green"
                description="Managed SEO for everyone"
                text=""
              />
            </Col>
            <Col sm={4} xxl={3}>
              <ProductCard
                bg="white"
                border="1.5px solid #E3E3E3"
                logo="/pageflow-color.png"
                alt="Kreative Pageflow logo in Purple"
                description="Web design and development"
                text="Our sales focused approach turns a potential website cost into an investment."
              />
            </Col>
            <Col sm={4} xxl={3}>
              <ProductCard
                bg="white"
                border="1.5px solid #E3E3E3"
                logo="/pageflow-color.png"
                alt="Kreative Pageflow logo in Purple"
                description="Web design and development"
                text="Our sales focused approach turns a potential website cost into an investment."
              />
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Footer />
    </div>
  );
}
