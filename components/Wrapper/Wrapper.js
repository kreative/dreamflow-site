import React, { Component, Children } from "react";

class FantasiaWrapper extends Component {
  render() {
    return (
      <div className="wrapper">
        {this.props.children}
        <style jsx>{`
          .wrapper {
            padding-right: 10%;
            padding-left: 10%;
            background-color: ${this.props.bg};
            padding-top: ${this.props.paddingTop};
            padding-bottom: ${this.props.paddingBottom};
          }

          @media screen and (min-width: 1200px) {
            .wrapper {
              padding-right: 15%;
              padding-left: 15%;
            }
          }

          @media screen and (min-width: 1600px) {
            .wrapper {
              padding-right: 20%;
              padding-left: 20%;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default FantasiaWrapper;
