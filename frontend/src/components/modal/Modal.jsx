import React from "react";
import { closeModal } from "../../actions/ModalActions";
import { connect } from "react-redux";
import LoginFormContainer from "../session/LoginFormContainer";
import SignupFormContainer from "../session/SignupFormContainer";
import RequireLogin from "../session/RequireLogin";
import CartItemAdded from "../cart/CartItemAdded";
import styles from "./Modal.module.scss";


function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case "login":
      component = <LoginFormContainer />;
      break;
    case "signup":
      component = <SignupFormContainer />;
      break;
    case "requireLogin":
      component = <RequireLogin />;
      break;
    case "cartItemAdded":
      component = <CartItemAdded />;
			break;
    default:
      return null;
  }
  return (
    <div className={styles.ModalBackground} onClick={closeModal}>
      <div className={styles.ModalChild} onClick={(e) => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    modal: state.ui.modal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
