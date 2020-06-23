import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

class BlogPostCard extends React.Component {
  state = {
    labelColor: "grey"
  }

  componentDidMount() {
    
  }
  
  render() {
    return (
      <div>
        <div className="post_card">
          <p className="label">{this.props.label}</p>
          <h2 className="title">{this.props.title}</h2>
          <p className="metadata">
            {this.props.author + " on " + this.props.date}
          </p>
          <p className="description">{this.props.description}</p>
          <p className="read_more">
            Read more{" "}
            <FontAwesomeIcon icon={faArrowLeft} size="" />
          </p>
        </div>
        <style jsx>{`
          .post_card {

          }
          
          .label {

          }
        
          .title {

          }

          .metadata {
            color: #949494;
            font-weight: bold;
            font-size: 0.8em;
          }

          .description {
            color: #53504E;
          }

          .read_more {
            color: #001AFF;
            font-size: 1em;
          }

          .read_more:hover {
            color: #338EEE;
          }
        `}</style>
      </div>
    );
  }
}

export default BlogPostCard;
