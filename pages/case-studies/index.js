import Head from "next/head";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Wrapper from "../../components/Wrapper/Wrapper";
import LineLabel from "../../components/LineLabel/LineLabel";
import CaseStudyCard from "../../components/CaseStudyCard/CaseStudyCard";

const CaseStudiesPage = () => {
  return (
    <div>
      <Head>
        <title>Case Studies | Kreative Dreamflow</title>
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
        <meta name={"description"} cotnent={"Learn more about how Kreative Dreamflow can help your business reach its goals with our collection of case studies from past clients."} />
      </Head>
      <Navbar />
      <Wrapper bg="#FFECD0" paddingTop="30vh" paddingBottom="10vh">
        <LineLabel color="black">DREAMFLOW CASE STUDIES</LineLabel>
        <h1>Discover what we've done for our clients</h1>
      </Wrapper>
      <Wrapper bg="white" paddingTop="50px" paddingBottom="50px">
        <div>
          <CaseStudyCard
            title="A rental property management company creating the easiest experience for new home owners"
            textColor="white"
            bgImage="url('https://kmg-site-assets.kaycdn.com/clients/eco-abode/Frame22.png')"
            bgColor="black"
            link="/case-studies/eco-abode"
          />
        </div>
      </Wrapper>
      <Wrapper bg="white" paddingTop="0px" paddingBottom="50px">
        <div>
          <CaseStudyCard
            title="An HR consultancy with over 30 years of experience that doesn’t break the bank"
            textColor="white"
            bgImage="linear-gradient(to bottom, #F6C37D, #4276EF)"
            bgColor="black"
            link="/case-studies/valens"
          />
        </div>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;
