import {
  RECEIVE_BUSINESSES,
  RECEIVE_CURRENT_BUSINESS,
} from "../actions/BusinessActions";

export default function (state = {}, action) {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_BUSINESS:
      return {
        ...state,
        ...action.business,
      };

    case RECEIVE_BUSINESSES:
      return action.businesses;

    default:
      return state;
  }
}
