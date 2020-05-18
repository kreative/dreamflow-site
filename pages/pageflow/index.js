import Head from "next/head";
import Wrapper from "../../components/Wrapper/Wrapper";
import LineLabel from '../../components/LineLabel/LineLabel';
import Button from '../../components/Button/Button';
import { Container, Row, Col } from "react-grid-system";

export default function PageflowHome() {
  return (
    <div>
      <Head>
        <title>Pageflow</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper bg="white" paddingBottom="75px" paddingTop="75px">
        <Container style={{ padding: "0px" }}>
          <Row gutterWidth={0}>
            <Col sm={6} style={{alignContent:"center"}}>
              <LineLabel color="black">PAGEFLOW</LineLabel>
              <h1>Customers aren't just going to fall into your lap</h1>
              <p>Having a website from 5 years ago isn’t going to cut it. In 2020, you’re going to need a website with a strategy and design that finds you new customers and keep them coming back. With Pageflow, we make your website into a sales-making machine, bringing you leads 24/7.</p>
              <Button>View Pricing</Button>
            </Col>
            <Col sm={6} style={{textAlign:"right"}}>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </div>
  );
}
