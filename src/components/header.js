import React from "react";
import { Link } from "gatsby";

import Navigation from "./navigation";

import styles from "../styles/modules/header.module.scss";

const Header = () => (
  <header className={styles.header} role="banner">
    <div className={styles.wrapper}>
      <div>
        <Link to="/" title="Return to home page">
          SpellMastery
        </Link>
      </div>
      <Navigation />
    </div>
  </header>
);

export default Header;
