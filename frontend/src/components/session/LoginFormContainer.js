import { connect } from "react-redux";
import { login } from "../../actions/SessionActions";
import LoginForm from "./LoginForm";

import { resetSessionErrors } from "../../actions/SessionActions";
import SignupForm from "./SignupForm";
import { openModal, closeModal } from "../../actions/ModalActions";

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
    otherForm: (
      <button
        className="modal-change-form"
        onClick={(e) => {
          e.preventDefault();
          dispatch(openModal("signup"));
          dispatch(resetSessionErrors());
        }}
      >
        Register
      </button>
    ),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
