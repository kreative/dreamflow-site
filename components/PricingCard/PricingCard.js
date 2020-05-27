import React, { Component } from "react";
import IncludedItem from "./IncludedItem";
import MissingItem from "./MissingItem";
import Button from "../Button/Button";
import classNames from "classnames";

class FantasiaPricingCard extends Component {
  render() {
    var pricingCardClass = classNames({
      "pricing-card": true,
      raised: this.props.raised,
      primary: this.props.primary,
    });

    return (
      <div>
        <div className={pricingCardClass}>
          <img src={this.props.image} alt={this.props.imageAlt} />
          <h3>{this.props.name}</h3>
          <h5>{this.props.price}</h5>
          <div className="items">
            {this.props.includedItems.map((item) => (
              <IncludedItem iconColor={this.props.color}>{item}</IncludedItem>
            ))}
            {this.props.missingItems.map((item) => (
              <MissingItem>{item}</MissingItem>
            ))}
          </div>
          <Button
            fill={this.props.primary ? this.props.color : "white"}
            border={
              this.props.primary ? "none" : `1px solid ${this.props.color}`
            }
            textColor={this.props.buttonTextColor}
            radius={this.props.buttonRadius}
            padding={this.props.buttonPadding}
            raised={this.props.primary}
            width="100%"
          >
            {this.props.buttonText}
          </Button>
        </div>
        <style jsx>{`
          h3 {
            color: ${this.props.primary ? this.props.color : "black"};
          }

          img {
            width: 30%;
            text-align: center;
          }

          .pricing-card {
            border: ${this.props.primary
              ? `1px solid ${this.props.color}`
              : "#F2F2F2"};
            border-radius: 6px;
            padding: 35px 10px;
          }

          .items {
            text-align: center;
          }

          .raised {
            -webkit-box-shadow: 0px 7px 28px 5px rgba(166, 166, 166, 0.7);
            -moz-box-shadow: 0px 7px 28px 5px rgba(166, 166, 166, 0.7);
            box-shadow: 0px 7px 28px 5px rgba(166, 166, 166, 0.7);
          }
        `}</style>
      </div>
    );
  }
}

export default FantasiaPricingCard;
