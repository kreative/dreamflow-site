import React, { Component, Children } from "react";

class FantasiaWrapper extends Component {
  render() {
    return (
      <div className="wrapper">
        {this.props.children}
        <style jsx>{`
          .wrapper {
            padding-right: 15%;
            padding-left: 15%;
            background-color: ${this.props.bg};
            padding-top: ${this.props.paddingTop};
            padding-bottom: ${this.props.paddingBottom};
          }
          
          @media screen and (max-width: 600px) {
              .wrapper {
                  padding-right: 7%;
                  padding-left: 7%;
              }
          }
        `}</style>
      </div>
    );
  }
}

export default FantasiaWrapper;
