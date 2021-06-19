import {
  RECEIVE_BUSINESSES,
  RECEIVE_CURRENT_BUSINESS,
} from "../actions/BusinessActions";

export default function (state = {}, action) {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_BUSINESS:
      let business = action.business;
      newState[business._id] = business;
      return newState;

    case RECEIVE_BUSINESSES:
      let businesses = action.businesses;
      businesses.forEach((business) => {
				let id = business._id
        newState[id] = business;
      });
      return newState;

    default:
      return state;
  }
}
