import App from "next/app";
import React from "react";

import "semantic-ui-css/semantic.min.css";
import "../styles/fonts.css";
import "../styles/global.css";
import "../public/fonts/BasierCircle/Basier-Circle-bold-webfont/stylesheet.css";
import "../public/fonts/BasierCircle/Basier-Circle-bolditalic-webfont/stylesheet.css";
import "../public/fonts/BasierCircle/Basier-Circle-medium-webfont/stylesheet.css";
import "../public/fonts/BasierCircle/Basier-Circle-mediumitalic-webfont/stylesheet.css";
import "../public/fonts/BasierCircle/Basier-Circle-regular-webfont/stylesheet.css";
import "../public/fonts/BasierCircle/Basier-Circle-regularitalic-webfont/stylesheet.css";
import "../public/fonts/BasierCircle/Basier-Circle-semibold-webfont/stylesheet.css";
import "../public/fonts/BasierCircle/Basier-Circle-semibolditalic-webfont/stylesheet.css";

class DreamflowApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
        <Component {...pageProps} />
    );
  }
}

export default DreamflowApp;
