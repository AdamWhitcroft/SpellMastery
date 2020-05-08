import React, { Component } from "react";

import Scryfall from "./scryfall";

import styles from "../styles/modules/spotlight.module.scss";

/*
  ---
  SPOTLIGHT COMPONENT
  ---
  This is to be used to fetch one or more card images and display
  them in a fanned view.
  ---
*/

export default class Spotlight extends Component {
  /*
 ---
 TODO
 ---
 Component needs to use <Scryfall /> to fetch image_uri and store
 it in the state of this component.
 ---
*/

  render() {
    const CardNames = this.props.names;
    const Cards = CardNames.map((name, index) => (
      <li key={index} className={`card-count-${index}`}>
        {/* <Scryfall card={name} /> */}
        {name}
      </li>
    ));

    const CardCount = CardNames.length;

    return (
      <aside className={`${styles.spotlight} group-${CardCount}`}>
        <ul>{Cards}</ul>
      </aside>
    );
  }
}
