"use client";

import { useContext } from "react";
import useMousePosition from "../../hooks/useMousePosition";
import { MouseContext } from "../../context/MouseContext";

import styles from "./Cursor.module.scss";

const Cursor = () => {
  const { cursorType } = useContext(MouseContext);
  const { x, y } = useMousePosition();

  return (
    <div
      className={`${styles.container} ${
        cursorType === "hovered" ? styles.active : ""
      }`}
      style={{
        left: `${x}px`,
        top: `${y}px`,
      }}
    >
      <span>PUNCH!</span>
    </div>
  );
};

export default Cursor;
