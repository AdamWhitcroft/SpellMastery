import React, { Component } from "react";

// TODO
// - logic for double faced cards
// - make this state available to other components

export default class Scryfall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      card: null,
    };
  }

  async componentDidMount() {
    const SCRYFALLQUERY = "https://api.scryfall.com/cards/named?exact=";
    const CARD = this.props.name;
    const CARDCLEANED = CARD.toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/&/g, "%26");
    const response = await fetch(SCRYFALLQUERY + CARDCLEANED);
    const data = await response.json();
    this.setState({ card: data, loading: false });
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <div>loading...</div>
        ) : (
          <div>
            <li>{this.state.card.name}</li>
            <li>
              <img src={this.state.card.image_uris.small} />
            </li>
          </div>
        )}
      </div>
    );
  }
}
