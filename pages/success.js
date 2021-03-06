import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Wrapper from "../components/Wrapper/Wrapper";
import Footer from "../components/Footer/Footer";

const SuccessPage = () => {
  return (
    <div>
      <Head>
        <title>Success! | Kreative Dreamflow</title>
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
      <Wrapper
        bg="#7FE8AB"
        paddingTop="300px"
        paddingBottom="100px"
      >
        <h1 style={{ textAlign: "center" }}>The form has been successfully sent!</h1>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default SuccessPage;
