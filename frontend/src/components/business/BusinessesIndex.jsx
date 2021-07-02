import React, { Component } from "react";
import styles from "./BusinessesIndex.module.scss";
import { Link } from "react-router-dom";

export default class Business extends Component {
  componentDidMount() {
    this.props.fetchBusinesses();
    this.props.fetchProducts();

    this.getImage = this.getImage.bind(this);
  }

  getImage(productId) {
    return this.props.products.find((x) => x._id === productId).photos[0];
  }
  render() {
    if (!Array.isArray(this.props.businesses)) {
      return null;
    } else {
      if (this.props.products.length < 1) {
        return null;
      } else {
        return (
          <div className={styles.Wrapper}>
            <div className={styles.List}>
              {this.props.businesses
                .filter((business) => {
                  if (this.props.query === "") {
                    return true;
                  } else if (
                    business.name
                      .toLowerCase()
                      .includes(this.props.query.toLowerCase()) ||
                    business.location.display_address[0]
                      .toLowerCase()
                      .includes(this.props.query.toLowerCase()) ||
                    business.categories[0].title
                      .toLowerCase()
                      .includes(this.props.query.toLowerCase()) ||
                    business.categories[1].title
                      .toLowerCase()
                      .includes(this.props.query.toLowerCase()) ||
                    business.categories[2].title
                      .toLowerCase()
                      .includes(this.props.query.toLowerCase())
                  ) {
                    return true;
                  }
                })
                .map((business) => {
                  return (
                    <>
                      <Link
                        to={`/homecook/${business._id}`}
                        className={styles.Item}
                      >
                        <div className={styles.Details}>
                          <Link
                            className={styles.NavLink}
                            to={`/homecook/${business._id}`}
                          >
                            {business.name}
                          </Link>
                          <p className={styles.Categories}>
                            {business.categories[0].title},{" "}
                            {business.categories[1].title},{" "}
                            {business.categories[2].title}{" "}
                          </p>
                          <p>{business.location.display_address[0]}</p>
                          <p>{business.location.display_address[1]}</p>
                        </div>
                        <p className={styles.PhotoWrapper}>
                          <img
                            className={styles.Photo}
                            src={this.getImage(business.products[0])}
                            alt=""
                          />
                        </p>
                      </Link>
                    </>
                  );
                })}
            </div>
          </div>
        );
      }
    }
  }
}
