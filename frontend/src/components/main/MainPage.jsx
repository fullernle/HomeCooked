import React, { Component } from "react";
import styles from "./MainPage.module.scss";
import { Link } from "react-router-dom";

export default class MainPage extends Component {
  render() {
    let loggedIn = "";
    if (this.props.isLoggedIn) {
      loggedIn = (
        <span className={styles.Username}>{this.props.user.username}</span>
      );
    }

    const { user } = this.props;
    return (
      <>
        <div className={styles.Background}></div>
        <div className={styles.Overlay}></div>
        <div className={styles.Underlay}></div>
        <div className={styles.MainPage}>
          <div className={styles.HeaderContainer}>
            <h1 className={styles.Header}>Homecooked meals,</h1>
            <h1 className={styles.Header}>delivered to your door!</h1>

            <Link to="/search" className={styles.Link}>
              Welcome Home,{" "}
              {(user &&
                Object.keys(user).length === 0 &&
                user.constructor === Object) ||
              user === undefined
                ? "Sunny!"
                : user.username}
            </Link>
          </div>

          <div className={styles.MainMiddle}>
            <div className={styles.MiddleText}>
              <div className={styles.MainMiddleTopText}>All Grandmas Here.</div>
              <div className={styles.MainMiddleTopText}>
                In one digital kitchen!
              </div>
              <br />
              <div className={styles.MainMiddleLowerText}>
                Explore the best homemade cuisine from the best cooks
              </div>
              <div className={styles.MainMiddleLowerText}>
                delivered straight to your door. You can taste the love!
              </div>
            </div>
            <div>
              <img
                className={styles.MiddlePic}
                src="https://app-homecooked-images.s3.us-west-1.amazonaws.com/HomeCookedSplashOne.jpg"
              />
            </div>
          </div>

          <div className={styles.MainLower}>
            <div>
              <img
                className={styles.LowerPic}
                src="https://app-homecooked-images.s3.us-west-1.amazonaws.com/HomeCookedSplashImage.jpg"
              />
            </div>
            <div className={styles.LowerText}>
              <div className={styles.BeforeFooterTop}>
                Every Grandma Welcome!
              </div>
              <div className={styles.BeforeFooterLower}>
                How many grandmas in your area?
              </div>
              <div className={styles.BeforeFooterLower}>
                You have the chance to try all their foods
              </div>
            </div>
          </div>

          <footer className={styles.Footer}>
            Copyright &copy; 2021 HomeCooked
          </footer>
        </div>
      </>
    );
  }
}
