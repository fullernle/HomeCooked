import React, { Component } from "react";
import styles from "./Product.module.scss";
export default class Product extends Component {
  render() {
    let { product } = this.props;

    let photo = product.photos[0];
    return (
      <div>
        <div className={styles.Product}>
          <div
            style={{ backgroundImage: `url(${photo})` }}
            className={styles.Photo}
          ></div>

          <div className={styles.ProductInfo}>
            <div>Product: {product.name}</div>
            <div>Quantity: {product.quantity}</div>
            <div>Price: {product.price}</div>
          </div>
        </div>
      </div>
    );
  }
}
