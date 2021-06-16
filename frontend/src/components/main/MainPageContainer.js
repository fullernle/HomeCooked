import { connect } from "react-redux";
import { signup } from "../../actions/SessionActions";
import MainPage from "./MainPage";

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
