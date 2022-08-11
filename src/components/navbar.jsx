import React from "react";
import styles from "./navbar.module.css";
import Searchbar from "./searchbar";
import YoutubeLogo from "./youtube-logo.jpg";

const Navbar = (props) => {
  const handleSearch = (keyword) => {
    props.onSearch(keyword);
  };

  return (
    <nav className={styles.navbar}>
      <img src={YoutubeLogo} className={styles.logo} alt="youtube-logo" />
      <Searchbar onSearch={handleSearch} />
    </nav>
  );
};

export default Navbar;
