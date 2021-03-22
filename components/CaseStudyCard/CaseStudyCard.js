import React from "react";
import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CaseStudyCard extends React.Component {
  render() {
    return (
      <div>
        <div className="card hvr-sink">
          <h3 className="title">{this.props.title}</h3>
          <div className="readMoreCont">
            <Link href={this.props.link}>
              <a className="readMore">
                <span>Read more </span>
                <FontAwesomeIcon icon={faArrowRight} size={"sm"} />
              </a>
            </Link>
          </div>
        </div>
        <style jsx>{`
          .card {
            margin: 50px 0px;
            padding: 350px 250px 100px 50px;
            border-radius: 10px;
            background-image: ${this.props.bgImage};
            background-size: cover;
            background-position: center;
            background-color: ${this.props.bgColor};
          }

          .card:hover {
            -webkit-box-shadow: 0px 6px 17px -6px rgba(0, 0, 0, 0.85);
            -moz-box-shadow: 0px 6px 17px -6px rgba(0, 0, 0, 0.85);
            box-shadow: 0px 6px 17px -6px rgba(0, 0, 0, 0.85);
          }

          .title {
            font-family: "BasierCircle", sans-serif;
            font-weight: bold;
            color: ${this.props.textColor};
          }

          .readMoreCont {
            padding-top: 25px;
          }

          .readMore {
            color: ${this.props.textColor};
            font-size: 1.6em;
          }

          .readMore span {
            margin-right: 10px;
            font-family: "BasierCircle", sans-serif;
            font-weight: 600;
          }

          /* Third Party CSS */

          .hvr-sink {
            display: inline-block;
            vertical-align: middle;
            -webkit-transform: perspective(1px) translateZ(0);
            transform: perspective(1px) translateZ(0);
            box-shadow: 0 0 1px rgba(0, 0, 0, 0);
            -webkit-transition-duration: 0.3s;
            transition-duration: 0.3s;
            -webkit-transition-property: transform;
            transition-property: transform;
            -webkit-transition-timing-function: ease-out;
            transition-timing-function: ease-out;
          }
          .hvr-sink:hover, .hvr-sink:focus, .hvr-sink:active {
            -webkit-transform: translateY(8px);
            transform: translateY(8px);
          }
        `}</style>
      </div>
    );
  }
}

export default CaseStudyCard;
