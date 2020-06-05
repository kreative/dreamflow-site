import Head from 'next/head';
import Footer from "../components/Footer/Footer";
import Wrapper from "../components/Wrapper/Wrapper";
import { Container, Row, Col } from "react-grid-system";
import ContactForm from '../components/ContactForm/ContactForm';

export default function Contact() {
    return(
        <div>
            <Head>
                <title>Contact Dreamflow</title>
                <link rel="icon" href="/favicon.ico" />
                <script
                    type="text/javascript"
                    src="https://kit.fontawesome.com/abadd7b058.js"
                    crossorigin="anonymous"
                ></script>
            </Head>

            <Wrapper bg="white" paddingTop="150px" paddingBottom="200px">
                <h1 style={{paddingBottom:"35px"}}>Contact Us</h1>
                <Container fluid style={{padding:"0px"}}>
                    <Row gutterWidth={0}>
                        <Col sm={6}>
                            <div className="contact-form-section">
                                <p>Leave us a message and one of our client success managers will reach back out to you.</p>
                                <ContactForm/>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className="contact-details">
                                <div className="contact-detail">
                                    <p className="contact-label">Our business hours</p>
                                    <p className="contact-info">9 am - 5 pm CST</p>
                                </div>
                                <div className="contact-detail">
                                    <p className="contact-label">Email us</p>
                                    <a href="mailto:kmp@kreative.im">
                                        <p className="contact-info">kmp@kreative.im</p>
                                    </a>
                                </div>
                                <div className="contact-detail">
                                    <p className="contact-label">Call us</p>
                                    <a href="tel:5106735179">
                                        <p className="contact-info">(510)-673-5179</p>
                                    </a>
                                </div>
                                <div className="faq">
                                    <p className="faq-header">Not ready to talk to someone?</p>
                                    <p className="faq-link">Check out our up-to-date <a href="/faqs">FAQs section</a></p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Wrapper>
            <Footer />
            <style jsx>{`
                .contact-form-section {
                    padding-right: 75px;
                    border-right: 2px solid #C5C5C5;
                }

                .contact-details {
                    padding-left: 75px;
                    word-wrap: break-word;
                }

                .contact-detail {
                    padding-bottom: 35px;
                }

                .contact-label {
                    color: #4A4A4A;
                    font-size: 1.5em;
                    margin-bottom: -1px;
                }

                .contact-info {
                    color: #0019FF;
                    font-size: 1.6em;
                }

                .faq-link {
                    font-size: 1em;
                }

                .faq-link a {
                    color: #0019FF;
                }

                .faq-header {
                    padding-top: 25px;
                    margin-bottom: -1px;
                }

                @media screen and (max-width: 600px) {
                    .contact-form-section {
                        padding-right: 0px;
                        border-right: none;
                        padding-bottom: 75px;
                    }
    
                    .contact-details {
                        padding-left: 0px;
                    }   
                }
            `}</style>
        </div>
    );
}