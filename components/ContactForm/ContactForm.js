import React, { Component } from "react";
import Button from "../Button/Button";
import { Container, Row, Col } from "react-grid-system";

class ContactForm extends Component {
  render() {
    return (
      <div>
        <div className="contact-form">
          <form
            className="f-form"
            action="/success"
            name="contact-form"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact-form" />
            <Container style={{ padding: "0px" }} fluid>
              <Row gutterWidth={15}>
                <Col xs={6}>
                  <div className="f-field">
                    <input
                      className="ss"
                      type="text"
                      name="name"
                      id="name_field"
                      placeholder="Name"
                    />
                  </div>
                </Col>
                <Col xs={6}>
                  <div className="f-field">
                    <input
                      className="ss"
                      type="text"
                      name="email"
                      id="email_field"
                      placeholder="Email"
                      required
                    />
                  </div>
                </Col>
              </Row>
              <Row gutterWidth={15}>
                <Col xs={6}>
                  <div className="f-field">
                    <input
                      className="ss"
                      type="text"
                      name="phone"
                      id="phone_field"
                      placeholder="Phone"
                    />
                  </div>
                </Col>
                <Col xs={6}>
                  <div className="f-field">
                    <input
                      className="ss"
                      type="text"
                      name="company"
                      id="company_field"
                      placeholder="Company"
                    />
                  </div>
                </Col>
              </Row>
            </Container>
            <div className="f-field">
              <input
                className="ss"
                type="text"
                name="website"
                id="website_field"
                placeholder="Website"
              />
            </div>
            <div className="f-field">
              <textarea
                className="ss"
                name="message"
                id="message_field"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <Button
              type="submit"
              fill="#001AFF"
              hoverColor="#004893"
              textColor="white"
              radius="3px"
              border="1px solid #001AFF"
              hoverBorder="1px solid #004893"
              padding="15px 50px"
            >
              Get in touch
            </Button>
          </form>
        </div>
        <style jsx>{`
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

          .f-formfield {
            margin-bottom: 15px;
          }

          .f-field {
            margin-bottom: 15px;
          }
        `}</style>
      </div>
    );
  }
}

export default ContactForm;
