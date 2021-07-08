import React, { Component } from "react";
import { addToCart } from "../../actions/CartActions";
import styles from "./Product.module.scss";
export default class Product extends Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(e) {
    e.preventDefault();
    let { session, product } = this.props;
    let user = session.user;
    if (user && Object.keys(user).length > 0) {
      this.props.addToCart(user.id, product).then(() => {
        this.props.openModal("cartItemAdded");
      });
    } else {
      this.props.openModal("requireLogin");
    }
  }

  render() {
    let { product } = this.props;
    let photo = product.photos[0];
    return (
      <>
        <div className={styles.Product}>
          <div className={styles.Photo}>
            <img src={photo} alt="food item" />
          </div>

          <div className={styles.ProductInfo}>
            <div>
              <div className={styles.Name}>{product.name}</div>
              <div className={styles.Price}>${product.price}</div>
              <p className={styles.Description}> {product.description} </p>
            </div>
            <button onClick={this.addToCart} className={styles.CartBttn}>
              Add To Cart
            </button>
          </div>
        </div>
      </>
    );
  }
}
