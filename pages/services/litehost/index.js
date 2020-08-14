import Head from "next/head";
import Wrapper from "../../../components/Wrapper/Wrapper";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import Button from "../../../components/Button/Button";
import LineLabel from "../../../components/LineLabel/LineLabel";
import { Container, Row, Col } from "react-grid-system";
import styles from "../../../styles/kanvas/home.module.css";

export default function Kanvas() {
  return (
    <div>
      <Head>
        <title>LiteHost | Kreative Dreamflow</title>
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
        <meta name={"description"} content={"Keep your business within reach of your customers with Kreative LiteHost, our worry free, managed hosting plans for your digital presence with incredible speeds."} />
      </Head>
      <Navbar />
      <Wrapper bg="#FFD83B" paddingTop="30vh" paddingBottom="10vh">
        <LineLabel color="black">KREATIVE LITEHOST</LineLabel>
        <h1>Worry free, managed hosting plans for your digital presence with incredible speeds.</h1>
      </Wrapper>
      <Wrapper bg="white" paddingBottom="250px" paddingTop="250px">
        <Container style={{padding: "0px"}}>
          <LineLabel color="black">THE PROBLEM</LineLabel>
          <Row gutterWidth={50} style={{marginTop: "20px"}}>
            <Col md={6}>
              <h2>Hosting your own website, landing pages, or database can be a real pain​</h2>
            </Col>
            <Col md={6}>
              <p className={styles.padded_text}>
                With marketing campaigns moving online and more and more customers shopping online, your business can't afford any downtime. If your website isn't on 24/7, it could be costing you real money.
                <br/>
                <br/>
                By using Kreative LiteHost as your partner for website, landing page, and database hosting, you won't have to worry about whether your website is online or not, whether your website is loading fast enough or not, or even if everything that goes on in the background is working or not. Let us take care of the hosting, and you can go back to doing what you do best: serving your customers.
              </p>
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Wrapper bg={"#FFFAE4"} paddingBottom="150px" paddingTop="250px">
        <LineLabel color="black">WORK WITH LITEHOST</LineLabel>
        <h2 style={{fontWeight: "bold", paddingBottom: "25px"}}>
          It's simple, easy, and free to get started
        </h2>
        <Button
          href="/get-started"
          fill="black"
          textColor="white"
          radius="3px"
          border="1px solid black"
          padding="15px 50px"
          raised={true}
          grow={true}
        >
          Get Started
        </Button>
      </Wrapper>
      <Footer />
    </div>
  );
}
