import React from "react";
import styles from "./searchbar.module.css";

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
    <form ref={formRef} className={styles.searchContainer} onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className={styles.input}
        placeholder="Search"
      />
      <button className={styles.button}>
        <i className="fas fa-magnifying-glass"></i>
      </button>
    </form>
  );
};

export default Searchbar;
