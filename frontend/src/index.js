import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/Root";
import configureStore from "./store/Store";

// We will use this to parse the user's session token
import jwt_decode from "jwt-decode";
import { setAuthToken } from "./util/SessionApiUtil";
import { logout } from "./actions/SessionActions";
import axios from "axios";
import { fetchCart } from "./actions/CartActions";

document.addEventListener("DOMContentLoaded", () => {
  let store;

  // If a returning user has a session token stored in localStorage
  if (localStorage.jwtToken) {
    // Set the token as a common header for all axios requests
    setAuthToken(localStorage.jwtToken);

    // Decode the token to obtain the user's information
    const decodedUser = jwt_decode(localStorage.jwtToken);
		
    // Create a preconfigured state we can immediately add to our store
    let preloadedState = {
      session: { isAuthenticated: true, user: decodedUser },
    };

    store = configureStore(preloadedState);
		store.dispatch(fetchCart(decodedUser.id))

    const currentTime = Date.now() / 1000;

    // If the user's token has expired
    if (decodedUser.exp < currentTime) {
      // Logout the user and redirect to the login page
      store.dispatch(logout());
      window.location.href = "/";
    }
  } else {
    // If this is a first time user, start with an empty store
    store = configureStore({});
  }

  const root = document.getElementById("root");
	
  ReactDOM.render(<Root store={store} />, root);
	window.store = store;
	window.axios = axios;
});
