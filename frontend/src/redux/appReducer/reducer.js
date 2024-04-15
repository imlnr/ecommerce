import { ADD_TO_CART_FAILURE, ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, GET_LOGIN_FAILURE, GET_LOGIN_REQUEST, GET_LOGIN_SUCCESS, GET_LOGOUT, GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, REMOVE_FROM_CART_FAILURE, REMOVE_FROM_CART_REQUEST, REMOVE_FROM_CART_SUCCESS, SET_USER_DATA } from "./action-types";

const initialState = {
    products: [],
    isLoggedIn: localStorage.getItem('islogged') || false,
    isLoading: false,
    isError: false,
    wishlist: [],
    cart: [],
    user: localStorage.getItem('user') || {}
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
            return { ...state, isLoggedIn: false, products: [], cart: [], wishlist: [] }
        case GET_PRODUCTS_REQUEST:
            return { ...state, isLoading: true, isError: false }
        case GET_PRODUCTS_SUCCESS:
            return { ...state, isLoading: false, products: action.payload }
        case GET_PRODUCTS_FAILURE:
            return { ...state, isLoading: false, isError: false };
        case ADD_TO_CART_REQUEST:
            return { ...state, isLoading: true, isError: false };
        case ADD_TO_CART_SUCCESS:
            return { ...state, isLoading: false, cart: [...state.cart, action.payload] };
        case ADD_TO_CART_FAILURE:
            return { ...state, isLoading: false, isError: true };
        case GET_CART_REQUEST:
            return { ...state, isLoading: true, isError: false };
        case GET_CART_SUCCESS:
            return { ...state, isLoading: false, cart: action.payload };
        case GET_CART_FAILURE:
            return { ...state, isLoading: false, isError: true };
        case SET_USER_DATA:
            return { ...state, user: action.payload }
        case REMOVE_FROM_CART_REQUEST:
            return { ...state, isLoading: true, isError: false }
        case REMOVE_FROM_CART_SUCCESS:

            return { ...state, isLoading: false, cart: action.payload }
        case REMOVE_FROM_CART_FAILURE:
            return { ...state, isLoading: false, isError: true }
        default:
            return state;
    }
}