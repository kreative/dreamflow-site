import Link from "next/link";
import React, { Component } from "react";
import Wrapper from "../Wrapper/Wrapper";
import { Container, Row, Col } from "react-grid-system";

class DreamflowNavbar extends Component {
  state = {
    navBackground: this.props.scrollColor,
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const backgroundcolor =
        window.scrollY < 200
          ? this.props.scrollColor
          : "rgba(255, 255, 255, 0.6)";
      this.setState({ navBackground: backgroundcolor });
    });
  }

  openMenu() {
    document.getElementById("__overlay").style.display = "block";
  }

  closeMenu() {
    document.getElementById("__overlay").style.display = "none";
  }

  render() {
    return (
      <div>
        <div className="Navbar__Wrapper">
          <Wrapper bg="rgab(0,0,0,0)" paddingTop="15px" paddingBottom="15px">
            <Container style={{ padding: "0px" }} fluid>
              <Row nogutter>
                <Col>
                  <a href="/">
                    <img
                      className="logo"
                      src="https://kmg-site-assets.kaycdn.com/kreative-dreamflow-black.png"
                      alt="Kreative Dreamflow Logo in all black"
                    />
                  </a>
                </Col>
                <Col
                  style={{
                    textAlign: "right",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-end",
                  }}
                >
                  <svg
                    className="toggle"
                    viewBox="0 0 154 62"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={this.openMenu}
                    fill="black"
                  >
                    <rect width="154" height="11.7297" rx="5" />
                    <rect
                      x="37.6047"
                      y="25.1351"
                      width="116.395"
                      height="11.7297"
                      rx="5"
                    />
                    <rect
                      x="82.3721"
                      y="50.2703"
                      width="71.6279"
                      height="11.7297"
                      rx="5"
                    />
                  </svg>
                </Col>
              </Row>
            </Container>
          </Wrapper>
        </div>
        <div className="overlay" id="__overlay">
          <Wrapper bg="rgab(0,0,0,0)" paddingTop="15px" paddingBottom="15px">
            <Container style={{ padding: "0px", color: "white" }} fluid>
              <Row nogutter>
                <Col></Col>
                <Col
                  style={{
                    textAlign: "right",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-end",
                  }}
                >
                  <svg
                    className="close-toggle"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="times"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 352 512"
                    fill="black"
                    onClick={this.closeMenu}
                  >
                    <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
                  </svg>
                </Col>
              </Row>
            </Container>
          </Wrapper>
          <div className="overlay-content">
            <div className="menu-content">
              <Wrapper>
                <div>
                  <Link href="/">
                    <a className="link">Home</a>
                  </Link>
                  <Link href="/pageflow">
                    <a className="link">Pageflow</a>
                  </Link>
                  <Link href="/toprank">
                    <a className="link">TopRank</a>
                  </Link>
                  <Link href="/kopy">
                    <a className="link">Kopy</a>
                  </Link>
                  <Link href="/contact">
                    <a className="link">Contact</a>
                  </Link>
                  <Link href="/faqs">
                    <a className="link">FAQs</a>
                  </Link>
                  <Link href="/get-started">
                    <a className="get-started-link link">Get Started</a>
                  </Link>
                </div>
              </Wrapper>
            </div>
          </div>
        </div>
        <style jsx>{`
          .Navbar__Wrapper {
            background: ${this.state.navBackground};
            position: fixed;
            top: 0;
            width: 100%;
            overflow: hidden;
            z-index: 1000;
            backdrop-filter: blur(10px);
          }

          .Navbar {
            display: flex;
            font-family: sans-serif;
            align-items: center;
            padding: 20px 10%;
          }

          .toggle {
            width: 30px;
            cursor: pointer;
          }

          .close-toggle {
            width: 15px;
            cursor: pointer;
          }

          .logo {
            width: 40%;
          }

          .overlay {
            display: none;
            height: 100%;
            width: 100%;
            position: fixed;
            z-index: 2000;
            left: 0;
            top: 0;
            background-color: white;
            background-color: rgba(255, 255, 255, 1);
            overflow-x: hidden;
            backdrop-filter: blur(10px);
          }

          .overlay-content {
            width: 100%;
            height: 90%;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .menu-content {
            text-align: center;
            width: 100%;
          }

          .link {
            font-family: "Romana", serif;
            padding-bottom: 1em;
            text-decoration: none;
            font-size: 3em;
            color: black;
            display: block;
          }

          .link:hover {
            text-decoration: underline;
            color: #338eee;
          }

          .get-started-link {
            color: #93c8ff;
          }

          @media screen and (max-width: 767px) {
            .logo {
              width: 60%;
            }
          }

          @media screen and (max-width: 575px) {
            .logo {
              width: 100%;
            }

            .toggle {
              width: 25px;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default DreamflowNavbar;
