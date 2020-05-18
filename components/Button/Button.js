import React, { Component } from 'react';
import classNames from 'classnames';

class FantasiaButton extends Component {
  render() {
    var buttonClass = classNames({
      'f-btn': true,
      'grow': this.props.grow,
      'raised': this.props.raised,
    });
    
    return (
      <div>
        <button className={buttonClass}>{this.props.children}</button>
        <style jsx>{`
          .f-btn {
            background-color: ${this.props.fill};
            border: ${this.props.border};
            border-radius: ${this.props.radius};
            color: ${this.props.textColor};
            padding: ${this.props.padding};
            box-sizing: box-border;
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            font-family: 'Bifocals', serif;
            font-weight: normal;
            font-size: 1.1em;
            margin-right: 10px;
            -webkit-box-flex: 1 1 auto;
            -moz-box-flex: 1 1 auto;
            -webkit-flex: 1 1 auto;
            -ms-flex: 1 1 auto;
            flex: 1 1 auto;
          }
          
          .raised {
            -webkit-box-shadow: 0px 7px 28px 5px rgba(166,166,166,0.7);
            -moz-box-shadow: 0px 7px 28px 5px rgba(166,166,166,0.7);
            box-shadow: 0px 7px 28px 5px rgba(166,166,166,0.7);
          }
          
          .grow {
            transition: all .2s ease-in-out;
          }
          
          .grow:hover {
            transform: scale(1.1);
          }

          @media screen and (max-width: 600px) {
            .f-btn {
              width: 100%;
              margin-right: 0px;
              margin-bottom: 10px;
              -webkit-box-flex: none;
              -moz-box-flex: none;
              -webkit-flex: none;
              -ms-flex: none;
              flex: none;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default FantasiaButton;