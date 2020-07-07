import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      groceries: ["hand sanitizer", "toilet paper", "wipes", "pasta", "cheese"]
    };
  }

  render() {
    let groceriesToDisplay = this.state.groceries.map((element, index) => {
      return <h2 key={index}>{element}</h2>;
    });

    return <div className="App">{groceriesToDisplay}</div>;
  }
}

export default App;