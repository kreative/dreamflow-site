import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Wrapper from "../components/Wrapper/Wrapper";
import Button from "../components/Button/Button";
import LineLabel from "../components/LineLabel/LineLabel";
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
          crossOrigin="anonymous"
        ></script>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Navbar scrollColor="rgba(255,255,255,0.5)" />
      <div className={styles.hero}>
        <video autoPlay muted loop className={styles.hero_video}>
          <source
            src="https://kmg-site-assets.kaycdn.com/hazmat-cleaning.mp4"
            type="video/mp4"
          />
        </video>
        <h1 style={{ textAlign: "center" }}>
          We are on a mission to clean up the digital marketing industry with
          quality service and fair pricing.
        </h1>
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
                <video className={styles.image} autoPlay loop muted playsInline>
                  <source
                    src="https://kmg-site-assets.kaycdn.com/panda-angry.webm"
                    type="video/webm"
                  />
                  <source
                    src="https://kmg-site-assets.kaycdn.com/panda-angry.mp4"
                    type="video/mp4"
                  />
                </video>
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

                <Container style={{ padding: "0px" }} fluid>
                  <Row gutterWidth={10} className={styles.reason}>
                    <Col xs={1} style={{ textAlign: "center" }}>
                      <FontAwesomeIcon icon={faTimes} />
                    </Col>
                    <Col xs={11}>
                      <span className={styles.problem_reason_text}>
                        You built your website to find new customers, but nobody
                        is booking a call, meeting, or consultation.
                      </span>
                    </Col>
                  </Row>
                  <Row gutterWidth={10} className={styles.reason}>
                    <Col xs={1} style={{ textAlign: "center" }}>
                      <FontAwesomeIcon icon={faTimes} />
                    </Col>
                    <Col xs={11}>
                      <span className={styles.problem_reason_text}>
                        Your website doesn't stand out from the other billion
                        already on the internet.
                      </span>
                    </Col>
                  </Row>
                  <Row gutterWidth={10} className={styles.reason}>
                    <Col xs={1} style={{ textAlign: "center" }}>
                      <FontAwesomeIcon icon={faTimes} />
                    </Col>
                    <Col xs={11}>
                      <span className={styles.problem_reason_text}>
                        You're stuck wondering whether expanding your business
                        online will ever be a reality for you.
                      </span>
                    </Col>
                  </Row>
                </Container>
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
                  <br />
                  Dreamflow is here to help your business find new customers to
                  fall in love with your products and services. And with our
                  customer-centric design and transparent pricing, doing that
                  becomes easier than ever.
                  <br />
                  <br />
                  Find out how you can work with Dreamflow
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
                <video className={styles.image} autoPlay loop muted playsInline>
                  <source
                    src="https://kmg-site-assets.kaycdn.com/relaxing-brain.webm"
                    type="video/webm"
                  />
                  <source
                    src="https://kmg-site-assets.kaycdn.com/relaxing-brain.mp4"
                    type="video/mp4"
                  />
                </video>
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
                <video className={styles.image} autoPlay loop muted playsInline>
                  <source
                    src="https://kmg-site-assets.kaycdn.com/burning-money.webm"
                    type="video/webm"
                  />
                  <source
                    src="https://kmg-site-assets.kaycdn.com/burning-money.mp4"
                    type="video/mp4"
                  />
                </video>
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

                <Container style={{ padding: "0px" }} fluid>
                  <Row gutterWidth={10} className={styles.reason}>
                    <Col xs={1} style={{ textAlign: "center" }}>
                      <FontAwesomeIcon icon={faTimes} size="sm" />
                    </Col>
                    <Col xs={11}>
                      <span className={styles.problem_reason_text}>
                        You scrape together a DIY website, looking to save
                        money, but no one is finding your website online. And
                        when people do, no one is downloading your free offers,
                        let alone booking a meeting with you.
                      </span>
                    </Col>
                  </Row>
                  <Row gutterWidth={10} className={styles.reason}>
                    <Col xs={1} style={{ textAlign: "center" }}>
                      <FontAwesomeIcon icon={faTimes} size="sm" />
                    </Col>
                    <Col xs={11}>
                      <span className={styles.problem_reason_text}>
                        You spend hours every week searching Google for answers
                        to tech problems, only to pay some new developer to fix
                        them.
                      </span>
                    </Col>
                  </Row>
                  <Row gutterWidth={10} className={styles.reason}>
                    <Col xs={1} style={{ textAlign: "center" }}>
                      <FontAwesomeIcon icon={faTimes} size="sm" />
                    </Col>
                    <Col xs={11}>
                      <span className={styles.problem_reason_text}>
                        You want to implement new features, like ecommerce,
                        online bookings, popup offers, email newsletter
                        signups... but don't have the time to do it yourself.
                      </span>
                    </Col>
                  </Row>
                  <Row gutterWidth={10} className={styles.reason}>
                    <Col xs={1} style={{ textAlign: "center" }}>
                      <FontAwesomeIcon icon={faTimes} size="sm" />
                    </Col>
                    <Col xs={11}>
                      <span className={styles.problem_reason_text}>
                        You decide to finally look for an outside agency to
                        help, but quit your search when you hear their prices.
                      </span>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Wrapper bg="#004893" paddingBottom="100px" paddingTop="100px">
        <div style={{ textAlign: "center", color: "white" }}>
          <LineLabel color="white">HINT HINT:</LineLabel>
          <p className={styles.explainer}>
            It's not your fault, running a business is hard enough. Trying to
            conquer online marketing on top of that is a recipe for disaster.
          </p>
          <FontAwesomeIcon icon={faArrowDown} size="3x" />
          <h3>
            You just need a solution that knows how to naviagte the digital
            marketing world.
          </h3>
          <h3>Dreamflow is that solution.</h3>
        </div>
      </Wrapper>
      <Wrapper bg="#F8F5F2" paddingBottom="200px" paddingTop="200px">
        <div style={{ textAlign: "center" }}>
          <h1 className={styles.testimonial_text}>
            "The team over at Dreamflow wasted no time in working with us and
            getting our website off the ground. They listened to all our
            concerns and put together{" "}
            <span className={styles.highlight}>
              a website that perfectly represented our business.
            </span>{" "}
            We would work with them again, anytime."
          </h1>
          <p>Frank Rossi, B4TheLeague</p>
        </div>
      </Wrapper>
      <Wrapper bg="white" paddingTop="150px" paddingBottom="150px">
        <div className={styles.header} style={{ paddingBottom: "35px" }}>
          <h2 style={{ textAlign: "center" }}>Dreamflow Products</h2>
        </div>
        <Container style={{ padding: "0px" }} fluid>
          <Row gutterWidth={25}>
            <Col sm={6} md={4} xxl={3} style={{ marginBottom: "25px" }}>
              <ProductCard
                bg="white"
                align="center"
                border="1.5px solid #E3E3E3"
                raised={true}
                logo="https://kmg-site-assets.kaycdn.com/toprank-color.png"
                alt="Kreative TopRank logo in Green"
                description="Search engine optimization"
                text="With TopRank, we garuntee higher search rankings for your website or your money back."
                button={
                  <Button
                    href="/toprank"
                    fill="#176A3A"
                    textColor="white"
                    hoverColor="#53AF7A"
                    radius="3px"
                    border="1px solid #176A3A"
                    hoverBorder="1px solid #53AF7A"
                    padding="15px 50px"
                    raised={false}
                    grow={false}
                    width="100%"
                  >
                    Learn more
                  </Button>
                }
              />
            </Col>
            <Col sm={6} md={4} xxl={3} style={{ marginBottom: "25px" }}>
              <ProductCard
                bg="white"
                align="center"
                border="1.5px solid #E3E3E3"
                logo="https://kmg-site-assets.kaycdn.com/pageflow-color.png"
                alt="Kreative Pageflow logo in Purple"
                description="Website design"
                text="Our sales focused approach turns a potential website cost into an investment that makes you money."
                button={
                  <Button
                    href="/pageflow"
                    fill="#6135DE"
                    textColor="white"
                    hoverColor="#7651E0"
                    radius="3px"
                    border="1px solid #6135DE"
                    hoverBorder="1px solid #7651E0"
                    padding="15px 50px"
                    raised={false}
                    grow={false}
                    width="100%"
                  >
                    Learn more
                  </Button>
                }
              />
            </Col>
            <Col sm={6} md={4} xxl={3} style={{ marginBottom: "25px" }}>
              <ProductCard
                bg="white"
                align="center"
                border="1.5px solid #E3E3E3"
                logo="https://kmg-site-assets.kaycdn.com/pencil-color.png"
                logoWidth="90%"
                alt="Kreative Pencil logo in Navy Blue"
                description="Copywriting"
                text="Affordable and attention grabbing copywriting for your blog posts or webpages."
                button={
                  <Button
                    href="/pencil"
                    fill="#1C5592"
                    textColor="white"
                    hoverColor="#338EEE"
                    radius="3px"
                    border="1px solid #1C5592"
                    hoverBorder="1px solid #338EEE"
                    padding="15px 50px"
                    raised={false}
                    grow={false}
                    width="100%"
                  >
                    Learn more
                  </Button>
                }
              />
            </Col>
            <Col sm={6} md={4} xxl={3} style={{ marginBottom: "25px" }}>
              <ProductCard
                bg="white"
                align="center"
                border="1.5px solid #E3E3E3"
                logo="https://kmg-site-assets.kaycdn.com/kreative-kanvas-color.png"
                logoWidth="100%"
                alt="Kreative Kanvas logo in Neon Green"
                description="Graphic Design"
                text="Have a full time design team on standby, without breaking the bank."
                button={
                  <Button
                    href="/kanvas"
                    fill="#029E82"
                    textColor="white"
                    hoverColor="#00DAB3"
                    radius="3px"
                    border="1px solid #029E82"
                    hoverBorder="1px solid #00DAB3"
                    padding="15px 50px"
                    raised={false}
                    grow={false}
                    width="100%"
                  >
                    Learn more
                  </Button>
                }
              />
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Footer />
    </div>
  );
}
