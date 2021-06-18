import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.transNav = this.transNav.bind(this);
    this.normalNav = this.normalNav.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    if (this.props.loggedIn) {
      if (!this.props.user) {
        return null;
      } else {
        return (
          <>
            <div className={styles.NavBttnsWrapper}>
              <Link to={`/carts/${this.props.userId}`} className={styles.Cart}>
                <img
                  className={styles.CartIcon}
                  src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png"
                />
              </Link>
              <button className={styles.NavBttn} onClick={this.logoutUser}>
                Logout
              </button>
            </div>
          </>
        );
      }
    } else {
      return (
        <>
          <div className={styles.NavBttnsWrapper}>
            <button
              className={styles.NavBttn}
              onClick={() => this.props.openModal("login")}
            >
              Sign In
            </button>
          </div>
        </>
      );
    }
  }
	
  transNav() {
    return (
      <div className={styles.NavWrapper}>
        <header className={styles.TransNavBar}>
          <Link to="/" className={styles.Logo}>
            HomeCooked
          </Link>
          {this.getLinks()}
        </header>
      </div>
    );
  }

  normalNav() {
    return (
      <div className={styles.NavWrapper}>
        <header className={styles.NavBar}>
          <Link to="/" className={styles.Logo}>
            HomeCooked
          </Link>
          {this.getLinks()}
        </header>
      </div>
    );
  }

  render() {
    return this.props.location.pathname === "/homecooks"
      ? this.normalNav()
      : this.transNav();
  }
}

export default Navbar;
