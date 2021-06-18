import React, { Component } from "react";
import styles from "./Businesses.module.scss";
import { Link } from "react-router-dom";

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
          <div className={styles.List}>
            {this.props.businesses.map((business) => {
              return (
                <Link className={styles.NavLink} to={`/homecook/${business._id}`}>
                  {business.name}
                </Link>
              );
            })}
          </div>
        </div>
      );
    }
  }
}
