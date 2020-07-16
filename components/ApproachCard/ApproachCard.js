import React, { Component } from "react";

class ApproachCard extends Component {
  render() {
    return (
        <div className={"card"}>
          <div className="header">
            <img src={this.props.image} alt={this.props.imageAlt} />
            <h3>{this.props.name}</h3>
          </div>
          <p>{this.props.description}</p>
            <style jsx>{`
          .card {
            background-color: ${this.props.bgColor}; 
            border-radius: 6px;
            padding: 50px 35px;
            height: 100%;
            display: flex;
            flex-direction: column;
          }

          .header {
            text-align: center;
            padding-bottom: 25px;
          }
          
          img {
            width: 50%;
          }
          
          h3 {
            color: ${this.props.headerColor};
          }
          
          p {
            text-align: center;
            color: ${this.props.textColor};
          }
        `}</style>
        </div>
    );
  }
}

export default ApproachCard;
