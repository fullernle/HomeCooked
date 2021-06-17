import React, { Component } from "react";
import { fetchBusinessProducts } from "../../util/BusinessUtil";
import styles from "./Business.module.scss";

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
          <div style={{backgroundImage: `url(${banner})`}} className={styles.Banner}>
            <div className={styles.Overlay}></div>
            <div className={styles.Header}>
              <h1 className={styles.HeaderTitle}>{business.name}</h1>
              <h3 className={styles.HeaderDetails}>Cajun </h3>
            </div>
          </div>
        </div>
      );
    }
  }
}

