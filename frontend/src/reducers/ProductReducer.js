import {
  RECEIVE_CURRENT_PRODUCT,
  RECEIVE_PRODUCTS,
} from "../actions/ProductActions";

export default function (state = {}, action) {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.products;
    case RECEIVE_CURRENT_PRODUCT:
      return {
        ...state,
        ...action.business,
      };

    default:
      return state;
  }
}
