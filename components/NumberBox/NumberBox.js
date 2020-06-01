import React, { Component } from 'react';

class NumberBox extends Component {
  render() {
    return (
      <div>
        <div className="number-box">
          <div className="number">{this.props.number}</div>
          <h5 className="header">{this.props.header}</h5>
          <p className="text">{this.props.text}</p>
        </div>
        <style jsx>{`
          .number-box {
            text-align: ${this.props.align};
          }

          .number {
            font-size: 3em;
            padding: 10px;
            border-radius: ${this.props.radius};
            background-color: ${this.props.bg};
            color: ${this.props.color};
            margin-bottom: 10px;
          }

          .header {
            font-size: 1.6em;
            font-family: 'Bifocals', serif;
          }

          .text {
            font-size: 1.3em;
          }
        `}</style>
      </div>
    );
  };
}

export default NumberBox;