import React, { Component } from "react";
import Button from "../Button/Button";

class ContactCard extends Component {
  render() {
    return (
      <div>
        <div className="contact-card">
          <form name={this.props.name} action="/success" method="POST" className="f-form" data-netlify="true">
            <input type="hidden" name="form-name" value={this.props.name} />
            <div className="f-field">
              <input
                className="ss"
                type="text"
                name="name"
                id="name_input"
                placeholder="Name"
                required
              />
            </div>
            <div className="f-field">
              <input
                className="ss"
                type="text"
                name="email"
                id="email_input"
                placeholder="Email"
                required
              />
            </div>
            <div className="f-field">
              <input
                className="ss"
                type="text"
                name="phone"
                id="phone_input"
                placeholder="Phone"
                required
              />
            </div>
            <div className="f-field">
              <input
                className="ss"
                type="text"
                name="company"
                id="company_input"
                placeholder="Company"
                required
              />
            </div>
            <div className="f-field">
              <input
                className="ss"
                type="text"
                name="website"
                id="website_field"
                placeholder="Website"
                required
              />
            </div>
            <Button
              type="submit"
              fill="black"
              hoverColor="#53504E"
              textColor="white"
              radius="3px"
              border="1px solid black"
              hoverBorder="1px solid #53504E"
              padding="15px 50px"
              width="100%"
            >
              {this.props.buttonText}
            </Button>
          </form>
        </div>
        <style jsx>{`
          .f-form {
            padding: 40px;
            background-color: white;
            -webkit-box-shadow: 3px 6px 19px 0px rgba(232, 232, 232, 1);
            -moz-box-shadow: 3px 6px 19px 0px rgba(232, 232, 232, 1);
            box-shadow: 3px 6px 19px 0px rgba(232, 232, 232, 1);
            border-radius: 6px;
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

export default ContactCard;
