import React from "react";
import styles from "../post-css/searchbar.module.css";

const Searchbar = (props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const keyword = inputRef.current.value;
    keyword && props.onSearch(keyword);
    formRef.current.reset();
  };

  return (
    <form
      className={styles["search-container"]}
      ref={formRef}
      onSubmit={onSubmit}
    >
      <input
        className={styles["search-input"]}
        ref={inputRef}
        type="text"
        placeholder="Search"
      />
      <button className={styles["search-btn"]}>
        <i className="fas fa-magnifying-glass fa-xl"></i>
      </button>
    </form>
  );
};

export default Searchbar;
