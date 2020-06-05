import Head from "next/head";
import Wrapper from "../../components/Wrapper/Wrapper";
import Footer from "../../components/Footer/Footer";
import LineLabel from "../../components/LineLabel/LineLabel";
import ContactCard from "../../components/ContactCard/ContactCard";
import { Container, Row, Col } from "react-grid-system";

export default function ContactKopy() {
  return (
    <div>
      <Head>
        <title>Get in touch | Kopy | Dreamflow</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="text/javascript"
          src="https://kit.fontawesome.com/abadd7b058.js"
          crossorigin="anonymous"
        ></script>
      </Head>

      <Wrapper bg="#D1E8FF" paddingTop="200px" paddingBottom="50px">
        <Container style={{ padding: "0px" }} fluid>
          <Row gutterWidth={0}>
            <Col sm={8}>
              <div className="header-wrapper">
                <LineLabel color="black">GET IN TOUCH</LineLabel>
                <h1>
                  Fill out the form and our people will reach out to you shortly
                </h1>
              </div>
            </Col>
            <Col sm={4}>
              <div className="contactcard-wrapper">
                <ContactCard buttonText="Contact Kopy" name="contact-kopy" />
              </div>
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <div className="spacer"></div>

      <Footer />

      <style jsx>{`
        .header-wrapper {
          padding-right: 100px;
        }

        .contactcard-wrapper {
          margin-bottom: -250px;
        }

        .spacer {
          height: 50vh;
        }

        @media screen and (max-width: 600px) {
          .header-wrapper {
            padding-right: 0px;
          }
        }
      `}</style>
    </div>
  );
}
