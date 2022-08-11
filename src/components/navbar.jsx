import React from "react";
import styles from "../post-css/navbar.module.css";
import Searchbar from "./searchbar";
import youtubeLogo from "./youtube-logo.jpg";

const Navbar = (props) => {
  const handleLogoClick = () => {
    console.log("Youtube logo clicked!");
  };

  const handleSearch = (keyword) => {
    props.onSearch(keyword);
  };

  return (
    <nav className={styles["nav-container"]}>
      <img
        className={styles["nav-logo"]}
        src={youtubeLogo}
        alt="youtube-logo"
        onClick={handleLogoClick}
      />
      <Searchbar onSearch={handleSearch} />
    </nav>
  );
};

export default Navbar;
