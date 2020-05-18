import Head from 'next/head';
import Wrapper from '../components/Wrapper/Wrapper';
import { Container, Row, Col } from 'react-grid-system';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pageflow</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Wrapper>
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
      </Wrapper>
    </div>
  )
}
