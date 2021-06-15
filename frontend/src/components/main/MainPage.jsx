import React, { Component } from "react";
import styles from "./MainPage.module.scss";
export default class MainPage extends Component {
  render() {
    let loggedIn = "";
    if (this.props.isLoggedIn) {
      loggedIn = (
        <span className={styles.Username}>{this.props.user.username}</span>
      );
    }
    return (
      <>
        <div className={styles.Background}></div>
				<div className={styles.Overlay}></div>
        <div className={styles.MainPage}>
          {this.props.isLoggedIn ? (
            <h1 className={styles.Header}>Welcome {loggedIn}</h1>
          ) : (
            ""
          )}
          <h1 className={styles.Header}>Homecooked meals,</h1>
          <h1 className={styles.Header}>delivered to your door!</h1>
        </div>

        <footer className={styles.Footer}>
          Copyright &copy; 2021 HomeCooked
        </footer>
      </>
    );
  }
}
