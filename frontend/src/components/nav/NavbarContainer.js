import { connect } from "react-redux";
import { logout } from "../../actions/SessionActions";
import { openModal, closeModal } from "../../actions/ModalActions";
import { withRouter } from "react-router-dom";

import Navbar from "./Navbar";

const mapStateToProps = (state) => ({
  loggedIn: state.session.isAuthenticated,
	user: state.session.user
});

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
});

export default withRouter(connect(mapStateToProps, mDTP)(Navbar));
