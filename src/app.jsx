import React, { Component } from "react";
import "./app.css";
import Navbar from "./components/navbar";
import YoutubeSearchApi from "./helper/api";

class App extends Component {
  async handleSearch(keyword) {
    const videos = await YoutubeSearchApi.getVieos(keyword);
    console.log(videos);
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
