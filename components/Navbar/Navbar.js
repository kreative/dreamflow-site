import React, { Component } from "react";
import Wrapper from "../Wrapper/Wrapper";

class DreamflowNavbar extends Component {

  render() {
    return (
      <div className="Navbar__Wrapper">
       
        <style jsx>{`
          .Navbar__Wrapper {
            background: rgba(255, 255, 255, 0.6);
            position: fixed;
            top: 0;
            width: 100%;
            overflow: hidden;
            z-index: 1000;
            backdrop-filter: blur(5px);
          }

          .Navbar {
            display: flex;
            font-family: sans-serif;
            align-items: center;
            padding: 20px 10%;
          }

          .left-col {
            width: 50%;
          }

          .right-col {
            width: 50%;
          }

          .links {
            float: right;
          }

          .logo {
            width: 30%;
          }
        `}</style>
      </div>
    );
  }
}

export default DreamflowNavbar;
