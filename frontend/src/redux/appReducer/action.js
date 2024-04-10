import axios from 'axios';
import { GET_LOGIN_REQUEST, GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, url } from './action-types';
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