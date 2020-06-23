import React, { Component } from "react";
import { Accordion, Icon } from "semantic-ui-react";

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
            <div className="section">
              <Accordion.Title
                active={activeIndex === index}
                index={index}
                onClick={this.handleClick}
              >
                <Icon name="dropdown" />
                <span className="question">{faq.question}</span>
              </Accordion.Title>
              <Accordion.Content active={activeIndex === index}>
                <p className="answer">{faq.answer}</p>
              </Accordion.Content>
            </div>
          ))}
        </Accordion>
        <style jsx>{`
          .section {
            margin-bottom: 30px;
          }

          .question {
            font-size: 1.7em;
            font-weight: normal;
            font-family: "RadioGrotesk", serif;
            margin-left: 10px;
          }

          .answer {
            margin-left: 30px;
            color: ${this.props.answerColor}; 
          }
        `}</style>
      </div>
    );
  }
}

export default FAQ;
