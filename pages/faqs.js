import Head from "next/head";
import Navabr from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Wrapper from "../components/Wrapper/Wrapper";
import FAQs from "../components/FAQs/FAQs";
import styles from "../styles/faqs.module.css";
import {
  generalFAQs,
  pageflowFAQs
} from "../utils/faqLists";

const FAQsPage = () => {
  return (
    <div>
      <Head>
        <title>FAQs | Kreative Dreamflow</title>
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
          crossorigin="anonymous"
        ></script>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Navabr />
      <Wrapper bg="#FFECD0" paddingTop="250px" paddingBottom="50px">
        <h1>Frequently asked questions.</h1>
      </Wrapper>
      <Wrapper bg="white" paddingTop="50px" paddingBottom="100px">
        <div className={styles.faqs_wrapper}>
          <h3 className={styles.label}>General</h3>
          <FAQs faqs={generalFAQs} />
          <h3 className={styles.label}>Pageflow</h3>
          <FAQs faqs={pageflowFAQs} />
        </div>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default FAQsPage;
