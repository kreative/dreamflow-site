import React, { Component, Children } from 'react';
import './wrapper.css';

class FantasiaWrapper extends Component {
    render() {
        return (
            <div className="wrapper">{this.props.children}</div>
        );
    };
}

export default FantasiaWrapper;