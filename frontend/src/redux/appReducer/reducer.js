import { ADD_TO_CART_FAILURE, ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS, GET_LOGIN_FAILURE, GET_LOGIN_REQUEST, GET_LOGIN_SUCCESS, GET_LOGOUT, GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "./action-types";

const initialState = {
    products: [],
    isLoggedIn: false,
    isLoading: false,
    isError: false,
    wishlist: [],
    cart: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LOGIN_REQUEST:
            return { ...state, isLoading: true, isError: false }
        case GET_LOGIN_SUCCESS:
            return { ...state, isLoading: false, isLoggedIn: true }
        case GET_LOGIN_FAILURE:
            return { ...state, isLoading: false, isError: true }
        case GET_LOGOUT:
            return { ...state, isLoggedIn: false }
        case GET_PRODUCTS_REQUEST:
            return { ...state, isLoading: true, isError: false }
        case GET_PRODUCTS_SUCCESS:
            return { ...state, isLoading: false, products: action.payload }
        case GET_PRODUCTS_FAILURE:
            return { ...state, isLoading: false, isError: false };
        case ADD_TO_CART_REQUEST:
            return { ...state, isLoading: true, isError: false };
        case ADD_TO_CART_SUCCESS:
            return { ...state, isLoading: false, cart: action.payload };
        case ADD_TO_CART_FAILURE:
            return { ...state, isLoading: false, isError: true };
        default:
            return state;
    }
}