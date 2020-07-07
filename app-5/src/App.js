import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "./Image";

class App extends Component {
  render() {
    return (
      <div className="imageHolder">
        <Image url={"https://st2.depositphotos.com/4265001/11797/v/950/depositphotos_117970696-stock-illustration-bulldog-logo-illustration.jpg"} />
      </div>
    );
  }
}

export default App;