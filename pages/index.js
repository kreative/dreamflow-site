import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Wrapper from "../components/Wrapper/Wrapper";
import Button from "../components/Button/Button";
import LineLabel from "../components/LineLabel/LineLabel";
import ProductCard from "../components/ProductCard/ProductCard";
import ApproachCard from "../components/ApproachCard/ApproachCard";
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
        <meta name={"description"} content={"We're here to transform the marketing industry with quality service and fair pricing so you can crush the competition"} />
      </Head>
      <Navbar scrollColor="rgba(255,255,255,0.5)" />
      <div className={styles.hero}>
        <Wrapper bg={"rgba(0,0,0,0)"}>
          <h1 className={styles.hero_text}>
            We're here to transform the marketing industry with
            quality service and fair pricing so you can crush the competition
          </h1>
        </Wrapper>
      </div>
      <Wrapper bg="white" paddingTop="250px" paddingBottom="250px">
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
      <Wrapper bg="#FFF2DF" paddingBottom="200px" paddingTop="200px">
        <div style={{ textAlign: "center" }}>
          <h1 className={styles.testimonial_text}>
            "Kreative Dreamflow did a fantastic job understanding our market and our competition to deliver a
            website that was <span className={styles.highlight}>better designed, faster, and more customer-centric.
            </span>{" "} They even integrated an email collection feature to help us stay in touch with customers
            year round, something we hadn't thought of until their team brought it up to us!"
          </h1>
          <p>Venkat Ramireddy, Arvy Foods</p>
        </div>
      </Wrapper>
      <Wrapper bg="white" paddingTop="150px" paddingBottom="150px">
        <div className={styles.header} style={{ paddingBottom: "35px" }}>
          <h2 style={{ textAlign: "center" }}>Dreamflow Services</h2>
        </div>
        <Container style={{ padding: "0px" }} fluid>
          <Row gutterWidth={25}>
            <Col sm={6} md={4} xxl={3} style={{ marginBottom: "25px" }}>
              <ProductCard
                bg="white"
                align="center"
                border="1.5px solid #E3E3E3"
                raised={true}
                logo="https://kmg-site-assets.kaycdn.com/toprank-logo-new.png"
                alt="Kreative TopRank logo in Green"
                description="Search engine optimization"
                text="The topRank package helps achieve higher search rankings for your website."
                button={
                  <Button
                    href="/services/toprank"
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
                text="Our sales & brand focused approach enables the client to better compete in the market."
                button={
                  <Button
                    href="/services/pageflow"
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
                    href="/services/pencil"
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
                text="Full-service design team ready to help with branding and intuitive UX at nominal additional charges."
                button={
                  <Button
                    href="/services/kanvas"
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
            <Col sm={6} md={4} xxl={3} style={{ marginBottom: "25px" }}>
              <ProductCard
                  bg="white"
                  align="center"
                  border="1.5px solid #E3E3E3"
                  logo="https://kmg-site-assets.kaycdn.com/kreative-channels-logo.png"
                  logoWidth="100%"
                  alt="Kreative Channels logo in Light Blue"
                  description="Omnipresence Marketing"
                  text="Full service marketing service to put your brand in front of consumers, wherever they are."
                  button={
                    <Button
                        href="/services/channels"
                        fill="#3BA1FF"
                        textColor="white"
                        hoverColor="#A0D2FF"
                        radius="3px"
                        border="1px solid #3BA1FF"
                        hoverBorder="1px solid #A0D2FF"
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
                logo="https://kmg-site-assets.kaycdn.com/sitecare-logo-color@4x.png"
                logoWidth="97%"
                alt="Kreative SiteCare logo in Color"
                description="Worry-free Site Maintenance"
                text="Easy to understand plans for site fixes and upgrades to take the stress off your team."
                button={
                  <Button
                    href="/services/sitecare"
                    fill="#FB01E6"
                    textColor="white"
                    hoverColor="#FF73F3"
                    radius="3px"
                    border="1px solid #FB01E6"
                    hoverBorder="1px solid #FF73F3"
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
                logo="https://kmg-site-assets.kaycdn.com/litehost-logo-color@4x.png"
                logoWidth="97%"
                alt="Kreative LiteHost logo in Color"
                description="Blazing fast web hosting"
                text="Worry free, managed hosting plans for your digital presence with incredible speeds."
                button={
                  <Button
                    href="/services/litehost"
                    fill="#FFD83B"
                    textColor="white"
                    hoverColor="#FFE681"
                    radius="3px"
                    border="1px solid #FFD83B"
                    hoverBorder="1px solid #FFE681"
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
