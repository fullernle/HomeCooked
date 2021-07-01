import React, { Component } from "react";
import Rating from "react-simple-star-rating";
import styles from "./Reviews.module.scss";
import { withRouter } from "react-router-dom";

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      username: this.props.currentUser.username,
      rating: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRating = this.handleRating.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const review = Object.assign({}, this.state);
    this.props.createReview(this.props.businessId, review);
    this.setState({
      body: "",
      username: this.props.currentUser.username,
      rating: 0,
    })
  }

  update(field) {
   
    return (e) => {
      this.setState({
        [field]: e.currentTarget.value,
      });
    }
  }

  handleRating = number => {
    const rating = {rating: number}
    this.setState(rating)
  };
  
  render() {
    return (
      <div className={styles.ReviewForm}>
        <form onSubmit={this.handleSubmit}>
          <Rating
            onClick={this.handleRating}
            ratingValue={this.state.rating}
            size={36}
            // label
            transition
            fillColor="orange"
            emptyColor="gray"
            className={styles.Rating} // Will remove the inline style if applied
          />
          <textarea
            value={this.state.body}
            onChange={this.update("body")}
            className={styles.Reviews}
          ></textarea>
          <br />
          <button className={styles.Submit} type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default withRouter(Review);
