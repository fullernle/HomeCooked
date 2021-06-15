import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/RouteUtil";
import { Switch, Route } from "react-router-dom";
import NavBarContainer from "./nav/NavbarContainer";

import MainPageContainer from "./main/MainPageContainer";
import LoginFormContainer from "./session/LoginFormContainer";
import SignupFormContainer from "./session/SignupFormContainer";
import styles from "./App.module.scss";

const App = () => (
  <div>
    <div className={styles.Background}>
      <nav>
        <NavBarContainer />
      </nav>
      <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route path="/" component={MainPageContainer} />
      </Switch>
    </div>
  </div>
);

export default App;
