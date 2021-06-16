import React, { Component } from 'react'
import styles from "./MainPage.module.scss"
export default class MainPage extends Component {
	render() {
		let loggedIn = "";
		if (this.props.isLoggedIn) {
			loggedIn = (
				<span className={styles.Username}> 
					{this.props.user.username}
				</span>
			)
		}
		return (
      <div className={styles.MainPage}>
        <div className={styles.Background}>
          {this.props.isLoggedIn ? (
            <h1 className={styles.header}>Welcome {loggedIn}</h1>
          ) : (
            ""
          )}
          <h1 className={styles.header}>Homecooked meals,</h1>
          <h1 className={styles.header}>delivered to your door!</h1>
        </div>
        <div>PLACEHOLDER</div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className={styles.MainMiddle}>
          <div className={styles.MiddleText}>
            <div className={styles.MainMiddleTopText}>
              All Grandmas Here. All in one digital kitchen!
            </div>
            <div className={styles.MainMiddleLowerText}>
              Explore the best homemade cuisine from the best cooks delivered
              straight to your door. You can taste the love!
            </div>
          </div>

          <div>
            <img
              className={styles.MiddlePic}
              src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.6435-9/120353962_1084437715304816_5064892278192494043_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=ZQDsJ7bEJhYAX-14ARv&_nc_ht=scontent-lga3-1.xx&oh=309f7fc10e0903439d872d6f85d709cf&oe=60CE1C8B"
            />
          </div>
        </div>

        <div className={styles.BeforeFooter}>TESTING</div>
        <footer className={styles.Footer}>
          Copyright &copy; 2021 HomeCooked
        </footer>
      </div>
    );
	}
}
