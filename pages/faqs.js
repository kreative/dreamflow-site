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

      <Wrapper bg="#FFECD0" paddingTop="200px" paddingBottom="50px">
        <h1>Frequently asked questions.</h1>
      </Wrapper>
      <Wrapper bg="white" paddingTop="100px" paddingBottom="100px">
        <FAQs />
      </Wrapper>
    </div>
  );
}
