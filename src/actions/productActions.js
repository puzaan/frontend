import axios from 'axios';
import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from '../constants/productConstant.js';


export const listProducts = () => async (dispatch) => {
    try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const { data } = await axios.get("http://localhost:5000/api/products");
    dispatch({
        type: PRODUCT_LIST_SUCCESS,
        playload: data,
    })
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            playload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        });
    
    }
};


export const listProductsDetails = (id) => async (dispatch) => {
    try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });
    const { data } = await axios.get(`http://localhost:5000/api/products/${id}`);
    dispatch({
        type: PRODUCT_DETAILS_SUCCESS,
        playload: data,
    })
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            playload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        });
    
    }
};