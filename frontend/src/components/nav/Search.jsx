import React, { Component } from "react";
import styles from "./Navbar.module.scss";

// export default class Search extends Component {
//   render() {
//     return (
//       <div>
//         <form>
//           <input className={styles.Search} placeholder="Search" type="text" />
//         </form>
//       </div>
//     );
//   }
// }

// ------------------------ testing

export default class Search extends Component {
  render() {
    return (
      <div class={styles.SearchContainer}>
        <input
          className={styles.SearchInput}
          type="text"
          placeholder="Search"
        />
      </div>
    );
  }
}
