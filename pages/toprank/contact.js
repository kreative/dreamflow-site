import Head from 'next/head';
import Wrapper from '../../components/Wrapper/Wrapper';
import Footer from '../../components/Footer/Footer';
import LineLabel from '../../components/LineLabel/LineLabel';
import ContactCard from '../../components/ContactCard/ContactCard';
import { Container, Row, Col } from 'react-grid-system';
import Contact from '../contact';

export default function ContactTopRank() {
  return (
    <div>
      <Head>
        <title>Get in touch | TopRank | Dreamflow</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="splash">
        <Wrapper bg="rgba(0,0,0,0)" paddingTop="200px" paddingBottom="50px">
          <Container style={{padding:"0px"}} fluid>
            <Row gutterWidth={0}>
              <Col sm={8}>
                <div className="header-wrapper">
                  <LineLabel color="black">GET IN TOUCH</LineLabel>
                  <h1>Fill out the form and our people will reach out to you shortly</h1>
                </div>
              </Col>
              <Col sm={4}>
                <div className="contactcard-wrapper">
                  <ContactCard
                    buttonText="Contact TopRank"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </Wrapper>
      </div>
      <div className="spacer"></div>

      <Footer/>

      <style jsx>{`
        .splash {
          background-color: lightgrey;
        }

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
  )
}