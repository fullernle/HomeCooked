import React, { Component } from "react";
import { fetchBusinessProducts } from "../../util/BusinessUtil";
import styles from "./Business.module.scss";
import Product from "../product/Product";
import StarIcon from "@material-ui/icons/Star";

export default class Business extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: null,
    };
  }

  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.id);
    fetchBusinessProducts(this.props.match.params.id).then((products) => {
      this.setState({ products: products.data });
    });
  }

  render() {
    if (this.state.products === null) {
      return null;
    } else {
      let { products } = this.state;
      let { business } = this.props;
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

      function timeConverter(string) {
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

      let startTime = timeConverter(start);
      let endTime = timeConverter(end);

      return (
        <div className={styles.Wrapper}>
          <div
            style={{ backgroundImage: `url(${banner})` }}
            className={styles.Banner}
          ></div>
          <div className={styles.Overlay}></div>

          <div className={styles.HeaderWrapper}>
            <div className={styles.Header}>
              <h1 className={styles.HeaderTitle}>{business.name}</h1>
              <h3 className={styles.HeaderDetails}>
                {business.categories[0].title}
              </h3>
              <h3 className={styles.Price}>{business.price}</h3>
              <div className={styles.Stars}>
                {Array(business.rating).fill(<StarIcon className="star" />)}
              </div>
            </div>
            <div className={styles.InfoWrapper}>
              <div>
                <h1 className={styles.BusinessInfo}>Business Info</h1>
                <h3 className={styles.BusinessLocation}>
                  {business.location.display_address}
                </h3>
                <h3 className={styles.BusinessNumber}>
                  {business.display_phone}
                </h3>
                <h3 className={styles.BusinessHours}>
                  7 Days A Week {startTime}-{endTime}
                </h3>
              </div>
            </div>
          </div>

          <div className={styles.ProductWrapper}>
            {products.map((product) => {
              return <Product product={product} />;
            })}
          </div>
        </div>
      );
    }
  }
}
