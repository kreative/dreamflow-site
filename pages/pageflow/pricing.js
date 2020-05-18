import Head from 'next/head';
import FantasiaWrapper from '../../components/Wrapper/Wrapper';
import { Container, Row, Col } from 'react-grid-system';

export default function PageflowPricing() {
  return (
    <div>
      <Head>
        <title>Pageflow Pricing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <FantasiaWrapper>
        <Container>
          <Row gutterWidth={0}>
            <Col sm={6}>
              <p>One of two columns</p>
            </Col>
            <Col sm={6}>
              <p>One of two columns</p>
            </Col>
          </Row>
        </Container>
      </FantasiaWrapper>
    </div>
  )
}