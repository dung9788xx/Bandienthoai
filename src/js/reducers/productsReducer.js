import { SET_LIST_PRODUCT, SET_PRODUCT_DETAIL } from '../constants/actionConstants';

const intState = {
  listProduct: [],
  productDetail: null,
};

const productReducer = (state = intState, action) => {
  switch (action.type) {
    case SET_LIST_PRODUCT: {
      return {
        ...state,
        listProduct: action.payload,
      };
    }
    case SET_PRODUCT_DETAIL: {
      return {
        ...state,
        productDetail: action.payload,
      };
    }
    default: return state;
  }
};
export default productReducer;
