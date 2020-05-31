import React, { Component } from 'react';
import Button from "../Button/Button";

class ProductCard extends Component {  
  render() {
    return (
      <div className="card hvr-float">
        <img
          className="logo"
          src={this.props.logo}
          alt={this.props.alt}
        />
        <p className="description">{this.props.description}</p>
        <p className="text">{this.props.text}</p>
        <style jsx>{`
          .card {
            border: 1.5px solid #EAEAEA;
            padding: 40px 30px;
            border-radius: 6px;
            text-align: left;
            height: 100%;
          }

          .card:hover {
            cursor: pointer;
          }

          .logo {
            width: 100%;
          }

          .description {
            margin-top: 10px;
            font-weight: normal;
            font-family: 'Bifocals', serif;
            color: #888888;
          }

          .text {
            color: #343434;
            font-size: 1.4em;
            font-family: 'Bifocals', serif;
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