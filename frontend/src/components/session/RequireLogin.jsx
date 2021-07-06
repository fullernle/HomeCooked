import React, { Component } from "react";
import styles from "./SessionForm.module.scss";
export default class RequireLogin extends Component {
  render() {
    return <div className={styles.RequireLogin}>Please login to continue!</div>;
  }
}
