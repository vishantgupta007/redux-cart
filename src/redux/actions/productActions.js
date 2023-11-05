// actions/productActions.js

import {
	REMOVE_SELECTED_PRODUCTS,
	SELECTED_PRODUCTS,
	SET_PRODUCTS,
} from "../constants/action-type";

export const setProducts = (products) => ({
	type: SET_PRODUCTS,
	payload: products,
});

export const selectedProducts = (product) => ({
	type: SELECTED_PRODUCTS,
	payload: product,
});

export const removeSelectedProducts = (product) => ({
	type: REMOVE_SELECTED_PRODUCTS,
	payload: product,
});
