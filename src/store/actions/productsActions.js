import {ADD_PRODUCT, PRODUCT_REQUEST, PRODUCT_SUCCESS, REMOVE_PRODUCT} from "./actionTypes";
import axiosApp from "../../axios-app";

export const productRequest = () => ({type: PRODUCT_REQUEST});
export const productSuccess = data => ({type: PRODUCT_SUCCESS ,data});

export const addProduct = (product, price) => ({type: ADD_PRODUCT, product, price});
export const removeProduct = (product, price) => ({type: REMOVE_PRODUCT, product, price });

export const getProducts = () => {
    return dispatch => {
            dispatch(productRequest());
             axiosApp.get('products.json').then(res => {
                dispatch(productSuccess(res.data));
             }, error => error)
        }
    };

