import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Wrapper from "../components/Wrapper/Wrapper";
import { Container, Row, Col } from "react-grid-system";
import ContactForm from "../components/ContactForm/ContactForm";
import styles from "../styles/contact.module.css";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact Us | Kreative Dreamflow</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/general/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/general/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/general/favicon-16x16.png"/>
        <link rel="manifest" href="/favicons/general/site.webmanifest"/>
        <script
          type="text/javascript"
          src="https://kit.fontawesome.com/abadd7b058.js"
          crossOrigin="anonymous"
        />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name={"description"} content={"View our hours or drop us a line and one of our customer success manager will get back to you."} />
      </Head>
      <Navbar />
      <Wrapper bg="white" paddingTop="150px" paddingBottom="200px">
        <h1 style={{ paddingBottom: "35px" }}>Contact Us</h1>
        <Container fluid style={{ padding: "0px" }}>
          <Row gutterWidth={0}>
            <Col md={6}>
              <div className={styles.contact_form_section}>
                <p>
                  Leave us a message and one of our client success managers will
                  reach back out to you.
                </p>
                <ContactForm />
              </div>
            </Col>
            <Col md={6}>
              <div className={styles.contact_details}>
                <div className={styles.contact_detail}>
                  <p className={styles.contact_label}>Our business hours</p>
                  <p className={styles.contact_info}>9 am - 5 pm CST</p>
                </div>
                <div className={styles.contact_detail}>
                  <p className={styles.contact_label}>Email us</p>
                  <a href="mailto:kmp@kreative.im">
                    <p className={styles.contact_info}>dreamflow@kreative.im</p>
                  </a>
                </div>
                <div className={styles.contact_detail}>
                  <p className={styles.contact_label}>Call us</p>
                  <a href="tel:8475950793">
                    <p className={styles.contact_info}>(847) 595-0793</p>
                  </a>
                </div>
                <div className={styles.faq}>
                  <p className={styles.faq_header}>
                    Not ready to talk to someone?
                  </p>
                  <p className={styles.faq_link}>
                    Check out our up-to-date <a href="/faqs">FAQs section</a>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Footer />
    </div>
  );
}
