"use client";

import { useContext } from "react";
import { MouseContext } from "../../context/MouseContext";

import styles from "./CallToAction.module.scss";

const CallToAction = ({ children, color, href, mobileMenu }) => {
  const { cursorChangeHandler } = useContext(MouseContext);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.container} ${styles[color]} ${
        mobileMenu ? styles.mobileMenu : ""
      }`}
      onMouseEnter={() => cursorChangeHandler("hovered")}
      onMouseLeave={() => cursorChangeHandler("")}
    >
      {children}
    </a>
  );
};

export default CallToAction;
