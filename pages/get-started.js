import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Wrapper from "../components/Wrapper/Wrapper";

export default function GetStarted() {
  return (
    <div>
      <Head>
        <title>Get Started | Kreative Dreamflow</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="text/javascript"
          src="https://kit.fontawesome.com/abadd7b058.js"
          crossorigin="anonymous"
        ></script>
      </Head>
      <Wrapper bg="#E7F2FD" paddingTop="300px" paddingBottom="100px">
        <h1>Get Started with Dreamflow</h1>
        <p>Fill out the form below and our team will get back to you the next business day!</p>
      </Wrapper>
      <Wrapper bg="white" paddingBottom="100px" paddingTop="100px">
        
      </Wrapper>
      <Footer />
      <style jsx>{``}</style>
    </div>
  );
}
