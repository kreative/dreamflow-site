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
        <h2>Eco Abode Case Study</h2>
      </Wrapper>
      <Wrapper bg={"white"} paddingTop={"75px"} paddingBottom={"100px"}>
        <Container style={{padding:"0px"}}>
          <Row gutterWidth={50}>
            <Col sm={4}>
              <ContentDownload
                cover={""}
                coverAlt={""}
                btnColor={"#104F55"}
              />
            </Col>
            <Col sm={1} />
            <Col sm={6}>
              <div className={"text_content"}>
                <h3>Don't miss out on...</h3>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                </p>
                <br />
                <p>
                  The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                </p>
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