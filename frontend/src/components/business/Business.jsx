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
      console.log(randomPhotoIndex);
      console.log(banner);
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
                  7 Days A Week {business.hours[0].open[0].start}-{business.hours[0].open[0].end}
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
