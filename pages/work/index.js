import Head from "next/head";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Wrapper from "../../components/Wrapper/Wrapper";
import LineLabel from "../../components/LineLabel/LineLabel";
import CaseStudyCard from "../../components/CaseStudyCard/CaseStudyCard";
import DreamflowGallery from "../../components/DreamflowGallery/DreamflowGallery";
import styles from "../../styles/work/home.module.css";

const WorkPage = () => {
  return (
    <div>
      <Head>
        <title>Work | Kreative Dreamflow</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/general/apple-touch-icon.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/general/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/general/favicon-16x16.png"
        ></link>
        <link rel="manifest" href="/favicons/general/site.webmanifest"></link>
        <script
          type="text/javascript"
          src="https://kit.fontawesome.com/abadd7b058.js"
          crossOrigin="anonymous"
        ></script>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Navbar />
      <Wrapper bg="#FFECD0" paddingTop="250px" paddingBottom="50px">
        <LineLabel color="black">OUR WORK</LineLabel>
				<h1>Discover what we've done for our clients</h1>
      </Wrapper>
			<Wrapper bg="white" paddingTop="150px" paddingBottom="150px">
        <div>
          <h2>Website Design Case Studies</h2>
          <CaseStudyCard
            title="A rental property management company creating the easiest experience for new home owners"
            textColor="white"
            bgImage="https://kmg-site-assets.kaycdn.com/clients/eco-abode/Frame22.png"
            bgColor="black"
            link="/work/eco-abode"
          />
        </div>
        <h2 className={styles.title}>Logo Gallery</h2>
        <DreamflowGallery />
			</Wrapper>
			<Footer />
    </div>
  );
};

export default WorkPage;
