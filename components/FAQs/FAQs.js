import React, { Component } from "react";
import { Accordion, Icon } from "semantic-ui-react";

class FAQ extends Component {
  state = {
    faqs: [],
    activeIndex: 0,
  };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  componentDidMount() {
    fetch("http://centrifuge.iris.kreativekws.com/logs")
      .then((response) => response.json())
      .then((data) => this.setState({ faqs: data.data.faqs }))
      .catch(console.log);
  }

  render() {
    const { activeIndex } = this.state;

    return (
      <div>
        <Accordion>
          {this.state.faqs.map((faq, index) => {
            <div>
              <Accordion.Title
                active={activeIndex === index}
                index={0}
                onClick={this.handleClick}
              >
                <Icon name="dropdown" />
                <h2 className="question">{faq.question}</h2>
              </Accordion.Title>
              <Accordion.Content active={activeIndex === index}>
                <p className="answer">{faq.answer}</p>
              </Accordion.Content>
            </div>;
          })}
        </Accordion>
        <style jsx>{`
          .question {

          }

          .answer {
            
          }
        `}</style>
      </div>
    );
  }
}

export default FAQ;
