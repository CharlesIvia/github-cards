import React, { Component } from "react";
import Card from "./Card";

export default class CardList extends Component {
  render() {
    return (
      <div>
        {this.props.profiles.map((profile) => (
          <Card {...profile} />
        ))}
      </div>
    );
  }
}
