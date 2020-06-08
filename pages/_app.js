import App from "next/app";
import React from "react";

import "semantic-ui-css/semantic.min.css";
import "../styles/fonts.css";
import "../styles/global.css";

class DreamflowApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
        <Component {...pageProps} />
    );
  }
}

export default DreamflowApp;
