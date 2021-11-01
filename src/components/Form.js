import React, { Component } from "react";

export default class Form extends Component {
  state = { userName: "" };

  handleSubmit = async (event) => {
    event.preventDefault();
    let resp = await fetch(
      `https://api.github.com/users/${this.state.userName}`
    );
    let data = await resp.json();
    this.props.createProfile(data); //props from App component
    this.setState({ userName: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.userName}
          onChange={(event) => this.setState({ userName: event.target.value })}
          placeholder="GitHub username"
          required
        ></input>
        <button>Add card</button>
      </form>
    );
  }
}
