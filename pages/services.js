import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Wrapper from "../components/Wrapper/Wrapper";
import LineLabel from "../components/LineLabel/LineLabel";
import ProductCard from "../components/ProductCard/ProductCard";
import styles from "../styles/services.module.css";
import Button from "../components/Button/Button";
import { Col, Container, Row } from "react-grid-system";

const Services = () => {
  return (
    <div>
      <Head>
        <title>Service | Kreative Dreamflow</title>
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

      <Navbar />

      <Wrapper bg="#FFECD0" paddingTop="30vh" paddingBottom="10vh">
        <LineLabel color="black">DREAMFLOW SERVICES</LineLabel>
        <h1>Discover what Dreamflow can do to transform your business</h1>
      </Wrapper>
      <Wrapper bg={"white"} paddingBottom={"50px"} paddingTop={"50px"}>
        <Container style={{ padding: "0px" }} fluid>
          <Row gutterWidth={25}>
            <Col sm={6} xxl={4} style={{ marginBottom: "25px" }}>
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
            <Col sm={6} xxl={4} style={{ marginBottom: "25px" }}>
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
            <Col sm={6} xxl={4} style={{ marginBottom: "25px" }}>
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
            <Col sm={6} xxl={4} style={{ marginBottom: "25px" }}>
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
            <Col sm={6} xxl={4} style={{ marginBottom: "25px" }}>
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
                    href="/channels"
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
            <Col sm={6} xxl={4} style={{ marginBottom: "25px" }}>
              <ProductCard
                bg="white"
                align="center"
                border="1.5px solid #E3E3E3"
                logo="https://kmg-site-assets.kaycdn.com/sitecare-logo-color@4x.png"
                logoWidth="90%"
                alt="Kreative SiteCare logo in Color"
                description="Worry-free Site Maintenance"
                text="Easy to understand plans for site fixes and upgrades to take the stress off your team."
                button={
                  <Button
                    href="/sitecare"
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
          </Row>
        </Container>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default Services;