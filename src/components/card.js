import React, { Component } from "react";

import Scryfall from "./scryfall";

import styles from "../styles/modules/card.module.scss";

/*
  ---
  CARD COMPONENT
  ---
  This is to be used to fetch a single card and render a tooltip
  that shows the card on hover.
  ---
*/

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  /*
 ---
 TODO
 ---
 Component needs to use <Scryfall /> to fetch image_uri and store
 it in the state of this component.
 ---
*/

  render() {
    return (
      <span className={`${styles.card} tooltip show-card`} data-request="">
        {this.props.name}
        <span>
          <img alt={this.props.name} src="" />
        </span>
      </span>
    );
  }
}
