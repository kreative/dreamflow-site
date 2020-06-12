import React, { Component } from 'react';
import classNames from 'classnames';

class ProductCard extends Component {  
  render() {
    var cardClass = classNames({
      "card": true,
      "hvr-float": true,
      "raised": this.props.raised
    });

    var logoClass = classNames({
      "logo": true,
      "hidden": this.props.hideImage
    });
    
    return (
      <div className={cardClass}>
        <div className="content">
          <img
            className={logoClass}
            src={this.props.logo}
            alt={this.props.alt}
          />
          <h4 className="header">{this.props.header}</h4>
          <p className="description">{this.props.description}</p>
          <p className="text">{this.props.text}</p>
        </div>
        <div className="button-container">{this.props.button}</div>
        <style jsx>{`
          .card {
            background-color: ${this.props.bg};
            border: ${this.props.border};
            padding: 40px 25px;
            border-radius: 6px;
            text-align: ${this.props.align};
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }

          .logo {
            width: ${this.props.logoWidth || "100%"};
            margin: 0 auto;
          }

          .header {
            margin-top: -10px;
            font-weight: bold;
            font-size: 2em;
          }

          .description {
            margin-top: 10px;
            font-weight: normal;
            font-family: 'RadioGrotesk', serif;
            color: #666666;
            font-size: 1.2em;
          }

          .text {
            color: #343434;
            font-size: 1.4em;
            font-family: 'RadioGrotesk', serif;
            line-height: 1.1em;
          }

          .button-container {
            margin-top: 25px;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
          }

          .hidden {
            display: none;
          }

          .raised {
            -webkit-box-shadow: 0px 7px 28px 5px rgba(166,166,166,0.9);
            -moz-box-shadow: 0px 7px 28px 5px rgba(166,166,166,0.9);
            box-shadow: 0px 7px 28px 5px rgba(166,166,166,0.9);
          }

          .hvr-float {
            -webkit-transform: perspective(1px) translateZ(0);
            transform: perspective(1px) translateZ(0);
            box-shadow: 0 0 1px rgba(0, 0, 0, 0);
            -webkit-transition-duration: 0.3s;
            transition-duration: 0.3s;
            -webkit-transition-property: transform;
            transition-property: transform;
            -webkit-transition-timing-function: ease-out;
            transition-timing-function: ease-out;
          }

          .hvr-float:hover, .hvr-float:focus, .hvr-float:active {
            -webkit-transform: translateY(-8px);
            transform: translateY(-8px);
          }
        `}</style>
      </div>
    );
  };
}

export default ProductCard;