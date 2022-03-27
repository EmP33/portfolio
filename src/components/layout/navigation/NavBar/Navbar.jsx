import React, { useState } from "react";
import CSSModules from "react-css-modules";
import styles from "./Navbar.module.scss";

import logo from "../../../../assets/logo.png";

import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const showMenuHandler = () => {
    setShowMenu((prevState) => !prevState);
  };
  return (
    <nav>
      <div styleName="topBackground"></div>
      <section>
        <div>
          <img src={logo} alt="logo" />
          <BiMenuAltRight styleName="menu-icon" onClick={showMenuHandler} />
        </div>
      </section>
      <ul styleName={showMenu ? "menu-active" : "menu"}>
        <li>PORTFOLIO</li>
        <li>WORKS</li>
        <li>RESOURCES</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  );
};

export default CSSModules(Navbar, styles);
