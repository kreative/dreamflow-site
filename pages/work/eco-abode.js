import Head from "next/head";
import Wrapper from "../../components/Wrapper/Wrapper";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import LineLabel from "../../components/LineLabel/LineLabel";
import ProductCard from "../../components/ProductCard/ProductCard";
import Button from "../../components/Button/Button";
import IconBox from "../../components/IconBox/IconBox";
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
} from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/work/eco-abode.module.css";

const EcoAbodeCaseStudy = () => {
  return (
    <div>
      <Head>
        <title>Eco Abode | Work | Kreative Dreamflow</title>
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
      <Wrapper bg="white" paddingTop="200px" paddingBottom="100px">
        <div className={styles.hero}>
          <div>
            <LineLabel color="#32746D">Eco Abode</LineLabel>
            <h1 style={{ paddingBottom: "100px" }}>
              A rental property management company creating the simplest
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
                "https://images.unsplash.com/photo-1592410811000-80b57d6f18ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1717&q=80",
              amount: 0.7,
            },
          ]}
          style={{
            height: "700px",
          }}
        />
      </ParallaxProvider>
      <Wrapper bg="white" paddingTop="250px" paddingBottom="250px">
        <Container style={{ padding: "0px" }} fluid>
          <Row gutterWidth={20}>
            <Col sm={12} md={4}>
              <h2 style={{ paddingBottom: "50px" }}>The Challenge</h2>
            </Col>
            <Col sm={12} md={8}>
              <p className={styles.larger_p} style={{ paddingBottom: "20px" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <a className={styles.link} href="https://ecoabodellc.com">
                <span style={{ marginRight: "10px" }}>View Project</span>
                <FontAwesomeIcon icon={faExternalLinkAlt} size="sm" />
              </a>
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Wrapper bg="#EEF8F7" paddingTop="200px" paddingBottom="200px">
        <div className={styles.project_video}></div>
      </Wrapper>
      <Wrapper bg="" paddingTop="200px" paddingBottom="200px">
        <Container style={{ padding: "0px" }} fluid>
          <Row gutterWidth={0}>
            <Col sm={9}>
              <LineLabel color="#32746D">BEFORE DREAMFLOW</LineLabel>
              <h2 className={styles.larger_h1}>
                Explain how bad the website was
              </h2>
              <p className={styles.larger_p} style={{ paddingBottom: "200px" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </Col>
            <Col sm={3}></Col>
          </Row>
        </Container>
        <Container style={{ padding: "0px" }} fluid>
          <Row gutterWidth={0}>
            <Col sm={6}>
              <img className={styles.image} src="" alt="" />
            </Col>
            <Col sm={6} style={{ paddingTop: "100px" }}>
              <div className={styles.image_group}>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </p>
              </div>
              <div className={styles.image_group}>
                <img className={styles.image} src="" alt="" />
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Wrapper bg="#F8FBF9" paddingTop="150px" paddingBottom="150px">
        <div className={styles.testimonial_section}>
          <FontAwesomeIcon
            icon={faQuoteLeft}
            size="4x"
            style={{ color: "#32746D" }}
          />
          <h2 style={{ paddingTop: "50px" }}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </h2>
          <p>Pankaj Gupta, Founder of Eco Abode</p>
        </div>
      </Wrapper>
      <ParallaxProvider>
        <ParallaxBanner
          layers={[
            {
              image:
                "https://images.unsplash.com/photo-1592410811000-80b57d6f18ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1717&q=80",
              amount: 0.7,
            },
          ]}
          style={{
            height: "700px",
          }}
        />
      </ParallaxProvider>
      <Wrapper bg="" paddingTop="200px" paddingBottom="200px">
        <Container style={{ padding: "0px" }} fluid>
          <Row gutterWidth={0}>
            <Col sm={9}>
              <LineLabel color="#32746D">AFTER DREAMFLOW</LineLabel>
              <h2 className={styles.larger_h1}>
                Explain how we did the greatest possible job ever
              </h2>
              <p className={styles.larger_p} style={{ paddingBottom: "200px" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </Col>
            <Col sm={3}></Col>
          </Row>
        </Container>
        <Container style={{ padding: "0px" }} fluid>
          <Row gutterWidth={0}>
            <Col sm={6} style={{ paddingTop: "100px" }}>
              <div className={styles.image_group}>
                <img className={styles.image} src="" alt="" />
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </p>
              </div>
              <div className={styles.image_group}>
                <img className={styles.image} src="" alt="" />
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </p>
              </div>
              <div className={styles.image_group}>
                <img className={styles.image} src="" alt="" />
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </p>
              </div>
            </Col>
            <Col sm={6}>
              <div className={styles.image_group}>
                <img className={styles.image} src="" alt="" />
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </p>
              </div>
              <div className={styles.image_group}>
                <img className={styles.image} src="" alt="" />
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </p>
              </div>
              <div className={styles.image_group}>
                <img className={styles.image} src="" alt="" />
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <ParallaxProvider>
        <ParallaxBanner
          layers={[
            {
              image:
                "https://images.unsplash.com/photo-1592410811000-80b57d6f18ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1717&q=80",
              amount: 0.7,
            },
          ]}
          style={{
            height: "700px",
          }}
        />
      </ParallaxProvider>
      <Wrapper bg="white" paddingBottom="200px" paddingTop="200px">
        <LineLabel color="#32746D">Products Used</LineLabel>
        <h2 style={{ paddingBottom: "50px" }}>
          Our vast selection of products allowed Eco Abode to get everything
          they needed with one partner, Dreamflow.
        </h2>
        <Container style={{ padding: "0px" }} fluid>
          <Row gutterWidth={25}>
            <Col sm={4} xxl={3}>
              <ProductCard
                bg="white"
                align="center"
                border="1.5px solid #E3E3E3"
                raised={true}
                logo="https://kmg-site-assets.kaycdn.com/toprank-color.webp"
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
                    See TopRank
                  </Button>
                }
              />
            </Col>
            <Col sm={4} xxl={3}>
              <ProductCard
                bg="white"
                align="center"
                border="1.5px solid #E3E3E3"
                logo="https://kmg-site-assets.kaycdn.com/pageflow-color.webp"
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
                    See Pageflow
                  </Button>
                }
              />
            </Col>
            <Col sm={4} xxl={3}>
              <ProductCard
                bg="white"
                align="center"
                border="1.5px solid #E3E3E3"
                logo="https://kmg-site-assets.kaycdn.com/kopy-color.webp"
                logoWidth="80%"
                alt="Kreative Kopy logo in Navy Blue"
                description="Copywriting"
                text="Affordable and attention grabbing copywriting for your blog posts or webpages."
                button={
                  <Button
                    href="/kopy"
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
                    See Kopy
                  </Button>
                }
              />
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Wrapper bg="#BBE2DE" paddingBottom="200px" paddingTop="200px">
        <div style={{ textAlign: "center" }}>
          <LineLabel color="#32746D">RESULTS Delivered</LineLabel>
          <h2 style={{ paddingBottom: "100px" }}>
            Dreamflow delivered everything required and more
          </h2>
        </div>
        <Container style={{ padding: "0px" }} fluid>
          <Row gutterWidth={100}>
            <Col md={4}>
              <IconBox
                icon={faCalendarCheck}
                iconColor="black"
                header="Strategy Session"
                text={`Our team works with you to figure out what keywords to rank for, 
                      what locations to target, and how to get the most value out of TopRank`}
                align="center"
                iconAlign="center"
                size="4x"
              />
            </Col>
            <Col md={4} className={styles.iconbox}>
              <IconBox
                icon={faWallet}
                iconColor="black"
                header="Site Optimization"
                text={`The TopRank team then works to optimize your website,
                      keeping you in the loop every step`}
                align="center"
                iconAlign="center"
                size="4x"
              />
            </Col>
            <Col md={4} className={styles.iconbox}>
              <IconBox
                icon={faMoneyBillWave}
                iconColor="black"
                header="Ranking"
                text={`After a few weeks to a few months of work from the TopRank team,
                      you'll start seeing your website rankings go up and new traffic
                      coming in!`}
                align="center"
                iconAlign="center"
                size="4x"
              />
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Wrapper bg="white" paddingBottom="150px" paddingTop="150px">
        <ParallaxProvider>
          <ParallaxBanner
            layers={[
              {
                image:
                  "https://images.unsplash.com/photo-1592410811000-80b57d6f18ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1717&q=80",
                amount: 1,
              },
            ]}
            style={{
              height: "500px",
            }}
          />
        </ParallaxProvider>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default EcoAbodeCaseStudy;
