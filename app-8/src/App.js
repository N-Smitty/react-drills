import React, { Component } from "react";
import "./App.css";

import axios from "axios";

class App extends Component {
  constructor() {
    super();

    this.state = {
      simbellaMamba: ""
    };
  }

  componentDidMount() {
    axios.get("https://dog.ceo/api/breeds/image/random").then(response => {
      this.setState({
        simbellaMamba: response.data
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Name: {this.state.simbellaMamba.name}</h1>
        <h1>Birth Year: {this.simbellaMamba.birth_year}</h1>
        <h1>Weight: {this.state.simbellaMamba.weight}</h1>
        <h1>Eye Color: {this.state.simbellaMamba.eye_color}</h1>
      </div>
    );
  }
}

export default App;