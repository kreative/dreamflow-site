import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Wrapper from "../components/Wrapper/Wrapper";
import FAQs from "../components/FAQs/FAQs";
import styles from "../styles/faqs.module.css";

const FAQsPage = ({ faqs }) => {
  return (
    <div>
      <Head>
        <title>FAQs | Kreative Dreamflow</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/general/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/general/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/general/favicon-16x16.png"></link>
        <link rel="manifest" href="/favicons/general/site.webmanifest"></link>
        <script
          type="text/javascript"
          src="https://kit.fontawesome.com/abadd7b058.js"
          crossorigin="anonymous"
        ></script>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>

      <Wrapper bg="#FFECD0" paddingTop="250px" paddingBottom="50px">
        <h1>Frequently asked questions.</h1>
      </Wrapper>
      <Wrapper bg="white" paddingTop="100px" paddingBottom="100px">
        <div className={styles.faqs_wrapper}>
          <FAQs faqs={faqs} />
        </div>
      </Wrapper>
      <Footer />
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("http://dreamflow-cms.kreativekws.com/api/faqs");
  const data = await res.json();
  return { props: { faqs: data.data.faqs } };
};

export default FAQsPage;
