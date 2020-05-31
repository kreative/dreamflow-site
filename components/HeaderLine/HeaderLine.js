import React, { Component } from 'react';

class FantasiaHeaderLine extends Component {
  render() {
    return (
      <div>
        <hr />
        <style jsx>{`
          hr {
            width: 40px;
            border: 1.5px solid ${this.props.color};
          }
        `}</style>
      </div>
    );
  };
}

export default FantasiaHeaderLine;