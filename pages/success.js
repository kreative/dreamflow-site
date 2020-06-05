import Head from "next/link";
import Wrapper from "../components/Wrapper/Wrapper";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button";

const SuccessPage = () => {
  return (
    <div>
      <Wrapper bg="#7FE8AB" paddingTop="300px" paddingBottom="100px">
        <h1>The form has been successfully sent!</h1>
        <Button
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
