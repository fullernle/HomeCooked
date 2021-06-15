import { connect } from "react-redux";
import { logout } from "../../actions/SessionActions";

import Navbar from "./Navbar";

const mapStateToProps = (state) => ({
  loggedIn: state.session.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Navbar);
