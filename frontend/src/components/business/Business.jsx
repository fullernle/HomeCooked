import React, { Component } from "react";
import { fetchBusinessProducts } from "../../util/BusinessUtil";
import styles from "./Business.module.scss";
import Product from "../product/Product";
import ProductContainer from "../product/ProductContainer";
import StarIcon from "@material-ui/icons/Star";
import { styled } from "@material-ui/core/styles";
import ReviewsContainer from "../review/ReviewsContainer";

const MyStar = styled(StarIcon)({
  color: "#fcf4f0",
  width: "15px",
  backgroundColor: "transparent",
});

export default class Business extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: null,
      reviews: null,
    };

    this.timeConverter = this.timeConverter.bind(this);
  }

  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.id);
    fetchBusinessProducts(this.props.match.params.id).then((products) => {
      this.setState({ products: products.data });
    });
    this.props.fetchReviews(this.props.match.params.id).then((reviews) => {
      this.setState({ reviews: reviews.reviews });
    });
  }

  timeConverter(string) {
    let startTime = string.split(":");
    let hours = Number(startTime[0]);
    let minutes = Number(startTime[1]);
    let startTimeValue;
    if (hours > 0 && hours <= 12) startTimeValue = "" + hours;
    else if (hours > 12) startTimeValue = "" + (hours - 12);
    else if (hours == 0) startTimeValue = "12";
    startTimeValue += minutes < 10 ? ":0" + minutes : ":" + minutes; // get minutes
    startTimeValue += hours >= 12 ? " P.M." : " A.M."; // get AM/PM
    return startTimeValue;
  }

  render() {
    if (this.state.products === null || this.state.reviews === null) {
      return null;
    } else {
      let { products } = this.state;
      let { business, currentUser } = this.props;
      let photos = [];

      products.forEach((product) => {
        photos.push(product.photos[0]);
      });

      let randomPhotoIndex = Math.floor(Math.random() * photos.length);
      let banner = photos[randomPhotoIndex];

      let startString = business.hours[0].open[0].start;
      let endString = business.hours[0].open[0].end;
      let middle = Math.floor(startString.length / 2);
      let beforeStart = startString.substr(0, middle);
      let afterStart = startString.substr(middle);
      let beforeEnd = endString.substr(0, middle);
      let afterEnd = endString.substr(middle);
      let start = `${beforeStart}:${afterStart}`;
      let end = `${beforeEnd}:${afterEnd}`;

      let startTime = this.timeConverter(start);
      let endTime = this.timeConverter(end);

      return (
        <div className={styles.BusinessContent}>
          <div className={styles.Overlay}></div>
          <div className={styles.Wrapper}>
            <div
              style={{ backgroundImage: `url(${banner})` }}
              className={styles.Banner}
            ></div>

            <div className={styles.HeaderWrapper}>
              <div className={styles.Header}>
                <h1 className={styles.HeaderTitle}>{business.name}</h1>
                <h3 className={styles.HeaderDetails}>
                  <div className={styles.Categories}>
                    {business.categories[0].title}
                  </div>
                </h3>
                <div className={styles.SubDetails}>
                  <div className={styles.Rating}>
                    {Array(Math.floor(business.rating)).fill(<MyStar></MyStar>)}
                  </div>
                  <div className={styles.Price}>{business.price}</div>
                </div>
                <div className={styles.BusinessDetails}>
                  <div className={styles.InfoWrapper}>
                    <div className={styles.BusinessNumber}>
                      {business.display_phone}
                    </div>
                    <div className={styles.BusinessHours}>
                      {startTime}-{endTime}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.Content}>
              <div className={styles.ProductWrapper}>
                {products.map((product) => {
                  return <ProductContainer product={product} />;
                })}
              </div>
            </div>
          </div>
          {(currentUser &&
          Object.keys(currentUser).length === 0 &&
          currentUser.constructor === Object) || currentUser === undefined ? (
            null
          ) : <ReviewsContainer businessId={this.props.match.params.id} />}
          <div className={styles.UserReviewsWrapper}>
            {this.state.reviews.map((review) => {
              return <p className={styles.UserReviews}>{review.body}</p>;
            })}
          </div>
        </div>
      );
    }
  }
}
