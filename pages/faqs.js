import Head from "next/head";
import Wrapper from "../components/Wrapper/Wrapper";
import FAQs from "../components/FAQs/FAQs";

export default function Home() {
  return (
    <div>
      <Head>
        <title>FAQs | Kreative Dreamflow</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper bg="#FFECD0" paddingTop="250px" paddingBottom="50px">
        <h1>Frequently asked questions.</h1>
      </Wrapper>
      <Wrapper bg="white" paddingTop="100px" paddingBottom="100px">
        <div className="faqs-wrapper">
          <FAQs />
        </div>
      </Wrapper>
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
}
