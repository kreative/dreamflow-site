import Head from "next/head";
import Wrapper from "../components/Wrapper/Wrapper";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import LineLabel from "../components/LineLabel/LineLabel";
import { Container, Row, Col } from 'react-grid-system';
import styles from "../styles/why_dreamflow.module.css";
import ApproachCard from "../components/ApproachCard/ApproachCard";

export default function WhyDreamflow() {
  return (
    <div>
      <Head>
        <title>Why Dreamflow | Kreative Dreamflow</title>
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
      <Navbar scrollColor={"rgba(255,255,255,0.4)"} />
      <div className={styles.hero}>
        <Wrapper bg="rgba(0,0,0,0)" paddingTop="40vh" paddingBottom="40vh">
        <LineLabel color="white">WHY DREAMFLOW?</LineLabel>
        <h1>We've got one goal - to help grow and transform your business for the better.</h1>
        </Wrapper>
      </div>
      <Wrapper bg={"white"} paddingTop={"250px"} paddingBottom={"250px"}>
        <Container style={{padding:"0px"}}>
          <Row nogutter>
            <Col sm={1} />
            <Col sm={8}>
              <h2 style={{fontWeight:"normal"}}>
                Kreative Dreamflow started out of frustration, the <span className={styles.frus}>frustration</span> of being charged an arm and a leg for basic marketing services, the <span className={styles.frus}>frustration</span> of dealing with consultants that cared about
                their wallet and not ours, the <span className={styles.frus}>frustration</span> of having to
                debate between spending money on product development or marketing.
              </h2>
            </Col>
          </Row>
          <Row nogutter>
            <Col sm={6} />
            <Col sm={6}>
              <h2 style={{paddingTop: "50px"}}>
                Kreative Dreamflow started to build a happy medium, where clients from all around the world can benefit
                from quality marketing services and a fair price.
              </h2>
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Wrapper bg={"#111111"} paddingBottom={"250px"} paddingTop={"250px"}>
        <div style={{paddingBottom: "75px"}}>
          <LineLabel color={"white"}>DISTINGUISHING FACTORS</LineLabel>
          <h2 style={{color: "white"}}>Work better with The Dreamflow Way&trade;</h2>
        </div>
        <Container style={{padding: "0px"}}>
          <Row gutterWidth={25}>
            <Col sm={4} style={{marginBottom: "25px"}}>
              <h3 style={{fontWeight: "bold", color: "white"}}>Brand & Research First</h3>
              <p className={styles.factor_desc}>
                Research based data, brand based
                design and customer focused UX is our
                bread and butter. This approach brings
                innovation & brand value to the forefront.
              </p>
            </Col>
            <Col sm={4} style={{marginBottom: "25px"}}>
              <h3 style={{fontWeight: "bold", color: "white"}}>Inclusive Partnership</h3>
              <p className={styles.factor_desc}>
                We work hand-in-glove with our clients
                during every stage of our engagement.
                We strive for openess and inclusiveness
                in our working together.
              </p>
            </Col>
            <Col sm={4} style={{marginBottom: "25px"}}>
              <h3 style={{fontWeight: "bold", color: "white"}}>Rapid Go-To-Market</h3>
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
      <Footer />
    </div>
  );
}
