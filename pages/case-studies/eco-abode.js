import Head from "next/head";
import Wrapper from "../../components/Wrapper/Wrapper";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import LineLabel from "../../components/LineLabel/LineLabel";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import { Container, Row, Col } from "react-grid-system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faQuoteLeft,
  faCalendarCheck,
  faWallet,
  faMoneyBillWave,
  faExternalLinkAlt,
  faArrowsAlt,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/work/eco-abode.module.css";
import ContentDownload from "../../components/ContentDownload/ContentDownload";

const EcoAbodeCaseStudy = () => {
  return (
    <div>
      <Head>
        <title>Eco Abode | Case Studies | Kreative Dreamflow</title>
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
        <link rel="manifest" href="/favicons/general/site.webmanifest" />
        <script
          type="text/javascript"
          src="https://kit.fontawesome.com/abadd7b058.js"
          crossorigin="anonymous"
        />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name={"description"} content={"Take a look at how Kreative Dreamflow helped, Eco Abode, a local rental property management company get new customers with a new website and brand identity."} />
      </Head>
      <Navbar />
      <Wrapper bg="white" paddingTop="200px" paddingBottom="100px">
        <div className={styles.hero}>
          <div>
            <LineLabel color="#32746D">Eco Abode</LineLabel>
            <h1 style={{ paddingBottom: "100px" }}>
              A rental property management company creating the easiest
              experience for new home owners
            </h1>
            <FontAwesomeIcon icon={faArrowDown} size="1x" />
          </div>
        </div>
      </Wrapper>
      <ParallaxProvider>
        <ParallaxBanner
          layers={[
            {
              image:
                "https://kmg-site-assets.kaycdn.com/clients/eco-abode/house-generic.jpg",
              amount: 0.4,
            },
          ]}
          style={{
            height: "700px",
          }}
        />
      </ParallaxProvider>
      <Wrapper bg="#EEF8F7" paddingTop="200px" paddingBottom="200px">
        <Container style={{ padding: "0px" }} fluid>
          <Row gutterWidth={20}>
            <Col sm={12} md={4}>
              <h2 style={{ paddingBottom: "50px" }}>The Challenge</h2>
            </Col>
            <Col sm={12} md={8}>
              <p className={styles.larger_p} style={{ paddingBottom: "20px" }}>
                Eco Abode is a rental property management business started in
                2019. When starting, they were focused on client experience and
                generating leads in their community; a website was the last
                thing on their mind. They put together a small, one-page website
                to get started with nothing more than a contact page. However,
                when the COVID19 pandemic hit, they realized they needed to
                shift their marketing strategy online and build a new website
                that can correctly represent their brand and help generate new
                customers. After doing some research on their own and talking to
                other marketing agencies in the area, they landed on Kreative
                Dreamflow for our customer-centric design, transparent pricing,
                and affordable rates.
              </p>
              <a className={styles.link} href="https://ecoabodellc.com">
                <span style={{ marginRight: "10px" }}>View Project</span>
                <FontAwesomeIcon icon={faExternalLinkAlt} size="sm" />
              </a>
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Wrapper bg="white" paddingTop="150px" paddingBottom="150px">
        <div className={styles.testimonial_section}>
          <FontAwesomeIcon
            icon={faQuoteLeft}
            size="4x"
            style={{ color: "#32746D" }}
          />
          <h2 style={{ paddingTop: "50px" }}>
            We knew we needed a new website and brand, but couldn't figure out
            exactly what was missing. We were scared that if we didn't know
            exactly what we needed, an agency would be a waste of money
            <br />
            <br />
            But the team at Dreamflow didn't need much information to get
            started. They knew what worked and what our market wanted extremely
            well.
          </h2>
          <p>Pankaj Gupta, Founder of Eco Abode</p>
        </div>
      </Wrapper>
      <Wrapper bg="#F8FBF9" paddingTop="200px" paddingBottom="200px">
        <div style={{ textAlign: "center" }}>
          <LineLabel color="#32746D">AFTER DREAMFLOW</LineLabel>
          <h2 className={styles.larger_h1} style={{ paddingBottom: "50px" }}>
            Using our four phase system, we helped Eco Abode improve every inch of their website & brand.
          </h2>
        </div>
        <Container style={{ padding: "0px" }} fluid>
          <Row gutterWidth={25}>
            <Col sm={6}>
              <img
                className={styles.elevated_image}
                src="https://kmg-site-assets.kaycdn.com/clients/eco-abode/ecoabode-homepage-services-cols.png"
                alt="Eco Abode services on homepage"
              />
              <img
                className={styles.elevated_image}
                src="https://kmg-site-assets.kaycdn.com/clients/eco-abode/ecoabode-aboutpage-stuff.png"
                alt="Eco Abode stuff on about page"
              />
              <img
                className={styles.elevated_image}
                src="https://kmg-site-assets.kaycdn.com/clients/eco-abode/ecoabode-aboutpage-hero.png"
                alt="Eco Abode hero section on about page"
              />
            </Col>
            <Col sm={6}>
              <img
                className={styles.elevated_image}
                src="https://kmg-site-assets.kaycdn.com/clients/eco-abode/ecoabode-contact-box.png"
                alt="Eco Abode contact box on contact page"
              />

              <img
                className={styles.elevated_image}
                src="https://kmg-site-assets.kaycdn.com/clients/eco-abode/ecoabode-homepage-section.png"
                alt="Eco Abode section on homepage"
              />
              <img
                className={styles.elevated_image}
                src="https://kmg-site-assets.kaycdn.com/clients/eco-abode/ecoabode-homepage-contact.png"
                alt=""
              />
              <img
                className={styles.elevated_image}
                src="https://kmg-site-assets.kaycdn.com/clients/eco-abode/ecoabode-servicespage-stuff.png"
                alt="Eco ABode stuff on services page"
              />
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Wrapper bg="white" paddingBottom="200px" paddingTop="200px">
        <Container style={{padding:"0px"}}>
          <Row gutterWidth={50}>
            <Col
              md={7}
              style={{
                paddingTop: "50px",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <LineLabel color="#32746D">DOWNLOAD THE FULL CASE STUDY</LineLabel>
              <h2 style={{ paddingBottom: "100px" }}>
                To take a behind the scenes look at our process and learn how we helped increase Eco Abode's lead flow by 75%, download the full case now.
              </h2>
            </Col>
            <Col md={5}>
              <ContentDownload
                cover={"https://kmg-site-assets.kaycdn.com/clients/eco-abode/ecoabode-casestudy-cover@2x.png"}
                coverAlt={"Cover for Eco Abode Official Case Study by Kreative Dreamflow"}
                btnColor={"#104F55"}
              />
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default EcoAbodeCaseStudy;
