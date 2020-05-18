import Head from "next/head";
import Wrapper from "../../components/Wrapper/Wrapper";
import LineLabel from '../../components/LineLabel/LineLabel';
import Button from '../../components/Button/Button';
import { Container, Row, Col } from "react-grid-system";
import styles from '../../styles/buttonGroup.module.css';

export default function PageflowHome() {
  return (
    <div>
      <Head>
        <title>Pageflow</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper bg="#C8B5FD" paddingBottom="100px" paddingTop="100px">
        <Container style={{ padding: "0px" }}>
          <Row gutterWidth={0}>
            <Col sm={6} style={{justifyContent:"center",display:"flex",flexDirection:"column"}}>
              <LineLabel color="black">PAGEFLOW</LineLabel>
              <h1 style={{paddingBottom:"20px"}}>Customers aren't just going to fall into your lap</h1>
              <p>Having a website from 5 years ago isn’t going to cut it. In 2020, you’re going to need a website with a strategy and design that finds you new customers and keep them coming back. With Pageflow, we make your website into a sales-making machine, bringing you leads 24/7.</p>
              <div className={styles.buttonGroup}>
                <Button
                  fill='black'
                  textColor='white'
                  radius='3px'
                  border='1px solid black'
                  padding='15px 50px'
                  raised={true}
                  grow={true}
                >View Pricing</Button>
                <Button
                  fill='rgba(12, 12, 12, 0.05)'
                  textColor='black'
                  radius='3px'
                  border='1px solid black'
                  padding='15px 50px'
                >Contact Us</Button>
              </div>
            </Col>
            <Col sm={6} style={{textAlign:"right"}}>
              <img className="image1" src="http://kmg-site-assets.kaycdn.com/fall.gif" alt="falling gif"/>
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Wrapper bg="white" paddingBottom="150px" paddingTop="150px">
        <Container style={{padding:"0px"}}>
          <LineLabel color="black">THE PROBLEM</LineLabel>
          <Row gutterWidth={0} style={{marginTop:"20px"}}>
            <Col sm={6}>
              <h2>Every other solution wastes your time - and money​</h2>
            </Col>
            <Col sm={6}>
              <p className="padded-text">We get it. Agencies, freelancers, and even DIY solutions like Wix or Squarespace suck. Either it's too expensive, or too slow, or too unreliable. Even worse, you go with one of these providers, and in a year or two, have to go back, because they sold you something that looked fancy, but didn't do the job of getting your business in front of new customers.<br/><br/>
              Our company decided to open up Pageflow was because we dealt with the same thing: an over-promising, under-delivering agency. No part of their strategy included "sales" or "lead-generation", it was always about making things look pretty or "modern" or trying to upsell us on an extra animation we didn't need.</p>
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Wrapper bg="#F8F5F2" paddingTop="150px" paddingBottom="150px">
        <Container style={{padding:"0px"}}>
          <Row gutterWidth={0}>
            <Col sm={6}>
              <LineLabel color="black">THE SOLUTION</LineLabel>
              <h2>Pageflow delivers a website that sells and looks better than your compeition​</h2>
              <p>Investing in a website just to have it float around in space doesn't do your business any good. Pageflow does things differently by removing all the red-tape and rubbish and using digital psychology and our in-house talent with more than a decade of experience to bring you beautiful design with useful, sales-driven features that give your company an edge over your competitors.</p>
            </Col>
            <Col sm={6}>
              <img className="image1" src="https://kmg-site-assets.kaycdn.com/heart-eyes.gif" alt="George Clooney Heart Eyes"/>
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <style jsx>{`
        .image1 {
          width: 100%;
          padding-left: 75px;
        }

        .padded-text {
          padding-left: 50px;
        }

        @media screen and (max-width: 600px) {
          .image1 {
            padding-left: 0px;
          }

          .padded-text {
            padding-left: 0px;
            padding-top: 20px;
          }
        }
      `}</style>
    </div>
  );
}
