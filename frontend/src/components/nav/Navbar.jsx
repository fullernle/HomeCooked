import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
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
            <div className={`${styles.NavBttnsWrapper} ${styles.WithLogout}`}>
              <Link to={`/carts/${this.props.user.id}`} className={styles.Cart}>
                <i class="fas fa-shopping-cart" style={{ color: "#c26700" }}></i>
              </Link>
              <Link
                to="/search"
                className={`${styles.SrchBttn} ${styles.NavBttn}`}
              >
                Search
              </Link>
              <button className={`${styles.NavBttn}`} onClick={this.logoutUser}>
                Logout
              </button>
              <div className={styles.Divider}>|</div>
              <Link
                to="/about"
                className={`${styles.AbtBttn} ${styles.NavBttn}`}
              >
                About
              </Link>
              <a
                className={`${styles.Git} ${styles.NavBttn}`}
                href="https://github.com/fullernle/HomeCooked"
                target="_blank"
              >
                Github
              </a>
            </div>
          </>
        );
      }
    } else {
      return (
        <>
          <div className={styles.NavBttnsWrapper}>
            <Link
              to="/search"
              className={`${styles.SrchBttn} ${styles.NavBttn}`}
            >
              Search
            </Link>
            <button
              className={styles.NavBttn}
              onClick={() => this.props.openModal("login")}
            >
              Sign In
            </button>
            <div className={styles.Divider}>|</div>
            <Link to="/about" className={`${styles.AbtBttn} ${styles.NavBttn}`}>
              About
            </Link>
            <a
              className={`${styles.Git} ${styles.NavBttn}`}
              href="https://github.com/fullernle/HomeCooked"
              target="_blank"
            >
              Github
            </a>
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
    return (
      <>
        {this.props.location.pathname === "/homecooks" ||
        this.props.location.pathname === "/search" ||
        this.props.location.pathname === "/about" ||
        this.props.location.pathname.includes("/cart")
          ? this.normalNav()
          : this.transNav()}
      </>
    );
  }
}

export default Navbar;
