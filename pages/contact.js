import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Wrapper from "../components/Wrapper/Wrapper";
import { Container, Row, Col } from "react-grid-system";
import ContactForm from "../components/ContactForm/ContactForm";
import styles from "../styles/contact.module.css";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact Dreamflow</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="text/javascript"
          src="https://kit.fontawesome.com/abadd7b058.js"
          crossorigin="anonymous"
        ></script>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>

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
                    <p className={styles.contact_info}>kmp@kreative.im</p>
                  </a>
                </div>
                <div className={styles.contact_detail}>
                  <p className={styles.contact_label}>Call us</p>
                  <a href="tel:5106735179">
                    <p className={styles.contact_info}>(510)-673-5179</p>
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
