import React, { Component } from "react";
import styles from "./Product.module.scss";
export default class Product extends Component {
  render() {
    let { product } = this.props;

    let photo = product.photos[0];
    return (
      <>
        <div className={styles.Product}>
          <div
            style={{ backgroundImage: `url(${photo})` }}
            className={styles.Photo}
          ></div>

          <div className={styles.ProductInfo}>
<<<<<<< HEAD
            <div className={styles.Name}>{product.name}</div>
            <div className={styles.Price}>Price: {product.price}</div>
						<button className= {styles.CartBttn}>Add to Cart</button>
=======
            <div>
              <div className={styles.Name}>{product.name}</div>
              <div className={styles.Price}>${product.price}</div>
            </div>
            <button className={styles.CartBttn}>Add to Cart</button>
>>>>>>> style-search
          </div>
        </div>
      </>
    );
  }
}
