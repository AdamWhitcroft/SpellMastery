import React from "react";

import styles from "../styles/modules/footer.module.scss";

const Footer = () => (
  <footer className={styles.footer} role="contentinfo">
    <div className={styles.wrapper}>
      <p>
        The literal and graphical information presented on this site about
        Magic: The Gathering, including card images, the mana symbols, and
        Oracle text, is copyright Wizards of the Coast, LLC, a subsidiary of
        Hasbro, Inc.
      </p>
    </div>
  </footer>
);

export default Footer;
