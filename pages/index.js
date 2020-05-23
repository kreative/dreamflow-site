import Head from "next/head";
import Wrapper from "../components/Wrapper/Wrapper";
import { Container, Row, Col } from "react-grid-system";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pageflow</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
        <h1>KWS</h1>
        <Container style={{padding:"0px"}}>
          <Row gutterWidth={0}>
            <Col sm={6}>
              <p>One of two columns</p>
            </Col>
            <Col sm={6}>
              <p>One of two columns</p>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </div>
  );
}
