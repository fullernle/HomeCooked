import { connect } from "react-redux";
import { logout } from "../../actions/SessionActions";
import { openModal, closeModal } from "../../actions/ModalActions";
import { withRouter } from "react-router-dom";

import Navbar from "./Navbar";

const mapStateToProps = (state) => ({
  loggedIn: state.session.isAuthenticated,
});

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
});

export default withRouter(connect(mapStateToProps, mDTP)(Navbar));
