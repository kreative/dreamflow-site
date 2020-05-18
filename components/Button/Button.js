import React, { Component } from 'react';
import classNames from 'classnames';

class FantasiaButton extends Component {
  render() {
    var buttonClass = classNames({
      'f-btn': true,
      'grow': this.props.grow,
      'fill': this.props.fill
    });
    
    return (
      <div>
        <button className={buttonClass}>{this.props.children}</button>
        <style jsx>{`
          .f-btn {
            
          }
          
          .raised {
          
          }
          
          .outline {
          
          }
          
          .filled {
          
          }
          
          .grow {
          
          }
          
          .grow:hover {
          
          }
        `}</style>
      </div>
    );
  }
}

export default FantasiaButton;