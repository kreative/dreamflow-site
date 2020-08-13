import React from "react";
import Button from "../Button/Button";

class ContentDownload extends React.Component {
  render() {
    return (
      <div>
        <div className={"download_section"}>
          <img
            src={this.props.cover}
            alt={this.props.coverAlt}
            className={"cover"}
          />
          <h4 className={"send_text"}>Where should we send it to?</h4>
          <form className="f-form" name="download-form">
            <div className="f-field">
              <input
                className="ss"
                type="text"
                name="email"
                id="email_field"
                placeholder="Your email"
                required
              />
            </div>
            <Button
              type="submit"
              fill={this.props.btnColor}
              textColor="white"
              radius="3px"
              border={"1px solid " + this.props.btnColor}
              padding="15px 50px"
              grow={false}
              width={"100%"}
            >
              Download now
            </Button>
          </form>
          <p className={"disclaimer_text"}>
            We promise never to send you ...
          </p>
        </div>
        <style jsx>{`
          .cover {
            padding-bottom: 10px;
            width: 100%;
            -webkit-box-shadow: 0px 2px 22px -1px rgba(186,186,186,0.34);
            -moz-box-shadow: 0px 2px 22px -1px rgba(186,186,186,0.34);
            box-shadow: 0px 2px 22px -1px rgba(186,186,186,0.34);
          }
          
          .send_text {
            font-size: 1.3em;
            font-weight: normal;
          }
          
          .download_section {
            padding: 25px;
            border: 1.5px solid #F6F6F4;
            border-radius: 10px;
            text-align: center;
          }
          
          .f-form {
            background-color: white;
          }
          
          .ss {
            padding: 0.9em 1.1em;
            background: #fefefe;
            border: 1px solid #cfcfcf;
            border-radius: 3px;
            box-sizing: border-box;
            font-family: monospace;
            font-weight: normal;
            font-size: 1em;
            width: 100%;
          }
          
          .f-label {
            display: inline-block;
            font-family: "BasierCircle", sans-serif;
            font-size: 1.2em;
            margin-bottom: 10px;
            padding-left: 3px;
          }
          
          .f-field {
            margin-bottom: 15px;
          }
          
          .disclaimer_text {
            color: grey;
            font-size: 0.9em;
            font-style: italic;
            padding-top: 15px;
          }
        `}</style>
      </div>
    );
  }
}

export default ContentDownload;