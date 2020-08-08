import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Wrapper from "../components/Wrapper/Wrapper";
import DreamflowGallery from "../components/DreamflowGallery/DreamflowGallery";

const PortfolioPage = () => {
  return (
    <div>
      <Head>
        <title>Portfolio | Kreative Dreamflow</title>
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
        <meta name={"description"} content={"Get motivated for your new website or branding project with our inspiring prototypes and product designs developed by Kreative Dreamflow"} />
      </Head>
      <Navbar />
      <Wrapper bg="#FFECD0" paddingTop="30vh" paddingBottom="10vh">
        <h1>Dreamflow Portfolio</h1>
      </Wrapper>
      <Wrapper bg={"white"} paddingTop={"50px"} paddingBottom={"100px"}>
        <DreamflowGallery />
      </Wrapper>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
