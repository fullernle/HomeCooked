import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/RouteUtil";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBarContainer from "./nav/NavbarContainer";
import BusinessContainer from "./business/BusinessContainer";
import MainPageContainer from "./main/MainPageContainer";
import Modal from "../components/modal/Modal";
import BusinessesContainer from "./business/BusinessesContainer";
import FamilyStyle from "./familystyle/FamilyStyle";

import MapBoxContainer from "./map/map_container"

const App = () => (
  <div>
    <Modal />
        <nav>
          <NavBarContainer />
        </nav>
        <Switch>
<<<<<<< HEAD
					<Route exact path="/familystyle" component={MapBoxContainer} />
=======
					<Route exact path="/familystyle" component={FamilyStyle} />
>>>>>>> style-search
					<Route exact path="/homecooks" component={BusinessesContainer} />
					<Route exact path="/homecook/:id" component={BusinessContainer} />
          <Route exact path="/" component={MainPageContainer} />
					<Redirect to="/" />
        </Switch>
  </div>
);

export default App;
