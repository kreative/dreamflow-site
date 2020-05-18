import React, { Component, Children } from "react";
import styles from "./wrapper.module.css";

class FantasiaWrapper extends Component {
  render() {
    return (
      <div style={{
        backgroundColor:this.props.bg,
        paddingTop: this.props.paddingTop,
        paddingBottom: this.props.paddingBottom
      }} 
      className={styles.wrapper}>{this.props.children}</div>
    );
  }
}

export default FantasiaWrapper;
