import {
	REMOVE_SELECTED_PRODUCTS,
	SELECTED_PRODUCTS,
	SET_PRODUCTS,
} from "../constants/action-type";

const initialState = {
	products: [],
	selectedProduct: null,
};

export const productReducers = (state = initialState, action) => {
	switch (action.type) {
		case SET_PRODUCTS:
			return {
				...state,
				products: action.payload,
			};

		default:
			return state;
	}
};

export const selectedProductsReducer = (state = {}, action) => {
	switch (action.type) {
		case SELECTED_PRODUCTS:
			return {
				...state,
				...action.payload,
			};
		case REMOVE_SELECTED_PRODUCTS:
			return {};

		default:
			return state;
	}
};
