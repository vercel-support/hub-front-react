const initialState = {
  cartSkus: ["7891000623008", "7891000623107", "7891000005620", "7891000005644"],
  storeId: "5e8e1c6e43a61128433f0eed",
  shippingType: "delivey",
  error: null,
  totalQuantity: 100,
  cep: '18080-430',
  cartItems: [],
  fetchCartDataError: '',
  storageItems: [],
  fetchShippingDataError: '',
  shipping: {},
  loading: true,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return Object.assign({}, state, {
        cartSkus: state.cartSkus.push(action.sku),
      });
    case 'SET_CEP':
      return Object.assign({}, state, {
        cep: action.cep,
      });
    case 'SET_STORE':
      return Object.assign({}, state, {
        store: action.store,
      });
    case 'SET_CART_ITEM':
      return Object.assign({}, state, {
        cartItems: action.items,
      });
    case 'ADD_STORAGE_ITEM_DETAILS':
      return Object.assign({}, state, {
        storageItems: [...state.storageItems, action.item],
      });
    case 'ADD_CART_ITEM':
      return Object.assign({}, state, {
        cartItems: [...state.cartItems, action.item],
      });
    case 'SET_CART_SHIPPING':
      return Object.assign({}, state, {
        shipping: action.shipping,
      });
    case 'SET_CART_ITEMS':
      return Object.assign({}, state, {
        cartItems: action.items,
      });
    case 'SET_CART_SKUS':
      return Object.assign({}, state, {
        cartSkus: action.items,
      });
    case 'SET_STORAGE_ITEMS':
      return Object.assign({}, state, {
        storageItems: action.items,
      });
    case 'REMOVE_FROM_CART':
      return Object.assign({}, state, {
        cartItems: state.cartItems.filter((item) => item.sku !== action.sku),
      });
    case 'REMOVE_FROM_STORAGE':
      return Object.assign({}, state, {
        storageItems: state.storageItems.filter((item) => item.sku !== action.sku),
      });
    case 'REMOVE_FROM_LIST':
      return Object.assign({}, state, {
        cartSkus: state.cartSkus.filter((item) => item !== action.sku),
      });
    case 'START_LOAD':
      return Object.assign({}, state, {
        loading: true,
      });
    case 'END_LOAD':
      return Object.assign({}, state, {
        loading: false,
      });
    case 'SET_ERROR':
      return Object.assign({}, state, {
        error: action.message,
      });
    case 'RECEIVE_API_SHIPPING_DATA':
      return Object.assign({}, state, {
        shipping: action.data,
      });
    case 'SET_FETCH_SHIPPING_DATA_ERROR':
      return Object.assign({}, state, {
        fetchShippingDataError: action.message,
      });
    case 'RECEIVE_API_CART_DATA':
      return Object.assign({}, state, {
        storageItems: action.data,
      });
    case 'SET_FETCH_CART_DATA_ERROR':
      return Object.assign({}, state, {
        fetchCartDataError: action.message,
      });
    default:
      return state;
  }
};
export default cartReducer;
