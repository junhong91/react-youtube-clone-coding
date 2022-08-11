import React, { Component } from "react";
import "./app.css";
import Navbar from "./components/navbar";
import youtubeSearchApi from "./helper/api";

class App extends Component {
  async handleSearch(keyword) {
    const resp = await youtubeSearchApi.getVieos(keyword);
    console.log(resp);
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
