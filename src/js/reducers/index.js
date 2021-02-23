import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import productReducer from './productsReducer';

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
});
export default rootReducer;
