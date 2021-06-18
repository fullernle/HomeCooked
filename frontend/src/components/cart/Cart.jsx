import React, { Component } from "react";

export default class Cart extends Component {
  componentDidMount() {
    this.props.fetchCart(this.props.match.params.userId);
  }
  render() {
    if (!this.props.cart) {
      return null;
    } else {
			console.log(this.props.cart);
      return <div>

			</div>;
    }
  }
}
