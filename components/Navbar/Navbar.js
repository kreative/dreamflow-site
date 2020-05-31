import React, { Component } from "react";
import Wrapper from "../Wrapper/Wrapper";

class Navbar extends Component {
  classToggle() {
    const navs = document.querySelectorAll(".Navbar__Items");
    navs.forEach((nav) => nav.classList.toggle("Navbar__ToggleShow"));
  }

  render() {
    return (
      <Wrapper bg="" paddingTop="" paddingBottom="">
        <div className="Navbar">
          <div className="Navbar__Link Navbar__Link-brand">Website title</div>
          <div
            className="Navbar__Link Navbar__Link-toggle"
            onClick={this.classToggle}
          >
            <i className="fas fa-bars"></i>
          </div>
          <nav className="Navbar__Items">
            <div className="Navbar__Link">Longer Link</div>
            <div className="Navbar__Link">Longer Link</div>
            <div className="Navbar__Link">Link</div>
          </nav>
          <nav className="Navbar__Items Navbar__Items--right">
            <div className="Navbar__Link">Link</div>
            <div className="Navbar__Link">Link</div>
          </nav>
          <style jsx>{`
            .Navbar {
              background-color: #46acc2;
              display: flex;
              padding: 16px;
              font-family: sans-serif;
              color: white;
            }

            .Navbar__Link {
              padding-right: 8px;
            }

            .Navbar__Items {
              display: flex;
            }

            .Navbar__Items--right {
              margin-left: auto;
            }

            .Navbar__Link-toggle {
              display: none;
            }

            @media only screen and (max-width: 768px) {
              .Navbar__Items,
              .Navbar {
                flex-direction: column;
              }

              .Navbar__Items {
                display: none;
              }

              .Navbar__Items--right {
                margin-left: 0;
              }

              .Navbar__ToggleShow {
                display: flex;
              }

              .Navbar__Link-toggle {
                align-self: flex-end;
                display: initial;
                position: absolute;
                cursor: pointer;
              }
            }
          `}</style>
        </div>
      </Wrapper>
    );
  }
}

export default Navbar;
