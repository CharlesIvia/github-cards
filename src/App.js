import "./App.css";
import React, { Component } from "react";
import CardList from "./components/CardList";

const testData = [
  {
    name: "Dan Abramov",
    avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4",
    company: "@facebook",
  },
  {
    name: "Sophie Alpert",
    avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4",
    company: "Humu",
  },
  {
    name: "Sebastian Markbåge",
    avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4",
    company: "Facebook",
  },
];
export default class App extends Component {
  state = { profiles: testData };

  addNewProfile = (profileData) => {
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };

  render() {
    return (
      <div>
        <div className="header">GitHub Cards App</div>
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}
