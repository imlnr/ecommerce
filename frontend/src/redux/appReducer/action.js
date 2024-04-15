import axios from 'axios';
import { ADD_TO_CART_FAILURE, ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, GET_LOGIN_FAILURE, GET_LOGIN_REQUEST, GET_LOGIN_SUCCESS, GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, SET_USER_DATA, url } from './action-types';
export const Get_Products = () => {
    return async (dispatch) => {
        dispatch({ type: GET_PRODUCTS_REQUEST })
        try {
            const res = await axios.get(`${url}/products/`)
            // console.log(res.data);
            dispatch({ type: GET_PRODUCTS_SUCCESS, payload: res.data })
        } catch (error) {
            dispatch({ type: GET_PRODUCTS_FAILURE });
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

export const add_toCart = (prod) => {
    return async (dispatch) => {
        dispatch({ type: ADD_TO_CART_REQUEST })
        try {
            const token = localStorage.getItem('token');
            const headers = {
                Authorization: `Bearer ${token}`,
            }
            const response = await axios.post(`${url}/cart/`, { productData: prod._id }, { headers });
            if (response && response.data) {
                dispatch({ type: ADD_TO_CART_SUCCESS, payload: { userId: 889989898232838, productData: prod, added_at: Date.now() } })
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
            // console.log(response.data.message);
            if (response && response.data) {
                dispatch({ type: GET_CART_SUCCESS, payload: response.data })
            }
        } catch (error) {
            dispatch({ type: GET_CART_FAILURE })
            console.log(error);
        }
    }
}

export const delete_cart_item = (id)=>{
    return async(dispatch)=>{
        dispatch({type:ADD_TO_CART_REQUEST})
        try {
            const token = localStorage.getItem('token');
            const headers = {
                Authorization: `Bearer ${token}`,
            }
            const res = await axios.delete(`${url}/cart/${id}`,{headers})
            console.log(res);
            if(res.status === 200){
                // dispatch({type:ADD_TO_CART_SUCCESS,payload:data})
            }
        } catch (error) {
            console.log(error);
        }
    }
}