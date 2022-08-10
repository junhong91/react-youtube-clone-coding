import React, { Component } from "react";
import "./app.css";
import Navbar from "./components/navbar";

class App extends Component {
  handleSearch(keyword) {
    console.log(keyword);
  }

  render() {
    return (
      <>
        <Navbar onSearch={this.handleSearch} />
      </>
    );
  }
}

export default App;
