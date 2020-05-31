import Head from "next/head";
import Wrapper from "../components/Wrapper/Wrapper";
import Button from "../components/Button/Button";
import LineLabel from "../components/LineLabel/LineLabel";
import { Container, Row, Col } from "react-grid-system";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kreative Dreamflow</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="splash">
        <Wrapper bg="rgba(0,0,0,0)" paddingTop="0px" paddingBottom="0px">
          <h1>Some sort of headline that describes exactly what we do</h1>
          <p>
            {" "}
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy.
          </p>
          <Button
            fill="black"
            textColor="white"
            radius="3px"
            border="1px solid black"
            padding="15px 50px"
            raised={false}
            grow={true}
          >
            Get Started with Dreamflow
          </Button>
        </Wrapper>
      </div>
      <div className="gradient">
        <Wrapper bg="rgba(0,0,0,0)" paddingTop="150px" paddingBottom="150px">
          <Container style={{ padding: "0px" }} fluid>
            <Row gutterWidth={0}>
              <Col sm={6}>
                <LineLabel color="black">THE PROBLEM</LineLabel>
                <h2>Most solutions waste your time - and your money.</h2>
                <p className="external-link">
                  <a href="/why-dreamflow">Learn more about Why Dreamflow?</a>
                </p>
              </Col>
              <Col sm={6}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi etiam dignissim diam quis enim lobortis. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Massa sed elementum tempus egestas sed sed risus pretium quam. Donec pretium vulputate sapien nec sagittis aliquam malesuada. Tincidunt praesent semper feugiat nibh.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi etiam dignissim diam quis enim lobortis. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Massa sed elementum tempus egestas sed sed risus pretium quam. Donec pretium vulputate sapien nec sagittis aliquam malesuada. Tincidunt praesent semper feugiat nibh. 
                </p>
              </Col>
            </Row>
          </Container>
        </Wrapper>
      </div>
      <Wrapper bg="white" paddingTop="150px" paddingBottom="150px">
        <h2 style={{textAlign:"center"}}>Our Products</h2>
      </Wrapper>

      <style jsx>{`
        .splash {
          background-color: red;
          color: white;
          text-align: center;
          height: 80vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .gradient {
          background: rgb(255, 236, 208);
          background: linear-gradient(
            180deg,
            rgba(255, 236, 208, 1) 0%,
            rgba(255, 255, 255, 1) 100%
          );
        }

        .external-link {
          color: #0019FF;
          text-decoration: none;
        }

        .external-link:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
