import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    if (this.props.loggedIn) {
      return (
          <button className={styles.NavBttn} onClick={this.logoutUser}>
            Logout
          </button>
      );
    } else {
      return (
				<button className={styles.NavBttn} onClick={() => this.props.openModal("login")}>
					Sign In
				</button>
        
      );
    }
  }
/* <div className={styles.LinkContainer}>
		<Link className={styles.NavLinks} to={"/signup"}>Signup</Link>
		<Link className={styles.NavLinks} to={"/login"}>Login</Link>
	</div> */
  render() {
    return (
      <div className={styles.NavWrapper}>
				<header className={styles.NavBar}>
					<div></div>
					<Link to="/" className={styles.Logo}>HomeCooked</Link>
					{this.getLinks()}
				</header>
      </div>
    );
  }
}

export default Navbar;
