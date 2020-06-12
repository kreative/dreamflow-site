import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Wrapper from "../components/Wrapper/Wrapper";
import Button from "../components/Button/Button";
import { Container, Row, Col } from "react-grid-system";

export default function GetStarted() {
  return (
    <div>
      <Head>
        <title>Get Started | Kreative Dreamflow</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/general/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/general/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/general/favicon-16x16.png"></link>
        <link rel="manifest" href="/favicons/general/site.webmanifest"></link>
        <script
          type="text/javascript"
          src="https://kit.fontawesome.com/abadd7b058.js"
          crossOrigin="anonymous"
        ></script>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Navbar />
      <Wrapper bg="#E7F2FD" paddingTop="300px" paddingBottom="100px">
        <h1>Get Started with Dreamflow</h1>
        <p>
          Fill out the form below and our team will get back to you the next
          business day!
        </p>
      </Wrapper>
      <Wrapper bg="white" paddingBottom="100px" paddingTop="100px">
        <div className="get-started-form">
          <form
            className="f-form"
            action="/success"
            name="get-started-form"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="get-started-form" />
            <Container style={{ padding: "0px" }}>
              <Row gutterWidth={25}>
                <Col md={4} lg={6}>
                  <h2 className="title">Contact Details</h2>
                </Col>
                <Col md={8} lg={6}>
                  <div className="form-part">
                    <div className="f-field">
                      <label htmlFor="name_field" className="f-label">
                        Name
                      </label>
                      <input
                        className="ss"
                        type="text"
                        name="name"
                        id="name_field"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <Row gutterWidth={15}>
                      <Col sm={6}>
                        <div className="f-field">
                          <label htmlFor="email_field" className="f-label">
                            Email
                          </label>
                          <input
                            className="ss"
                            type="text"
                            name="email"
                            id="email_field"
                            placeholder="john@example.com"
                            required
                          />
                        </div>
                      </Col>
                      <Col sm={6}>
                        <div className="f-field">
                          <label htmlFor="phone_field" className="f-label">
                            Phone
                          </label>
                          <input
                            className="ss"
                            type="tel"
                            name="phone"
                            id="phone_field"
                            placeholder="(555)5555555"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <div className="f-field">
                      <label htmlFor="company_field" className="f-label">
                        Company
                      </label>
                      <input
                        className="ss"
                        type="text"
                        name="company"
                        id="company_field"
                        placeholder="Acme, Corp."
                        required
                      />
                    </div>
                    <div className="f-field">
                      <label htmlFor="website_field" className="f-label">
                        Website
                      </label>
                      <input
                        className="ss"
                        type="text"
                        name="website"
                        id="website_field"
                        placeholder="acme.com"
                      />
                    </div>
                    <div className="f-field">
                      <label
                        htmlFor="company_description_field"
                        className="f-label"
                      >
                        What does your business do?
                      </label>
                      <textarea
                        className="ss"
                        name="company_description"
                        id="company_description_field"
                        placeholder="Our business does ..."
                        rows="5"
                        required
                      ></textarea>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row gutterWidth={25}>
                <Col  md={4} lg={6}>
                  <h2 className="title">Project Details</h2>
                </Col>
                <Col md={8} lg={6}>
                  <div className="form-part">
                    <p className="f-label2">
                      What products are you interested in using?
                    </p>
                    <div className="f-checkbox-group">
                      <div className="f-checkbox">
                        <input
                          type="checkbox"
                          id="pageflow"
                          name="pageflow"
                          value="pageflow"
                        />
                        <label htmlFor="pageflow">Pageflow</label>
                      </div>
                      <div className="f-checkbox">
                        <input
                          type="checkbox"
                          id="toprank"
                          name="toprank"
                          value="toprank"
                        />
                        <label htmlFor="toprank">TopRank</label>
                      </div>
                      <div className="f-checkbox">
                        <input
                          type="checkbox"
                          id="sitecare"
                          name="sitecare"
                          value="sitecare"
                        />
                        <label htmlFor="sitecare">SiteCare</label>
                      </div>
                      <div className="f-checkbox">
                        <input
                          type="checkbox"
                          id="kopy"
                          name="kopy"
                          value="kopy"
                        />
                        <label htmlFor="kopy">Kopy</label>
                      </div>
                      <div className="f-checkbox">
                        <input
                          type="checkbox"
                          id="kanvas"
                          name="kanvas"
                          value="kanvas"
                        />
                        <label htmlFor="kanvas">Kanvas</label>
                      </div>
                      <div className="f-checkbox">
                        <input
                          type="checkbox"
                          id="postage"
                          name="postage"
                          value="postage"
                        />
                        <label htmlFor="postage">Postage</label>
                      </div>
                    </div>
                    <div className="f-field">
                      <label
                        htmlFor="project_description_field"
                        className="f-label"
                      >
                        Could you provide a brief synopsis of what you're
                        looking for?
                      </label>
                      <textarea
                        className="ss"
                        name="project_description"
                        id="project_description_field"
                        placeholder="We are looking for ..."
                        rows="5"
                        required
                      ></textarea>
                    </div>
                    <p className="f-label2">What is your estimated budget?</p>
                    <div className="f-checkbox-group">
                      <div className="f-checkbox">
                        <input
                          type="radio"
                          id="budget_one"
                          name="budget"
                          value="budget_one"
                        />
                        <label htmlFor="budget_one">$0 - $1,000</label>
                      </div>
                      <div className="f-checkbox">
                        <input
                          type="radio"
                          id="budget_two"
                          name="budget"
                          value="budget_two"
                        />
                        <label htmlFor="budget_two">$1,000 - $2,500</label>
                      </div>
                      <div className="f-checkbox">
                        <input
                          type="radio"
                          id="budget_three"
                          name="budget"
                          value="budget_three"
                        />
                        <label htmlFor="budget_three">$2,500 - $5,000</label>
                      </div>
                      <div className="f-checkbox">
                        <input
                          type="radio"
                          id="budget_four"
                          name="budget"
                          value="budget_four"
                        />
                        <label htmlFor="budget_four">$5,000 - $10,000</label>
                      </div>
                    </div>
                    <div className="f-field">
                      <label htmlFor="notes_field" className="f-label">
                        Do you have anything else you'd like us to know?
                      </label>
                      <textarea
                        className="ss"
                        name="notes"
                        id="notes_field"
                        placeholder="Notes ..."
                        rows="5"
                        required
                      ></textarea>
                    </div>
                    <div style={{paddingTop:"25px"}}>
                      <Button
                        type="submit"
                        fill="#001AFF"
                        hoverColor="#004893"
                        textColor="white"
                        radius="3px"
                        border="1px solid #001AFF"
                        hoverBorder="1px solid #004893"
                        padding="15px 50px"
                        grow={true}
                      >
                        Submit & Get Started
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </form>
        </div>
      </Wrapper>
      <Footer />
      <style jsx>{`
        .f-form {
          background-color: white;
        }

        .ss {
          padding: 0.9em 1.1em;
          background: #fefefe;
          border: 1px solid #cfcfcf;
          border-radius: 3px;
          box-sizing: border-box;
          font-family: monospace;
          font-weight: normal;
          font-size: 1em;
          width: 100%;
        }

        .title {
          padding-bottom: 50px;
        }

        .form-part {
          margin-bottom: 75px;
        }

        .f-label {
          display: inline-block;
          font-family: "Bifocals", serif;
          font-size: 1.2em;
          margin-bottom: 10px;
          padding-left: 3px;
        }

        .f-label2 {
          margin-top: 20px;
        }

        .f-formfield {
          margin-bottom: 15px;
        }

        .f-field {
          margin-bottom: 15px;
        }

        .f-checkbox-group {
          padding-bottom: 15px;
        }

        .f-checkbox-group input {
          margin-right: 10px;
          padding: 10px;
          cursor: pointer;
        }

        .f-checkbox-group label {
          font-size: 1.2em;
          font-family: "Bifocals", serif;
          cursor: pointer;
        }

        .f-checkbox {
          padding-bottom: 15px;
        }
      `}</style>
    </div>
  );
}
