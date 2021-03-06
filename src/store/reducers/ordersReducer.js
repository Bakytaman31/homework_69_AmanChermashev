import {ORDER_FAILURE, ORDER_REQUEST, ORDER_SUCCESS} from "../actions/actionTypes";

const initialState = {
    loading: false,
    error: null,
};

export const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ORDER_REQUEST:
            return {
                ...state,
                loading: true
            };
        case ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null
            };
        case ORDER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
};