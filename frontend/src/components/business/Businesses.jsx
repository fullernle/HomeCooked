import React, { Component } from "react";
import styles from "./Business.module.scss";
import {Link } from "react-router-dom"

export default class Business extends Component {
  componentDidMount() {
    this.props.fetchBusinesses();
  }
  render() {
    if (!Array.isArray(this.props.businesses)) {
      return null;
    } else {
      return (
        <div className={styles.Wrapper}>
          <div className={styles.Banner}></div>

          <div>
            <ul>
              {this.props.businesses.map((business) => {
                return <Link to={`/homecook/${business._id}`}>BUSINESS</Link>;
              })}
            </ul>
          </div>
        </div>
      );
    }
  }
}
