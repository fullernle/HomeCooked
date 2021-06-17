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
    return (
      <>
        <div className={styles.Background}></div>
        <div className={styles.Overlay}></div>
        <div className={styles.Underlay}></div>
        <div className={styles.MainPage}>
          {this.props.isLoggedIn ? (
            <h1 className={styles.Header}>Welcome {loggedIn}</h1>
          ) : (
            ""
          )}
          <h1 className={styles.Header}>Homecooked meals,</h1>
          <h1 className={styles.Header}>delivered to your door!</h1>

          <Link to="/homecooks" className={styles.Link}>
            Welcome Home Sunny!
          </Link>

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
                src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.6435-9/120353962_1084437715304816_5064892278192494043_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=ZQDsJ7bEJhYAX-14ARv&_nc_ht=scontent-lga3-1.xx&oh=309f7fc10e0903439d872d6f85d709cf&oe=60CE1C8B"
              />
            </div>
          </div>

          <div className={styles.MainLower}>
            <div>
              <img
                className={styles.LowerPic}
                src="https://utsc.utoronto.ca/news-events/sites/default/files/image/article/Culinaria-banner-small.jpg"
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

          <div>
            <footer className={styles.Footer}>
              Copyright &copy; 2021 HomeCooked
            </footer>
          </div>
        </div>
      </>
    );
  }
}
