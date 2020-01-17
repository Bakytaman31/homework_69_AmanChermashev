import {ORDER_FAILURE, ORDER_REQUEST, ORDER_SUCCESS} from "./actionTypes";
import axiosApp from "../../axios-app";

export const orderRequest = () => ({type: ORDER_REQUEST});
export const orderSuccess = () => ({type: ORDER_SUCCESS});
export const orderFailure = error => ({type: ORDER_FAILURE, error});

export const createOrder = order => {
    return async (dispatch) => {
        try{
            dispatch(orderRequest());
            await axiosApp.post('orders.json', order);
            dispatch(orderSuccess());
        } catch (e) {
            dispatch(orderFailure(e))
        }
    }
};