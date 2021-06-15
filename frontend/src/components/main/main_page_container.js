import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import MainPage from "./main_page";

const mapStateToProps = (state) => {
  return {
    user: state.session.user,
		isLoggedIn: state.session.isAuthenticated 
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => dispatch(signup(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
