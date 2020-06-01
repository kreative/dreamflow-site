import React, { Component } from "react";
import Button from "../Button/Button";
import { Formik } from "formik";

class ContactCard extends Component {
  handleSubmit(values, actions) {
    // process information
    console.log(values);
    actions.setSubmitting(false);
    return;
  }

  validateData(values) {}

  render() {
    return (
      <div>
        <div className="contact-card">
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              company: "",
              website: "",
              notes: "",
            }}
            validate={this.validateData}
            onSubmit={this.handleSubmit}
          >
            {(props) => (
              <form className="f-form" onSubmit={props.handleSubmit}>
                <div className="f-field">
                  <input
                    className="ss"
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.name}
                    name="name"
                    placeholder="Name"
                  />
                </div>
                <div className="f-field">
                  <input
                    className="ss"
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.email}
                    name="email"
                    placeholder="Email"
                  />
                </div>
                <div className="f-field">
                  <input
                    className="ss"
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.phone}
                    name="phone"
                    placeholder="Phone"
                  />
                </div>
                <div className="f-field">
                  <input
                    className="ss"
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.phone}
                    name="company"
                    placeholder="Company"
                  />
                </div>
                <div className="f-field">
                  <input
                    className="ss"
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.phone}
                    name="website"
                    placeholder="Website"
                  />
                </div>
                <Button
                  type="submit"
                  fill="#001AFF"
                  textColor="white"
                  radius="3px"
                  border="1px solid #001AFF"
                  padding="15px 50px"
                  width="100%"
                >
                  {this.props.buttonText}
                </Button>
              </form>
            )}
          </Formik>
        </div>
        <style jsx>{`
          .f-form {
            padding: 40px;
            background-color: white;
            -webkit-box-shadow: 3px 6px 19px 0px rgba(232,232,232,1);
            -moz-box-shadow: 3px 6px 19px 0px rgba(232,232,232,1);
            box-shadow: 3px 6px 19px 0px rgba(232,232,232,1);
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
