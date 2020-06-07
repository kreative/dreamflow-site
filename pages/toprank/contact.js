import Head from "next/head";
import Wrapper from "../../components/Wrapper/Wrapper";
import Footer from "../../components/Footer/Footer";
import LineLabel from "../../components/LineLabel/LineLabel";
import ContactCard from "../../components/ContactCard/ContactCard";
import { Container, Row, Col } from "react-grid-system";
import styles from "../../styles/toprank/contact.module.css";

export default function ContactTopRank() {
  return (
    <div>
      <Head>
        <title>Get in touch | TopRank | Dreamflow</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="text/javascript"
          src="https://kit.fontawesome.com/abadd7b058.js"
          crossorigin="anonymous"
        ></script>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>

      <Wrapper bg="#ABEEC7" paddingTop="200px" paddingBottom="50px">
        <Container style={{ padding: "0px" }} fluid>
          <Row gutterWidth={0}>
            <Col md={6} lg={8}>
              <div className={styles.header_wrapper}>
                <LineLabel color="black">GET IN TOUCH</LineLabel>
                <h1>
                  Fill out the form and our people will reach out to you shortly
                </h1>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className={styles.contactcard_wrapper}>
                <ContactCard buttonText="Contact TopRank" name="contact-toprank" />
              </div>
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <div className={styles.spacer}></div>
      <Footer />
    </div>
  );
}
