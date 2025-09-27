"use client";

import { useContext } from "react";
import { MouseContext } from "../../context/MouseContext";

import styles from "./SportMenu.module.scss";

const SportMenu = () => {
  const { cursorChangeHandler } = useContext(MouseContext);

  return (
    <ul className={styles.container}>
      <li
        onMouseEnter={() => cursorChangeHandler("hovered")}
        onMouseLeave={() => cursorChangeHandler("")}
      >
        BOXE
      </li>
      <li
        onMouseEnter={() => cursorChangeHandler("hovered")}
        onMouseLeave={() => cursorChangeHandler("")}
      >
        MUAY- THAÏ
      </li>
      <li
        onMouseEnter={() => cursorChangeHandler("hovered")}
        onMouseLeave={() => cursorChangeHandler("")}
      >
        MMA
      </li>
      <li
        onMouseEnter={() => cursorChangeHandler("hovered")}
        onMouseLeave={() => cursorChangeHandler("")}
      >
        JJB/NO-GI
      </li>
      <li
        onMouseEnter={() => cursorChangeHandler("hovered")}
        onMouseLeave={() => cursorChangeHandler("")}
      >
        FITNESS
      </li>
    </ul>
  );
};

export default SportMenu;
