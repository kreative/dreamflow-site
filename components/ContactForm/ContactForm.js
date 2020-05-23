import React, { Component } from 'react';
import Button from '../Button/Button';
import { Container, Row, Col } from "react-grid-system";
import { Formik } from 'formik';

class ContactForm extends Component {

    handleSubmit(values, actions) {
        // process information
        console.log(values);
        actions.setSubmitting(false);
        return;
    };

    validateData(values) {
        
    };

    render() {
        return (
            <div>
                <div className="contact-form">
                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            phone: '',
                            topic: '',
                            company: '',
                            website: '',
                            notes: ''
                        }}
                        validate={this.validateData}
                        onSubmit={this.handleSubmit}
                    >
                        {props => (
                            <form 
                                className="f-form"
                                onSubmit={props.handleSubmit}
                            >
                                <Container style={{padding:"0px"}}>
                                    <Row gutterWidth={15}>
                                        <Col sm={6}>
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
                                        </Col>
                                        <Col sm={6}>
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
                                        </Col>
                                    </Row>
                                    <Row gutterWidth={15}>
                                        <Col sm={6}>
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
                                        </Col>
                                        <Col sm={6}>
                                            <div className="f-field">
                                                <select
                                                    className="ss"
                                                    onChange={props.handleChange}
                                                    onBlur={props.handleBlur}
                                                    value={props.values.topic}
                                                    name="topic"
                                                    placeholder="I'm interested in..."
                                                >
                                                    <option value="default">I'm interested in...</option>
                                                    <option value="working_with_kmp">Working with KMP</option>
                                                    <option value="learning_more">Learning more</option>
                                                    <option value="something_else">Something else</option>
                                                </select>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                                <div className="f-field">
                                    <input
                                        className="ss"
                                        type="text"
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        value={props.values.phone}
                                        name="company"
                                        placeholder="company"
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
                                        placeholder="website"
                                    />
                                </div>
                                <div className="f-field">
                                    <input
                                        className="ss"
                                        type="text"
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        value={props.values.phone}
                                        name="notes"
                                        placeholder="notes"
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    fill="#001AFF"
                                    textColor="white"
                                    radius="3px"
                                    border="1px solid #001AFF"
                                    padding="15px 50px"
                                >
                                    Get in touch
                                </Button>
                            </form>
                        )}
                    </Formik>
                </div>
                <style jsx>{`
                    .ss {
                        padding: 0.9em 1.1em;
                        background: #FEFEFE;
                        border: 1px solid #CFCFCF;
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
    };
}

export default ContactForm;