import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/RouteUtil";
import { Switch, Route } from "react-router-dom";
import NavBarContainer from "./nav/NavbarContainer";

import MainPageContainer from "./main/MainPageContainer";
import styles from "./App.module.scss";
import Modal from "../components/modal/Modal";

const App = () => (
  <div>
    <Modal />
    <div className={styles.Background}>
      <nav>
        <NavBarContainer />
      </nav>
      <Switch>
        <Route path="/" component={MainPageContainer} />
      </Switch>
    </div>
  </div>
);

export default App;
