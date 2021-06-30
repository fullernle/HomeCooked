import React, { Component } from "react";
import styles from "./Reviews.module.scss";
import { withRouter } from "react-router-dom";

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const review = Object.assign({}, this.state);
    this.props.createReview(this.props.businessId, review);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  render() {
    return (
      <div className={styles.ReviewForm}>
        <form onSubmit={this.handleSubmit}>
          <textarea
            onChange={this.update("body")}
            className={styles.Reviews}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default withRouter(Review);
