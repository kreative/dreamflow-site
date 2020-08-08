import React, { Component } from "react";
import { Accordion, Icon } from "semantic-ui-react";
import styles from "./faqs.module.css";

class FAQ extends Component {
  state = {
    activeIndex: 0,
  };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;
    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <div>
        <Accordion>
          {this.props.faqs.map((faq, index) => (
            <div className={styles.section}>
              <Accordion.Title
                active={activeIndex === index}
                index={index}
                onClick={this.handleClick}
              >
                <Icon name="dropdown" />
                <span className={styles.question}>{faq.question}</span>
              </Accordion.Title>
              <Accordion.Content active={activeIndex === index}>
                <p style={{color: this.props.answerColor}} className={styles.answer}>{faq.answer}</p>
              </Accordion.Content>
            </div>
          ))}
        </Accordion>
      </div>
    );
  }
}

export default FAQ;
