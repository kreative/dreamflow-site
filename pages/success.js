import Head from "next/link";
import Wrapper from "../components/Wrapper/Wrapper";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button";

const SuccessPage = () => {
  return (
    <div>
      <Head>
        <title>Success! | Kreative Dreamflow</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="text/javascript"
          src="https://kit.fontawesome.com/abadd7b058.js"
          crossorigin="anonymous"
        ></script>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Wrapper bg="#7FE8AB" paddingTop="300px" paddingBottom="100px">
        <h1>The form has been successfully sent!</h1>
        <Button
          href="/"
          fill="black"
          hoverColor="#53504E"
          textColor="white"
          radius="3px"
          border="1px solid black"
          hoverBorder="1px solid #53504E"
          padding="15px 50px"
        >
          Go home
        </Button>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default SuccessPage;
