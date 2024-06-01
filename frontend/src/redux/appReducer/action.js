import axios from 'axios';
import { ADD_TO_CART_FAILURE, ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS, CLEAR_CART_ITEMS, CLEAR_CART_ITEMS_FAILURE, CLEAR_CART_ITEMS_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, GET_LOGIN_FAILURE, GET_LOGIN_REQUEST, GET_LOGIN_SUCCESS, GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_SEARCH_FALURE, GET_SEARCH_REQUEST, GET_SEARCH_SUCCESS, GET_SINGLE_FAILURE, GET_SINGLE_REQUEST, GET_SINGLE_SUCCESS, GET_WISHLIST_FAILURE, GET_WISHLIST_ITEMS, GET_WISHLIST_SUCCESS, REMOVE_FROM_CART_FAILURE, REMOVE_FROM_CART_REQUEST, REMOVE_FROM_CART_SUCCESS, REMOVE_FROM_WISHLST, SET_USER_DATA, TOTAL_PAGES, url } from './action-types';

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export const Get_Products = (page) => {
    return async (dispatch) => {
        dispatch({ type: GET_PRODUCTS_REQUEST })
        try {
            const res = await axios.get(`${url}/products/`, { params: { page: page } })
            dispatch({ type: GET_PRODUCTS_SUCCESS, payload: shuffleArray(res.data.products) })
            dispatch({ type: TOTAL_PAGES, payload: res.data.totalPages })
        } catch (error) {
            dispatch({ type: GET_PRODUCTS_FAILURE });
        }
    }
}

export const searchProducts = (query) => {
    return async (dispatch) => {
        dispatch({ type: GET_SEARCH_REQUEST })
        try {
            const res = await axios.get(`${url}/products`, { params: { title: query, category: query } });
            dispatch({ type: GET_SEARCH_SUCCESS, payload: res.data.products });
            console.log(res.data.products)
        } catch (error) {
            dispatch({ type: GET_SEARCH_FALURE })
        }
    }
}

export const get_single_prod = (id) => {
    return async (dispatch) => {
        dispatch({ type: GET_SINGLE_REQUEST })
        try {
            const res = await axios.get(`${url}/products/${id}`);
            dispatch({ type: GET_SINGLE_SUCCESS, payload: res.data })
            console.log(res.data);
        } catch (error) {
            console.log(error);
            dispatch({ type: GET_SINGLE_FAILURE })
        }
    }
}

export const getLogin = ({ email, password }, navigate) => {
    return async (dispatch) => {
        dispatch({ type: GET_LOGIN_REQUEST })
        console.log("working..");
        try {
            const response = await axios.post(`${url}/user/login`, {
                email: email,
                password: password
            })
            if (response && response.data) {
                // console.log(response.data);
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('islogged', true)
                localStorage.setItem('user', JSON.stringify(response.data.user))
                // console.log(response.data.user);
                dispatch({ type: GET_LOGIN_SUCCESS })
                dispatch({ type: SET_USER_DATA, payload: response.data.user })
                navigate('/')
            }
            console.log("working..");
        } catch (error) {
            console.log(error);
            dispatch({ type: GET_LOGIN_FAILURE })
        }
    }
}
export const get_sign_up = (data, navigate) => {
    console.log(data);
    return async (dispatch) => {
        try {
            const res = await axios.post(`${url}/user/register`, {
                email: data.email,
                name: data.name,
                avatar: data.avatar,
                password: data.password
            })
            console.log(res.data);
            navigate('/login')
        } catch (error) {
            console.log(error);
        }
    }
}

export const add_toCart = (prod) => {
    return async (dispatch) => {
        dispatch({ type: ADD_TO_CART_REQUEST })
        console.log("clicking");
        try {
            const token = localStorage.getItem('token');
            const headers = {
                Authorization: `Bearer ${token}`,
            }
            const response = await axios.post(`${url}/cart/`, { productData: prod._id }, { headers });
            if (response && response.data) {
                // userId: 889989898232838,
                dispatch({ type: ADD_TO_CART_SUCCESS, payload: { productData: prod, added_at: Date.now() } })
            }
            console.log(response.data.message);
        } catch (error) {
            console.log(error);
            dispatch({ type: ADD_TO_CART_FAILURE })
        }
    }
}

export const get_wishlist_items = () => {
    console.log("fetching your wishlist");
    return async (dispatch) => {
        try {
            console.log('working');
            dispatch({ type: GET_WISHLIST_ITEMS })
            const token = localStorage.getItem('token');
            const headers = {
                Authorization: `Bearer ${token}`,
            }
            const response = await axios.get(`${url}/wishlist/`, { headers });
            console.log(response.data);
            if (response && response.data) {
                dispatch({ type: GET_WISHLIST_SUCCESS, payload: response.data })
            }
        } catch (error) {
            dispatch({ type: GET_WISHLIST_FAILURE })
            console.log(error);
        }
    }
}

export const add_toWishlist = (prod) => {
    return async (dispatch) => {
        dispatch({ type: ADD_TO_CART_REQUEST })
        console.log("clicking");
        try {
            const token = localStorage.getItem('token');
            const headers = {
                Authorization: `Bearer ${token}`,
            }
            const response = await axios.post(`${url}/wishlist/`, { productData: prod._id }, { headers });
            if (response && response.data) {
                // userId: 889989898232838,
                dispatch({ type: GET_WISHLIST_SUCCESS, payload: { productData: prod, added_at: Date.now() } })
            }
            console.log(response.data.message);
        } catch (error) {
            console.log(error);
            dispatch({ type: ADD_TO_CART_FAILURE })
        }
    }
}

export const get_cart_items = () => {
    console.log("fetching your carts");
    return async (dispatch) => {
        try {
            dispatch({ type: GET_CART_REQUEST })
            const token = localStorage.getItem('token');
            const headers = {
                Authorization: `Bearer ${token}`,
            }
            const response = await axios.get(`${url}/cart/`, { headers });
            console.log(response.data);
            if (response && response.data) {
                dispatch({ type: GET_CART_SUCCESS, payload: response.data })
            }
        } catch (error) {
            dispatch({ type: GET_CART_FAILURE })
            console.log(error);
        }
    }
}

export const delete_cart_item = (data, id) => {
    // console.log(data);
    return async (dispatch) => {
        dispatch({ type: REMOVE_FROM_CART_REQUEST })
        try {
            const token = localStorage.getItem('token');
            const headers = {
                Authorization: `Bearer ${token}`,
            }
            const res = await axios.delete(`${url}/cart/${id}`, { headers })
            console.log(res);
            if (res.status === 200) {
                dispatch({ type: REMOVE_FROM_CART_SUCCESS, payload: data })
            }
        } catch (error) {
            console.log(error);
            dispatch({ type: REMOVE_FROM_CART_FAILURE })
        }
    }
}

export const delete_wishlist_item = (data, id) => {
    // console.log(data);
    return async (dispatch) => {
        dispatch({ type: REMOVE_FROM_CART_REQUEST })
        try {
            const token = localStorage.getItem('token');
            const headers = {
                Authorization: `Bearer ${token}`,
            }
            const res = await axios.delete(`${url}/wishlist/${id}`, { headers })
            console.log(res);
            if (res.status === 200) {
                console.log(data);
                dispatch({ type: REMOVE_FROM_WISHLST, payload: data })
            }
        } catch (error) {
            console.log(error);
            dispatch({ type: REMOVE_FROM_CART_FAILURE })
        }
    }
}

export const clear_cart = () => {
    return async (dispatch) => {
        dispatch({ type: CLEAR_CART_ITEMS });
        try {
            const token = localStorage.getItem('token');
            const headers = {
                Authorization: `Bearer ${token}`
            }
            const res = await axios.delete(`${url}/cart/deleteall`, { headers });
            console.log(res);
            if (res.status === 200) {
                dispatch({ type: CLEAR_CART_ITEMS_SUCCESS })
            }
        } catch (error) {
            console.log(error);
            dispatch({ type: CLEAR_CART_ITEMS_FAILURE })
        }
    }
}