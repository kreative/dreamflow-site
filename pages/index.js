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
      </Head>
      <Navbar scrollColor="rgba(255,255,255,0.5)" />
      <Wrapper bg="#FFECD0" paddingTop="60vh" paddingBottom={"10vh"}>
        <h1 className={styles.hero_text}>
          We are on a mission to transform the digital marketing industry with
          quality service and fair pricing.
        </h1>
      </Wrapper>
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
      <Wrapper bg="white" paddingBottom="250px" paddingTop="250px">
        <div style={{marginBottom: "75px"}}>
          <LineLabel color={"black"}>OUR APPROACH</LineLabel>
          <h2>The Kreative Dreamflow Partner Experience&trade;</h2>
          <p>
            The business environment & landscape shifts rapidlly everday, making it harder
            and harder for businesses to stay ahead of the curve. Kreative Dreamflow’s
            expertise and tools by your side will help your business better compete with the
            competition.
          </p>
        </div>
        <div>
          <Container style={{padding:"0px"}}>
            <Row gutterWidth={15}>
              <Col sm={4} style={{marginBottom: "25px"}}>
                <ApproachCard
                  image={"https://kmg-site-assets.kaycdn.com/money_coins_ikon@4x.png"}
                  imageAlt={"Money Coins Kreative Ikon"}
                  name={<span>Migrating Risks<br />and Better ROI</span>}
                  description={`
                    Our reasearch shows that getting a
                    positive return on investment is a
                    top priority for businesses. Our
                    approach focuses on using data
                    and small batch testing to reduce
                    costs, speedier response and drive
                    our decision making while keeping
                    big picture in mind. This allows you
                    to easily predict the project size/
                    budget, realize the importance of
                    the project for your organization,
                    and allocate your resources in an
                    effective way.
                  `}
                  bgColor={"#F6F6F4"}
                  headerColor={"black"}
                  textColor={"#53504E"}
                />
              </Col>
              <Col sm={4} style={{marginBottom: "25px"}}>
                <ApproachCard
                  image={"https://kmg-site-assets.kaycdn.com/Magnifying_Glass_Ikon@4x.png"}
                  imageAlt={"Magnifying Glass Ikon"}
                  name={<span>Focused Segment <br /> Marketing</span>}
                  description={`
                    When you sell to everyone, you sell
                    to no one, and our research has
                    shown that more focused
                    personalized approach to various
                    market segments bring better
                    results. We work with your
                    leadership team to break down
                    your market into specialized
                    customer segments which helps in
                    targeted marketing, better result
                    tracking and improved ROI.
                    Customers feel connected with
                    you and build loyalty.
                  `}
                  bgColor={"#F6F6F4"}
                  headerColor={"black"}
                  textColor={"#53504E"}
                />
              </Col>
              <Col sm={4} style={{marginBottom: "25px"}}>
                <ApproachCard
                  image={"https://kmg-site-assets.kaycdn.com/Space_Shuttle_Ikon@4x.png"}
                  imageAlt={"Space Shuttle Ikon"}
                  name={<span>Enhanced Brand <br /> Value</span>}
                  description={`
                    We work in partnership with our
                    clients rather in silos with constant
                    feedback and communication. The
                    Kreative Dreamflow Partner
                    Experience, based on frequent
                    communication helps bring
                    innovation to the front. This
                    amplifies your brand message
                    through effective website design,
                    campaign, and inclusive channel
                    marketing. Our approach of brand
                    and customer first helps build
                    brand loyalty.
                  `}
                  bgColor={"#F6F6F4"}
                  headerColor={"black"}
                  textColor={"#53504E"}
                />
              </Col>
            </Row>
          </Container>
        </div>
      </Wrapper>
      <Wrapper bg="#FFF2DF" paddingBottom="200px" paddingTop="200px">
        <div style={{ textAlign: "center" }}>
          <h1 className={styles.testimonial_text}>
            "Kreative Dreamflow did a fantastic job understanding our market and our competition to deliver a
            website that was <span className={styles.highlight}>better designed, faster, and more customer-centric.
            </span>{" "} They even integrated an email collection feature to help us stay in touch with customers
            year round, something we hadn't thought of until their team brought it up to us!"
          </h1>
          <p>Frank Rossi, B4TheLeague</p>
        </div>
      </Wrapper>
      <Wrapper bg={"white"} paddingBottom={"250px"} paddingTop={"250px"}>
        <div style={{paddingBottom: "75px"}}>
          <LineLabel color={"black"}>DISTINGUISHING FACTORS</LineLabel>
          <h2>Work better with The Dreamflow Way&trade;</h2>
        </div>
        <Container style={{padding: "0px"}}>
          <Row gutterWidth={25}>
            <Col sm={4} style={{marginBottom: "25px"}}>
              <h3 style={{fontWeight: "bold"}}>Brand & Research First</h3>
              <p className={styles.factor_desc}>
                Research based data, brand based
                design and customer focused UX is our
                bread and butter. This approach brings
                innovation & brand value to the forefront.
              </p>
            </Col>
            <Col sm={4} style={{marginBottom: "25px"}}>
              <h3 style={{fontWeight: "bold"}}>Inclusive Partnership</h3>
              <p className={styles.factor_desc}>
                We work hand-in-glove with our clients
                during every stage of our engagement.
                We strive for openess and inclusiveness
                in our working together.
              </p>
            </Col>
            <Col sm={4} style={{marginBottom: "25px"}}>
              <h3 style={{fontWeight: "bold"}}>Rapid Go-To-Market</h3>
              <p className={styles.factor_desc}>
                Markets are moving quicker than ever,
                and so do we. Our segmented approach
                and frequent updates enables “rapid goto
                market” response.
              </p>
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Wrapper bg="#E7F2FD" paddingBottom="200px" paddingTop="200px">
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
                text="Our sales & brand focused approach enables the client to better compete in the market."
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
                text="Full-service design team ready to help with branding and intuitive UX at nominal additional charges."
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
