import { connect } from "react-redux";
import { login } from "../../actions/SessionActions";
import LoginForm from "./LoginForm";

import { resetSessionErrors } from "../../actions/SessionActions";
import { openModal, closeModal } from "../../actions/ModalActions";
import styles from "./SessionForm.module.scss";
import { fetchCart } from "../../actions/CartActions";

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    formType: "Sign In",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
    otherForm: (
      <button
        className={styles.ModalChangeForm}
        onClick={(e) => {
          e.preventDefault();
          dispatch(openModal("signup"));
          dispatch(resetSessionErrors());
        }}
      >
        Register
      </button>
    ),
    closeModal: () => {
      dispatch(closeModal());
      dispatch(resetSessionErrors());
    },
    resetSessionErrors: () => dispatch(resetSessionErrors()),
		fetchCart: (userId) => dispatch(fetchCart(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
