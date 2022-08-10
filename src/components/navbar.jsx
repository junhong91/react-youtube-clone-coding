import React, { Component } from "react";
import styles from "./navbar.module.css";
import YoutubeLogo from "./youtube-logo.jpg";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <img src={YoutubeLogo} className={styles.logo} alt="youtube-logo" />
      </nav>
    );
  }
}

export default Navbar;
