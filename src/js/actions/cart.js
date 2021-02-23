import { SET_PRODUCT_IN_CART } from '../constants/actionConstants';
import { CART } from '../constants/apiConstants';
import callApi from '../service/callApi';

export const fetchListProductInCart = (onSuccess, onFail) => () => callApi(CART, 'GET', null, onSuccess, onFail);
export const setListProductInCat = (listProduct) => ({
  type: SET_PRODUCT_IN_CART,
  payload: listProduct,
});
