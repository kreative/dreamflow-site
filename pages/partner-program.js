import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Wrapper from "../components/Wrapper/Wrapper";
import LineLabel from "../components/LineLabel/LineLabel";
import styles from "../styles/partner_program.module.css";
import { Container, Row, Col } from "react-grid-system";
import Button from "../components/Button/Button";

const PartnerProgram = () => {
  return (
    <div>
      <Head>
        <title>Refer a Friend | Kreative Dreamflow</title>
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
        <meta name={"description"} content={""} />
      </Head>
      <Navbar/>

      <div>
        <Wrapper bg={"rgba(0,0,0,0)"} paddingTop={"250px"} paddingBottom={"200px"}>
          <img
            src={""}
            alt={"Kreative Dreamflow"}
            className={styles.df_logo}
          />
          <img
            src={"https://kmg-site-assets.kaycdn.com/Dreamflow%20Partner%20Program%20-%20No%20Logo.png"}
            alt={"Kreative Dreamflow Partner Program Logo"}
            className={styles.pp_logo}
          />
        </Wrapper>
      </div>

      <Wrapper bg={"white"} paddingTop={"250px"} paddingBottom={"250px"}>
        <div className={styles.right_text}>
          <LineLabel color={"black"}>How it works</LineLabel>
          <h2>Three easy steps towards a win-win-win</h2>
        </div>
        <Container style={{ padding: "0px" }} fluid>
          <Row nogutter className={styles.step_content}>
            <Col md={4}>
              <img
                src={"https://kmg-site-assets.kaycdn.com/chat-ikon.png"}
                alt={""}
                className={styles.step_image}
              />
              <p>Find other small businesses in need of growing their organization online and show them how Kreative Dreamflow can offer it's support and services. Create an email introduction between Dreamflow and the business to initiate a referral.</p>
            </Col>
          </Row>
          <Row nogutter className={styles.step_content}>
            <Col md={4}></Col>
            <Col md={4}>
              <img
                src={"https://kmg-site-assets.kaycdn.com/giving-money-ikon.png"}
                alt={""}
                className={styles.step_image}
              />
              <p>When someone you refer becomes a client with Dreamflow, they get a 5% discount off any contract that they can use when first signing up or in the future. We'll then give you the option to either <span style={{ fontWeight: "bold" }}>recieve 7% of the contract value in cash or 15% as credit</span> for any future projects with Dreamflow.</p>
            </Col>
          </Row>
          <Row nogutter>
            <Col md={8}></Col>
            <Col md={4}>
              <img
                src={"https://kmg-site-assets.kaycdn.com/rocket-ikon.png"}
                alt={""}
                className={styles.step_image}
              />
              <p>There's no limit to how many small businesses you can refer to Dreamflow, and no limit on how much you can earn. Businessess everywhere need access to quality marketing and growth services at a fair price.</p>
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Wrapper bg={"#111111"} paddingTop={"150px"} paddingBottom={"150px"}>
        <div style={{ textAlign: "center" }}>
          <h2 style={{ color: "white", paddingBottom: "20px" }} >Ready to get started? Drop us a line.</h2>
          <Button
            href="/contact-us"
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
      </Wrapper>
      <Footer />
    </div>
  );
}

export default PartnerProgram;