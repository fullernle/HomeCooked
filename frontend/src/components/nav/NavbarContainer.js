import { connect } from "react-redux";
import { logout } from "../../actions/SessionActions";
import { openModal, closeModal } from "../../actions/ModalActions";

import Navbar from "./Navbar";

const mapStateToProps = (state) => ({
  loggedIn: state.session.isAuthenticated,
});

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mDTP)(Navbar);
