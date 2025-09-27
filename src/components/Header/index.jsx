"use client";

import { useState, useEffect } from "react";

import styles from "./Header.module.scss";

import Logo from "../common/Logo";
import SportMenu from "./SportMenu";
import CallToAction from "../common/CallToAction";
import Burger from "./Burger";
import MobileMenu from "./MobileMenu";

import { useContext } from "react";
import { MouseContext } from "../../context/MouseContext";
import useWindowWidth from "@/hooks/useWindowWidth";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { cursorChangeHandler } = useContext(MouseContext);
  const innerWidth = useWindowWidth();

  useEffect(() => {
    if (innerWidth > 768 && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [innerWidth]);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.container}>
      <a
        href="/"
        onMouseEnter={() => cursorChangeHandler("hovered")}
        onMouseLeave={() => cursorChangeHandler("")}
        style={{ zIndex: 9999 }}
      >
        <Logo header />
      </a>
      <SportMenu />
      <CallToAction
        color="lightGreen"
        href="https://docs.google.com/forms/d/e/1FAIpQLScDdcDpIJf1UPcmDsHExsxG-LNnlxVxIlyX8mu9Qm-TR6xaSA/viewform"
      >
        Pré-Inscription
      </CallToAction>
      <Burger handleToggleMenu={handleToggleMenu} isMenuOpen={isMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} />
    </header>
  );
};

export default Header;
