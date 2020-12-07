import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Wrapper from "../components/Wrapper/Wrapper";
import LineLabel from "../components/LineLabel/LineLabel";
import { InlineWidget } from 'react-calendly';

export default function FreeConsultation() {
  return (
    <div>
      <Head>
        <title>FREE Consultation | Kreative Dreamflow</title>
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
        <meta name={"description"} content={"Learn how to grow your traffic with a FREE 30 minute consultation "} />
      </Head>
      <Navbar />
      <Wrapper bg={"#F6F6F4"} paddingTop={"30vh"} paddingBottom={"10vh"}>
        <div style={{ textAlign: "center" }}>
          <LineLabel color={"black"}>Free Consultation</LineLabel>
          <h1>Learn how to grow your traffic in 30 minutes</h1>
        </div>
      </Wrapper>
      <Wrapper bg={"white"} paddingTop={"00px"} paddingBottom={"0px"}>
        <InlineWidget
          styles={{ height: "1000px" }}
          url={"https://calendly.com/guppythegod/dreamflow-consultation-30-min"}
        />
      </Wrapper>
      <Footer />
    </div>
  );
}