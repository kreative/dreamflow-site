import React, { Component } from 'react';

class Testimonial extends Component {
  render() {
    return (
      <div className="testimonial">
        
        <style jsx>{`
          .testimonial {
            border-radius: 10px;
            background-color: ${this.props.bg};
          }
        `}</style>
      </div>
    );
  };
}

export default Testimonial;