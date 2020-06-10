import { combineReducers } from 'redux';
import cartReducer from './pages/Cart/reducer';
import loginReducer from './pages/Login/reducer'

const initialState = {
  path: '/',
  collMenuShow: false,
};

const generalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PATH':
      return Object.assign({}, state, {
        path: action.path,
      });
    case 'TOOGLE_COLL_MENU':
      return Object.assign({}, state, {
        collMenuShow: !state.collMenuShow
      });
    default:
      return state;
  }
};

export default combineReducers({
  window: generalReducer,
  cart: cartReducer,
  user: loginReducer,
})