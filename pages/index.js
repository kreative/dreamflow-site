import Head from 'next/head';
import Wrapper from '../components/Wrapper/Wrapper';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pageflow</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Wrapper>
        <p>Welcome to Pageflow</p>
      </Wrapper>
    </div>
  )
}
