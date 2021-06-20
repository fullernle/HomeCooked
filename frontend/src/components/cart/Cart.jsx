import React, { Component } from "react";

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: null,
    };
  }
  componentDidMount() {
    this.props.fetchCart(this.props.match.params.userId).then((res) => {
      this.setState({
        cart: res.cart,
      });
    });
  }
  render() {
    if (!this.state.cart) {
      return null;
    } else {
      return <div>hello</div>;
    }
  }
}
