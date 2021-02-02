import {SET_LIST_PRODUCT} from "../constanst/actionConstanst";
import {LIST_PRODUCT} from "../constanst/apiConstanst";
import callApi from "../service/callApi";

export const fetchListProduct= (onSuccess, onFail) =>{
 return ()=>callApi(LIST_PRODUCT,"GET",null,onSuccess,onFail);
}
export const setListProduct = (listProduct) => {
    return {
        type : SET_LIST_PRODUCT,
        payload : listProduct
    }
}
