import React from "react";
import Link from "next/link";
import Wrapper from "../Wrapper/Wrapper";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./HowdyBar.module.css";

class HowdyBar extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <Wrapper bg={"rgba(0,0,0,0)"} paddingTop={"10px"} paddingBottom={"10px"}>
          <Link href={"/free-consultation"}>
            <p className={styles.text}>
              <span style={{marginRight:"10px"}}>
                Want to grow your traffic? Get a 60 minute consult for FREE
              </span>
              <FontAwesomeIcon icon={faArrowRight} />
            </p>
          </Link>
        </Wrapper>
      </div>
    );
  }
}

export default HowdyBar;