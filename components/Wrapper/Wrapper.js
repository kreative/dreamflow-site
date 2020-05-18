import React, { Component, Children } from 'react';
import styles from  './wrapper.module.css';

class FantasiaWrapper extends Component {
    render() {
        return (
            <div className={styles.wrapper}>{this.props.children}</div>
        );
    };
}

export default FantasiaWrapper;