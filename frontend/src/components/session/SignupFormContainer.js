import { connect } from "react-redux";
import { signup } from "../../actions/SessionActions";
import { resetSessionErrors } from "../../actions/SessionActions";
import SignupForm from "./SignupForm";
import { openModal, closeModal } from "../../actions/ModalActions";
import styles from "./SessionForm.module.scss";

const mapStateToProps = (state) => {
  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => dispatch(signup(user)),
    otherForm: (
      <button
        className={styles.ModalChangeForm}
        onClick={(e) => {
          e.preventDefault();
          dispatch(openModal("login"));
          dispatch(resetSessionErrors());
        }}
      >
        Login
      </button>
    ),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
