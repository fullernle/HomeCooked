import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/RouteUtil";
import { Switch, Route } from "react-router-dom";
import NavBarContainer from "./nav/NavbarContainer";

import MainPageContainer from "./main/MainPageContainer";
import LoginFormContainer from "./session/LoginFormContainer";
import SignupFormContainer from "./session/SignupFormContainer";

const App = () => (
  <div>
		<nav>
   		<NavBarContainer />
		</nav>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route path="/" component={MainPageContainer} />
    </Switch>
  </div>
);

export default App;
