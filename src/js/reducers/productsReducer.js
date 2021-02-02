import {SET_LIST_PRODUCT} from "../constanst/actionConstanst";

const intState = {
    listProduct:[]
}

const  productReducer = (state = intState, action) => {
    switch (action.type) {
        case SET_LIST_PRODUCT:{
            return {
                ...state,
                listProduct: action.payload
            };
        }
    }
    return state;
}
export default  productReducer;
