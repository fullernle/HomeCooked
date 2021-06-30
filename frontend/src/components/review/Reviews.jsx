import React, { Component } from "react";
import styles from "./Reviews.module.scss";
import { withRouter } from "react-router-dom";


class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // console.log(this.props);
  }

  componentDidMount() {
    this.props.fetchReviews(this.props.businessId);
    console.log(this.props.reviews)
  };

  handleSubmit(e) {
    e.preventDefault();
    const review = Object.assign({}, this.state)
    this.props.createReview(this.props.businessId, review);
    // console.log(this.props);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  render() {
    return (

      <form onSubmit={this.handleSubmit}>
        <textarea onChange={this.update('body')} className={styles.Reviews}></textarea>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default withRouter(Review);

// -----------------------------------

  // handleSubmit(e) {
  //   e.preventDefault();
  //   const state = {
  //     user_id: this.state.userId,
  //     product_id: this.state.productId,
  //     rating: parseInt(this.state.rating),
  //     title: this.state.title,
  //     body: this.state.body
  //   }
  //   this.props.postReview(state);
  //   this.setState({complete: true});
  // }