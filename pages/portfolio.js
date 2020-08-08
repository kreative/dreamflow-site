import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Wrapper from "../components/Wrapper/Wrapper";
import LineLabel from "../components/LineLabel/LineLabel";
import CaseStudyCard from "../components/CaseStudyCard/CaseStudyCard";
import DreamflowGallery from "../components/DreamflowGallery/DreamflowGallery";
import styles from "../styles/work/home.module.css";

const WorkPage = () => {
  return (
    <div>
      <Head>
        <title>Work | Kreative Dreamflow</title>
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
      <Wrapper bg="#FFECD0" paddingTop="30vh" paddingBottom="10vh">
        <LineLabel color="black">DREAMFLOW PORTFOLIO</LineLabel>
        <h1>Discover what we've done for our clients</h1>
      </Wrapper>
      <Wrapper bg="white" paddingTop="50px" paddingBottom="50px">
        <div>
          <CaseStudyCard
            title="A rental property management company creating the easiest experience for new home owners"
            textColor="white"
            bgImage="https://kmg-site-assets.kaycdn.com/clients/eco-abode/Frame22.png"
            bgColor="black"
            link="/work/eco-abode"
          />
        </div>
      </Wrapper>
      <Wrapper bg={"white"} paddingTop={"50px"} paddingBottom={"100px"}>
        <DreamflowGallery />
      </Wrapper>
      <Footer />
    </div>
  );
};

export default WorkPage;
