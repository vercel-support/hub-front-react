import { combineReducers } from 'redux';
import cartReducer from './pages/Cart/reducer';


export default combineReducers({
  cart: cartReducer,
})