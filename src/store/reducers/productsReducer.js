import {
    ADD_PRODUCT,
    INIT_PRODUCT,
    PRODUCT_REQUEST,
    PRODUCT_SUCCESS,
    REMOVE_PRODUCT
} from "../actions/actionTypes";

const initialState = {
    products: null,
    totalPrice: 0,
    loading: false,
    productsCount: {
        plov: 0,
        shakarap: 0,
        bread: 0,
    }
};
const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                [action.product]: state.productsCount[action.product] + 1,
                totalPrice: state.totalPrice + action.price
            };
        case REMOVE_PRODUCT:
            if (state[action.product] === 0) {
                return state;
            }
            return {
                ...state,
                [action.product]: state.productsCount[action.product] - 1,
                totalPrice: state.totalPrice - action.price
            };
        case INIT_PRODUCT:
            return {
                ...state,
                totalPrice: state.totalPrice,
            };
        case PRODUCT_REQUEST:
            return {
                ...state,
                loading: true
            };
        case PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.data,
            };
        default:
            return state;

    }
};

export default productsReducer;