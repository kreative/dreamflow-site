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
      </Head>
      <Navbar />
      <Wrapper bg="#FFD83B" paddingTop="50vh" paddingBottom="10vh">
        <LineLabel color="black">KREATIVE LITEHOST</LineLabel>
        <h1>Worry free, managed hosting plans for your digital presence with incredible speeds.</h1>
        <p>Coming Soon!</p>
      </Wrapper>
      <Footer />
    </div>
  );
}
