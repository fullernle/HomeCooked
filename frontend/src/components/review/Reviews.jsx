import React, { Component } from "react";
import Rating from "react-simple-star-rating";
import styles from "./Reviews.module.scss";
import { withRouter } from "react-router-dom";

class Review extends React.Component {
  constructor(props) {
    super(props);

    let currUser = this.props.currentUser;
    let name = "";
    if (currUser) name = currUser.username;
    this.state = {
      body: "",
      username: name,
      rating: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRating = this.handleRating.bind(this);
  }

	componentDidMount() {
		this.props.resetReviewErrors();
	}
  handleSubmit(e) {
    e.preventDefault();
    const review = Object.assign({}, this.state);
    this.props.createReview(this.props.businessId, review);
    this.setState({
      body: "",
      username: this.props.currentUser.username,
      rating: 0,
    });
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.currentTarget.value,
      });
    };
  }

  handleRating = (number) => {
    const rating = { rating: number };
    this.setState(rating);
  };

  render() {
    const { errors } = this.props;
    return (
      <div className={styles.Wrapper}>
        <h3>Leave a Review!</h3>
        <div className={styles.ReviewForm}>
          <form onSubmit={this.handleSubmit}>
            <label className={styles.RatingWrapper}>
              {" "}
              Rating
              <Rating
                onClick={this.handleRating}
                ratingValue={this.state.rating}
                size={20}
                // label
                transition
                fillColor="orange"
                emptyColor="gray"
                className={styles.Rating} // Will remove the inline style if applied
              />
              {errors && errors.rating ? (
                <span className={styles.Error}>
                  Rating must be minimum 1 star
                </span>
              ) : null}
            </label>

            <div className={styles.BodyWrapper}>
              <textarea
                value={this.state.body}
                onChange={this.update("body")}
                className={styles.Body}
              ></textarea>
              {errors && errors.body ? (
                <span className={styles.Error}>Body must contain text</span>
              ) : null}
            </div>

            <br />
            <button className={styles.Submit} type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Review);
