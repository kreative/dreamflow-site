import Head from "next/head";
import Wrapper from "../../../components/Wrapper/Wrapper";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import LineLabel from "../../../components/LineLabel/LineLabel";
import ContentDownload from "../../../components/ContentDownload/ContentDownload";
import { Container, Row, Col } from "react-grid-system";

const EcoAbodeCaseStudyDownload = () => {
  return (
    <div>
      <Head>
        <title> Download Eco Abode Case Study | Downloads | Kreative Dreamflow</title>
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
        <meta content="width=device-width, initial-scale=1" name="viewport"/>
        <meta name={"description"} content={"Take a look at how Kreative Dreamflow helped, Eco Abode, a local rental property management company get new customers with a new website and brand identity with a copy of the Case Study"}/>
      </Head>
      <Navbar />
      <Wrapper bg={"#BBE2DE"} paddingTop={"30vh"} paddingBottom={"10vh"}>
        <LineLabel color={"black"}>DOWNLOAD CASE STUDY</LineLabel>
        <h2>Official Eco Abode Case Study by Kreative Dreamflow</h2>
      </Wrapper>
      <Wrapper bg={"white"} paddingTop={"75px"} paddingBottom={"100px"}>
        <Container style={{padding:"0px"}}>
          <Row gutterWidth={50}>
            <Col md={5}>
              <ContentDownload
                cover={"https://kmg-site-assets.kaycdn.com/clients/eco-abode/ecoabode-casestudy-cover@2x.png"}
                coverAlt={"Cover for Eco Abode Official Case Study by Kreative Dreamflow"}
                btnColor={"#104F55"}
              />
            </Col>
            <Col md={7} style={{paddingTop: "50px"}}>
              <div className={"text_content"}>
                <LineLabel color={"black"}>FREE DOWNLOAD</LineLabel>
                <h3 style={{paddingBottom: "15px"}}>A behind the scenes look at the Kreative Dreamflow process at work.</h3>
                <div
                  style={{
                    lineHeight: "10px",
                    fontSize: "1.1em"
                  }}
                >
                  <p>
                    Eco Abode is a rental property management business started in 2019. When starting, they were focused on client experience and generating leads in their community; a website was the last thing on their mind. They put together a small, one-page website to get started with nothing more than a contact page. However, when the COVID19 pandemic hit, they realized they needed to shift their marketing strategy online and build a new website that can correctly represent their brand and help generate new customers.
                  </p>
                  <br />
                  <p>
                    After doing some research on their own and talking to other marketing agencies in the area, they landed on Kreative Dreamflow for our customer-centric design, transparent pricing, and affordable rates. In this official case study you will take a peek behind the curtains of our process on building a new and improved brand and website for Eco Abode.
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

export default EcoAbodeCaseStudyDownload;