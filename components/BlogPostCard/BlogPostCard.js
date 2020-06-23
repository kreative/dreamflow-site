import React from "react";
import Link from "next/link";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

class BlogPostCard extends React.Component {
  state = { labelColor: "", labelBg: "" };

  componentDidMount() {
    const label = this.props.label;
    let labelBg = "";
    let labelColor = "";

    if (label === "MARKETING") {
      labelBg = "#E7F2FD";
      labelColor = "#1C5592";
    } else if (label === "DESIGN") {
      labelBg = "#DEFAE9";
      labelColor = "#176A3A";
    }

    this.setState({ labelBg, labelColor });
  }

  render() {
    const cardClass = classNames({
      post_card: true,
      "hvr-sink": this.props.sinkOnHover,
      "hvr-raise": this.props.raiseOnHover,
    });

    return (
      <div>
        <div className={cardClass}>
          <div className="label_wrapper">
            <span className="label">{this.props.label}</span>
          </div>
          <h2 className="title">{this.props.title}</h2>
          <p className="metadata">
            {this.props.author + " on " + this.props.date}
          </p>
          <p className="description">{this.props.description}</p>
          <Link href={"/" + this.props.slug}>
            <a className="read_more">
              Read more <FontAwesomeIcon icon={faArrowRight} size="xs" />
            </a>
          </Link>
        </div>
        <style jsx>{`
          .post_card {
            padding: 50px;
            border: 1px solid #e3e3e3;
            border-radius: 6px;
          }

          .label_wrapper {
            margin-bottom: 45px;
          }

          .label {
            padding: 10px 20px;
            background-color: ${this.state.labelBg};
            color: ${this.state.labelColor};
            border-radius: 4px;
            font-size: 0.8em;
          }

          .metadata {
            color: #949494;
            font-size: 1.2em;
          }

          .description {
            color: #53504e;
            font-size: 1.4em;
            padding-bottom: 25px;
          }

          .read_more {
            color: #001aff;
            font-size: 1.5em;
          }

          .read_more:hover {
            color: #338eee;
          }

          .hvr-raise:hover {
            box-shadow: 2px 2px 19px -1px rgba(240, 240, 240, 1);
            -webkit-box-shadow: 2px 2px 19px -1px rgba(240, 240, 240, 1);
            -moz-box-shadow: 2px 2px 19px -1px rgba(240, 240, 240, 1);
          }
        `}</style>
      </div>
    );
  }
}

export default BlogPostCard;
