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
    });

    return (
      <div>
        <div className={pricingCardClass}>
          <div className="header">
            <img src={this.props.image} alt={this.props.imageAlt} />
            <h2>{this.props.name}</h2>
            <p className="price">{this.props.price}</p>
          </div>
          <div className="items">
            {this.props.includedItems.map((item) => (
              <IncludedItem textColor="black">{item}</IncludedItem>
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
            link={this.props.buttonLink}
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
          h2 {
            color: ${this.props.primary ? this.props.color : "black"};
          }

          img {
            width: 30%;
          }

          .pricing-card {
            border: ${this.props.primary
              ? `2px solid ${this.props.color}`
              : "2px solid #E8E8E8"};
            border-radius: 6px;
            padding: 50px 25px;
          }

          .items {
            text-align: center;
            margin-bottom: 35px;
          }

          .header {
            text-align: center;
            padding-bottom: 25px;
          }

          .price {
            font-weight: bold;
            font-size: 1.6em;
            color: black;
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
