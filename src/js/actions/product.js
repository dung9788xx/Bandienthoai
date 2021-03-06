import { SET_LIST_PRODUCT, SET_PRODUCT_DETAIL } from '../constants/actionConstants';
import { LIST_PRODUCT, PRODUCT_DETAIL } from '../constants/apiConstants';
import callApi from '../service/callApi';

export const fetchListProduct = (onSuccess, onFail) => () => callApi(LIST_PRODUCT, 'GET', null, onSuccess, onFail);
export const fetchProductDetail = (id, onSuccess, onFail) => () => callApi(PRODUCT_DETAIL + id, 'GET', null, onSuccess, onFail);
export const setListProduct = (listProduct) => ({
  type: SET_LIST_PRODUCT,
  payload: listProduct,
});
export const setProductDetail = (productDetail) => ({
  type: SET_PRODUCT_DETAIL,
  payload: productDetail,
});
