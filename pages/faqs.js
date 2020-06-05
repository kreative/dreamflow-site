import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Wrapper from "../components/Wrapper/Wrapper";
import FAQs from "../components/FAQs/FAQs";

const FAQsPage = ({ faqs }) => {
  return (
    <div>
      <Head>
        <title>FAQs | Kreative Dreamflow</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="text/javascript"
          src="https://kit.fontawesome.com/abadd7b058.js"
          crossorigin="anonymous"
        ></script>
      </Head>

      <Wrapper bg="#FFECD0" paddingTop="250px" paddingBottom="50px">
        <h1>Frequently asked questions.</h1>
      </Wrapper>
      <Wrapper bg="white" paddingTop="100px" paddingBottom="100px">
        <div className="faqs-wrapper">
          <FAQs faqs={faqs} />
        </div>
      </Wrapper>
      <Footer />
      <style jsx>{`
        .faqs-wrapper {
          margin-left: 100px;
        }

        @media screen and (max-width: 600px) {
          .faqs-wrapper {
            margin-left: 0px;
          }
        }
      `}</style>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("http://dreamflow-cms.kreativekws.com/api/faqs");
  const data = await res.json();
  return { props: { faqs: data.data.faqs } };
};

export default FAQsPage;
