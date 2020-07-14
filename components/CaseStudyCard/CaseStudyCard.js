import React from "react";
import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CaseStudyCard extends React.Component {
  render() {
    return (
      <div>
        <div className="card hvr-shrink">
          <h3 className="title">{this.props.title}</h3>
          <div className="readMoreCont">
            <Link href={this.props.link}>
              <a className="readMore">
                <span>Read more </span>
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </Link>
          </div>
        </div>
        <style jsx>{`
          /* Our CSS */

          .card {
            margin: 50px 0px;
            padding: 350px 250px 100px 50px;
            border-radius: 10px;
            background-image: url(${this.props.bgImage});
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
            font-family: "Karla", sans-serif;
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
          }

          /* Third Party CSS */

          .hvr-shrink {
            display: inline-block;
            vertical-align: middle;
            -webkit-transform: perspective(1px) translateZ(0);
            transform: perspective(1px) translateZ(0);
            box-shadow: 0 0 1px rgba(0, 0, 0, 0);
            -webkit-transition-duration: 0.3s;
            transition-duration: 0.3s;
            -webkit-transition-property: transform;
            transition-property: transform;
          }

          .hvr-shrink:hover,
          .hvr-shrink:focus,
          .hvr-shrink:active {
            -webkit-transform: scale(0.9);
            transform: scale(0.9);
          }
        `}</style>
      </div>
    );
  }
}

export default CaseStudyCard;
