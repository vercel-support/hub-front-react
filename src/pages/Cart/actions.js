export const REQUEST_API_CART_DATA = 'REQUEST_API_CART_DATA';
export const RECEIVE_API_CART_DATA = 'RECEIVE_API_CART_DATA';
export const REQUEST_API_SHIPPING_DATA = 'REQUEST_API_SHIPPING_DATA';
export const RECEIVE_API_SHIPPING_DATA = 'RECEIVE_API_SHIPPING_DATA';
export const SET_FETCH_CART_DATA_ERROR = 'SET_FETCH_CART_DATA_ERROR';
export const SET_FETCH_SHIPPING_DATA_ERROR = 'SET_FETCH_SHIPPING_DATA_ERROR';
function addToCart(sku) {
    return {
        type: 'ADD_TO_CART',
        sku
    }
}
function setCEP(cep) {
    return {
        type: 'SET_CEP',
        cep
    }
}
function setStore(store) {
    return {
        type: 'SET_STORE',
        store
    }
}
function setCartItems(items) {
    return {
        type: 'SET_CART_ITEMS',
        items
    }
}
function setCartSkus(items) {
    return {
        type: 'SET_CART_SKUS',
        items
    }
}
function setStorageItems(items) {
    return {
        type: 'SET_STORAGE_ITEMS',
        items
    }
}
function addItemDetails(item) {
    return {
        type: 'ADD_STORAGE_ITEM_DETAILS',
        item
    }
}
function addCartItem(item) {
    return {
        type: 'ADD_CART_ITEM',
        item
    }
}
function setCartShipping(shipping) {
    return {
        type: 'SET_CART_SHIPPING',
        shipping
    }
}
function removeFromCart(sku) {
    return {
        type: 'REMOVE_FROM_CART',
        sku
    }
}
function removeFromStorage(sku) {
    return {
        type: 'REMOVE_FROM_STORAGE',
        sku
    }
}
function removeFromList(sku) {
    return {
        type: 'REMOVE_FROM_LIST',
        sku
    }
}
function startLoading() {
    return {
        type: 'START_LOAD',
    }
}
function endLoading() {
    return {
        type: 'END_LOAD',
    }
}
function setError(message) {
    return {
        type: 'SET_ERROR',
        message
    }
}

export const cartActions = {
    addToCart,
    setCEP,
    setStore,
    setCartItems,
    addItemDetails,
    addCartItem,
    setCartShipping,
    removeFromCart,
    removeFromStorage,
    removeFromList,
    startLoading,
    endLoading,
    setError,
    setCartSkus,
    setStorageItems,
}