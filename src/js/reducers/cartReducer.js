import { SET_PRODUCT_IN_CART } from '../constants/actionConstants';

const intState = {
  listProduct: [],
};

const cartReducer = (state = intState, action) => {
  switch (action.type) {
    case SET_PRODUCT_IN_CART: {
      return {
        ...state,
        listProduct: action.payload,
      };
    }
    default: return state;
  }
};
export default cartReducer;
