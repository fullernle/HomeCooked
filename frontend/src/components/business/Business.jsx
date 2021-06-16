import React, { Component } from "react";
import styles from "./Business.module.scss";

export default class Business extends Component {
  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.id);
  }
  render() {
    if (!this.props.business) {
			return null;
    } else {
			console.log(this.props.business);
      return (
        <div className={styles.Wrapper}>
          <div className={styles.Banner}>
            <div className={styles.Overlay}></div>
            <div className={styles.Header}>
              <h1 className={styles.HeaderTitle}>Home Cook 1</h1>
              <h3 className={styles.HeaderDetails}>Asian, Korean </h3>
            </div>
          </div>
        </div>
      );
    }
  }
}
