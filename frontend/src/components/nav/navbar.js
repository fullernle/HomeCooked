import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
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
        <div>
          <Link className='nav-links' to={"/"}>Home</Link>
          <button className='nav-bttn' onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link className='nav-links' to={"/signup"}>Signup</Link>
          <Link className='nav-links' to={"/login"}>Login</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Link to="/" className='nav-logo'>HomeCooked</Link>
        {this.getLinks()}
      </div>
    );
  }
}

export default NavBar;
