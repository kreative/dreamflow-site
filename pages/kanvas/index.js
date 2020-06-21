import Head from "next/head";
import Wrapper from "../../components/Wrapper/Wrapper";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import LineLabel from "../../components/LineLabel/LineLabel";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import Wave from "../../components/Wave/Wave";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Container, Row, Col } from "react-grid-system";
import styles from "../../styles/kanvas/home.module.css";

export default function Kanvas() {
  return (
    <div>
      <Head>
        <title>Kanvas | Kreative Dreamflow</title>
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
      <Navbar />
      <Wrapper bg="#A7FAEB" paddingTop="300px" paddingBottom="100px">
        <Container style={{ padding: "0px" }} fluid>
          <Row gutterWidth={0}>
            <Col md={9}>
              <LineLabel color="black">WELCOME TO KANVAS</LineLabel>
              <h1>Affordable graphic design, on demand.</h1>
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Wrapper bg="#F2FFFD" paddingBottom="150px" paddingTop="150px">
        <Container style={{ padding: "0px" }} fluid>
          <Row gutterWidth={0}>
            <Col md={6}>
              <video
                className={styles.why_image}
                autoPlay
                loop
                muted
                playsInline
              >
                <source
                  src="https://kmg-site-assets.kaycdn.com/sribble-drawing.webm"
                  type="video/webm"
                />
                <source
                  src="https://kmg-site-assets.kaycdn.com/sribble-drawing.mp4"
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
              <LineLabel color="blac">WHY KANVAS?</LineLabel>
              <h2>
                Design is hard. Don't let it stop you from making your ideas a reality.
              </h2>
              <p>
                By using Kanvas, it's like having your own full time design team on standby. As more and more companies adopt graphic design into their product strategy, consumer demand for aesthetic and beautiful websites, apps, presentations, etc will grow. This will leave many companies behind. With Kanvas, you won't be one of them!
              </p>
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Wave color="white">
        <path
          className="wave-fill"
          d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
        c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
        c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
        ></path>
      </Wave>
      <div className="products-section">
        <Wrapper bg="rgba(0,0,0,0)" paddingTop="150px" paddingBottom="150px">
          <div
            style={{
              textAlign: "center",
            }}
          >
            <h2>Kanvas Products</h2>
          </div>
          <Container style={{ padding: "0px" }} fluid>
            <Row gutterWidth={25}>
              <Col md={6} className={styles.kanvas_product}>
                <ProductCard
                  bg="white"
                  border="1.5px solid #E3E3E3"
                  header="Kreative Kanvas Logos"
                  text={`Get a custom designed, original logo for your business, organization, or brand. Our team works directly with you to put together a logo you'll truly love.`}
                  button={
                    <Button
                      fill="#029E82"
                      textColor="white"
                      hoverColor="#00DAB3"
                      radius="3px"
                      border="1px solid #029E82"
                      hoverBorder="1px solid #00DAB3"
                      padding="20px 50px"
                      raised={false}
                      grow={false}
                      width="100%"
                    >
                      Get started with Logos
                    </Button>
                  }
                />
              </Col>
              <Col md={6} className={styles.kanvas_product}>
                <ProductCard
                  bg="white"
                  border="1.5px solid #E3E3E3"
                  header="Kreative Kanvas Graphics"
                  text={`Order graphic designs to use for your next website, app, or presentations. You get to keep full rights to the source files and turn around times are quick!`}
                  button={
                    <Button
                      fill="#029E82"
                      textColor="white"
                      hoverColor="#00DAB3"
                      radius="3px"
                      border="1px solid #029E82"
                      hoverBorder="1px solid #00DAB3"
                      padding="20px 50px"
                      raised={false}
                      grow={false}
                      width="100%"
                    >
                      Get started with Graphics
                    </Button>
                  }
                />
              </Col>
            </Row>
          </Container>
        </Wrapper>
      </div>
      <Wrapper bg="#FFF9F1" paddingBottom="100px" paddingTop="100px">
        <ParallaxProvider>
          <ParallaxBanner
            layers={[
              {
                image: "https://kmg-site-assets.kaycdn.com/artsy.jpg",
                amount: 0.4,
                expanded: false,
              },
            ]}
            style={{
              height: "700px",
            }}
          />
        </ParallaxProvider>
      </Wrapper>
      <Wrapper bg="white" paddingTop="250px" paddingBottom="150px">
        <div style={{textAlign:"center"}}>
          <LineLabel color="black">START NOW</LineLabel>
          <h2>Don't waste your money hiring your own designers</h2>
          <div style={{ marginTop: "35px" }}>
            <Button
              href="/kanvas/contact"
              fill="black"
              textColor="white"
              radius="3px"
              border="1px solid black"
              padding="15px 50px"
              raised={true}
              grow={true}
            >
              Get started
            </Button>
          </div>
        </div>
      </Wrapper>
      <Footer />
    </div>
  );
}
