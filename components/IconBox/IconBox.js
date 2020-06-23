import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class FantasiaIconBox extends Component {
  render() {
    return (
      <div>
        <div className="icon-box">
          <div className="icon">
            <FontAwesomeIcon
              icon={this.props.icon}
              size={this.props.size}
              style={{color:this.props.iconColor}}
            />
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

          .header {
            font-size: 1.6em;
            font-family: "Karla", serif;
            color: ${this.props.headerColor};
          }

          .text {
            font-size: 1.3em;
            color: ${this.props.textColor};
          }
        `}</style>
      </div>
    );
  }
}

export default FantasiaIconBox;
