import axios from 'axios';
import { GET_LOGIN_FAILURE, GET_LOGIN_REQUEST, GET_LOGIN_SUCCESS, GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, url } from './action-types';
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

export const getLogin = ({ email, password },navigate) => {
    return async(dispatch) => {
        dispatch({ type: GET_LOGIN_REQUEST })
        console.log("working..");
        try {
            const response = await axios.post(`${url}/user/login`, {
                email: email,
                password: password
            })
            if (response && response.data) {
                console.log(response.data);
                localStorage.setItem('token', response.data.token);
                dispatch({ type: GET_LOGIN_SUCCESS })
                
                navigate('/')
            }
            console.log("working..");
        } catch (error) {
            console.log(error);
            dispatch({ type: GET_LOGIN_FAILURE })
        }
    }
}