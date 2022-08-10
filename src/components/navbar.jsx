// import React, { Component } from "react";
// import styles from "./navbar.module.css";
// import YoutubeLogo from "./youtube-logo.jpg";

// class Navbar extends Component {
//   render() {
//     return (
//       <nav className={styles.navbar}>
//         <img src={YoutubeLogo} className={styles.logo} alt="youtube-logo" />
//         <form className={styles.searchContainer}>
//           <input type="text" className={styles.input} placeholder="Search" />
//           <button className={styles.button}>
//             <i class="fas fa-magnifying-glass"></i>
//           </button>
//         </form>
//       </nav>
//     );
//   }
// }

// export default Navbar;

import React from "react";
import styles from "./navbar.module.css";
import YoutubeLogo from "./youtube-logo.jpg";

const Navbar = (props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const keyword = inputRef.current.value;
    keyword && props.onSearch(keyword);
    formRef.current.reset();
  };

  return (
    <nav className={styles.navbar}>
      <img src={YoutubeLogo} className={styles.logo} alt="youtube-logo" />
      <form
        ref={formRef}
        className={styles.searchContainer}
        onSubmit={onSubmit}
      >
        <input
          ref={inputRef}
          type="text"
          className={styles.input}
          placeholder="Search"
        />
        <button className={styles.button}>
          <i class="fas fa-magnifying-glass"></i>
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
