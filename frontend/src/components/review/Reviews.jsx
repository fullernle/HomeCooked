import React, { Component } from "react";
import styles from "./Reviews.module.scss";

export default class Review extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log(this.props);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.postReview(e.target.value);
    console.log(this.props.postReview);
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea className={styles.Reviews}></textarea>
        <button type='submit'>Submit</button>
      </form>
    );
  }
}
