import {SET_LIST_PRODUCT, SET_PRODUCT_DETAIL} from "../constanst/actionConstanst";
import {LIST_PRODUCT, PRODUCT_DETAIL} from "../constanst/apiConstanst";
import callApi from "../service/callApi";

export const fetchListProduct= (onSuccess, onFail) =>{
 return ()=>callApi(LIST_PRODUCT,"GET",null,onSuccess,onFail);
}
export const fetchProductDetail= (id,onSuccess, onFail) =>{
    return ()=>callApi(PRODUCT_DETAIL+id,"GET",null,onSuccess,onFail);
}
export const setListProduct = (listProduct) => {
    return {
        type : SET_LIST_PRODUCT,
        payload : listProduct
    }
}
export const setProductDetail = (productDetail) => {
    return {
        type : SET_PRODUCT_DETAIL,
        payload : productDetail
    }
}
