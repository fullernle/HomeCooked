import React, { Component } from "react";
import styles from "./Cart.module.scss";

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
    this.displayProducts = this.displayProducts.bind(this);
    this.productTotal = this.productTotal.bind(this);
    this.updateCart = this.updateCart.bind(this);
    this.updateBE = this.updateBE.bind(this);
  }

  componentDidMount() {
    this.props.fetchCart(this.props.match.params.userId).then((res) => {
      let cart = res.cart;
      this.setState({
        ...cart,
      });
    });
  }

  shouldComponentUpdate(nextProps) {
    if (Object.values(nextProps.cart.totalPrice) !== this.state.totalPrice) {
      return true;
    }
    return false;
  }

  updateBE() {
    let cart = Object.assign({}, this.state);
    this.props.updateCart(cart.userId, cart);
  }

  updateCart(e) {
    e.preventDefault();
    let products = this.state.products;
    let totalPrice = 0;
    let totalQuantity = products.length;

    products.forEach((product) => (totalPrice += parseInt(product.price)));

    this.setState(
      {
        totalPrice,
        totalQuantity,
      },
      this.updateBE
    );
  }

  increaseQuantity(product) {
    let products = this.state.products;
    products.push(product);

    this.setState({ products });
  }

  decreaseQuantity(product) {
    let products = this.state.products;
    let i = products.indexOf(product);
    products.splice(i, 1);
    this.setState({ products });
  }

  productTotal(currProduct) {
    let total = 0;

    this.state.products.forEach((product) => {
      if (product.name === currProduct.name) {
        total += parseInt(product.price);
      }
    });
    return total;
  }

  filterProducts(products) {
    let unique = [];
    let flags = [];

    for (let i = 0; i < products.length; i++) {
      if (flags[products[i].name]) continue;
      flags[products[i].name] = true;
      unique.push(products[i]);
    }

		unique.sort((a, b) => parseInt(b.price) - parseInt(a.price));
    return unique;
  }

  countProduct(currProd) {
    let count = 0;
    this.state.products.forEach((product) => {
      if (product.name === currProd.name) count++;
    });

    return count;
  }

  displayProducts() {
    let cart = this.state;
    let products = cart.products;

    let uniqueProducts = this.filterProducts(products);

    let list = uniqueProducts.map((product) => {
      return (
        <div className={styles.Item}>
          <div className={styles.Name}>{product.name}</div>
          <div className={styles.Quantity}>
            <button
              className={styles.QuantityBttn}
              onClick={(e) => {
                e.preventDefault();
                this.decreaseQuantity(product);
              }}
            >
              -
            </button>
            <span className={styles.ProductCount}>
              {this.countProduct(product)}
            </span>
            <button
              className={styles.QuantityBttn}
              onClick={(e) => {
                e.preventDefault();
                this.increaseQuantity(product);
              }}
            >
              +
            </button>
          </div>
          <div className={styles.Price}>${product.price}</div>
        </div>
      );
    });

    return list;
  }

  render() {
    if (Object.values(this.state).length === 0) {
      // if (!this.state){
      return null;
    } else {
      return (
        <>
          <span className={styles.TopBorder}></span>
          <div className={styles.Wrapper}>
            <header className={styles.Header}>
              {/* <h1>Your Cart</h1> */}
            </header>

            <div className={styles.List}>
              <div className={styles.ProductHeaders}>
                <span className={styles.HeaderName}>Product</span>
                <span className={styles.HeaderQuantity}>Quantity</span>
                <span className={styles.HeaderPrice}>Price Per Item</span>
              </div>
              <div className={styles.ProductList}>{this.displayProducts()}</div>
              <button className={styles.Update} onClick={this.updateCart}>
                Update Cart
              </button>
              {/* <button>Clear cart</button> */}
            </div>

            <div className={styles.Totals}>
              <div className={styles.TotalQuantity}>
                Total Items: {this.state.totalQuantity}
              </div>

              <div className={styles.TotalPrice}>
                Total Price: ${this.state.totalPrice}
              </div>

              <button className={styles.Checkout}>Checkout</button>
            </div>
          </div>
        </>
      );
    }
  }
}
