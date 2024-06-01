import { ADD_TO_CART_FAILURE, ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS, ADD_TO_WISHLIST, CLEAR_CART_ITEMS, CLEAR_CART_ITEMS_FAILURE, CLEAR_CART_ITEMS_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, GET_LOGIN_FAILURE, GET_LOGIN_REQUEST, GET_LOGIN_SUCCESS, GET_LOGOUT, GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_SEARCH_FALURE, GET_SEARCH_REQUEST, GET_SEARCH_SUCCESS, GET_SINGLE_FAILURE, GET_SINGLE_REQUEST, GET_SINGLE_SUCCESS, GET_WISHLIST_FAILURE, GET_WISHLIST_ITEMS, GET_WISHLIST_SUCCESS, REMOVE_FROM_CART_FAILURE, REMOVE_FROM_CART_REQUEST, REMOVE_FROM_CART_SUCCESS, REMOVE_FROM_WISHLST, SET_USER_DATA, TOTAL_PAGES } from "./action-types";

const initialState = {
    products: [],
    singleProduct: {},
    isLoggedIn: localStorage.getItem('islogged') || false,
    isLoading: false,
    isError: false,
    wishlist: [],
    cart: [],
    isAddToCartLoading: false,
    user: JSON.parse(localStorage.getItem('user')) || {},
    totalPages: 1,
    search: [],
    searchLoading: false,
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
            return { ...state, isAddToCartLoading: true, isError: false };
        case ADD_TO_CART_SUCCESS:
            return { ...state, isAddToCartLoading: false, cart: [...state.cart, action.payload] };
        case ADD_TO_CART_FAILURE:
            return { ...state, isAddToCartLoading: false, isError: true };
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
        case TOTAL_PAGES:
            return { ...state, totalPages: action.payload }
        case GET_SINGLE_REQUEST:
            return { ...state, isLoading: true, isError: false }
        case GET_SINGLE_SUCCESS:
            return { ...state, isLoading: false, singleProduct: action.payload }
        case GET_SINGLE_FAILURE:
            return { ...state, isLoading: false, isError: true }
        case CLEAR_CART_ITEMS:
            return { ...state, isLoading: true, isError: false }
        case CLEAR_CART_ITEMS_SUCCESS:
            return { ...state, isLoading: false, cart: [] }
        case CLEAR_CART_ITEMS_FAILURE:
            return { ...state, isLoading: false, isError: true }
        case GET_SEARCH_REQUEST:
            return { ...state, searchLoading: true, isError: false }
        case GET_SEARCH_SUCCESS:
            return { ...state, searchLoading: false, search: action.payload };
        case GET_SEARCH_FALURE:
            return { ...state, searchLoading: false, isError: true };
        case GET_WISHLIST_ITEMS:
            return { ...state, isLoading: true, isError: false }
        case GET_WISHLIST_SUCCESS:
            return { ...state, isLoading: false, wishlist: action.payload };
        case GET_WISHLIST_FAILURE:
            return { ...state, isLoading: false, isError: false };
        case ADD_TO_WISHLIST:
            return { ...state, isAddToCartLoading: false, wishlist: [...state.wishlist, action.payload] }
        case REMOVE_FROM_WISHLST:
            return { ...state, isLoading: false, wishlist: action.payload };
        default:
            return state;
    }
}