import Head from "next/head";
import Wrapper from "../../components/Wrapper/Wrapper";
import Footer from "../../components/Footer/Footer";
import LineLabel from "../../components/LineLabel/LineLabel";
import ContactCard from "../../components/ContactCard/ContactCard";
import { Container, Row, Col } from "react-grid-system";
import styles from "../../styles/kopy/contact.module.css";

export default function ContactKopy() {
  return (
    <div>
      <Head>
        <title>Get in touch | Kopy | Dreamflow</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/general/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/general/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/general/favicon-16x16.png"></link>
        <link rel="manifest" href="/favicons/general/site.webmanifest"></link>
        <script
          type="text/javascript"
          src="https://kit.fontawesome.com/abadd7b058.js"
          crossorigin="anonymous"
        ></script>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>

      <Wrapper bg="#D1E8FF" paddingTop="200px" paddingBottom="50px">
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
                <ContactCard buttonText="Contact Kopy" name="contact-kopy" />
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
