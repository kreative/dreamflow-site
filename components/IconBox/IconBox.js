import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class FantasiaIconBox extends Component {
  render() {
    return (
      <div>
        <div className="icon-box">
          <div className="icon">
            <FontAwesomeIcon icon={this.props.icon} />
          </div>
          <h5 className="header">{this.props.header}</h5>
          <p className="text">{this.props.text}</p>
        </div>
        <style jsx>{`
          .icon-box {
            text-align: ${this.props.align};
          }

          .icon {
            display: flex;
            justify-content: ${this.props.iconAlign};
          }

          i {
            display: flex;
            font-size: ${this.props.size};
            justify-content: center;
            align-items: center;
            color: ${this.props.color};
            margin-bottom: 5px;
            margin-top: 25px;
            padding: ${this.props.padding};            
            border-radius: ${this.props.radius};
            background-color: ${this.props.bg};
            border: ${this.props.border};
            width: 2.5rem !important;
            height: 2.5rem !important;
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

export default FantasiaIconBox;