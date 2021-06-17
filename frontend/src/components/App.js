import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/RouteUtil";
import { Switch, Route } from "react-router-dom";
import NavBarContainer from "./nav/NavbarContainer";
import MapBox from "./map/map_container";
import BusinessContainer from "./business/BusinessContainer";
import MainPageContainer from "./main/MainPageContainer";
import Modal from "../components/modal/Modal";

const App = () => (
  <div>
    <Modal />
    <nav>
      <NavBarContainer />
    </nav>
    <div>
      <MapBox />
    </div>
    <Switch>
      <Route exact path="/homecook/:id" component={BusinessContainer} />
      <Route exact path="/" component={MainPageContainer} />
    </Switch>
  </div>
);

export default App;
