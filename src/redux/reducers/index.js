import { combineReducers } from "redux";
import { productReducers } from "./productReducers";
import { selectedProducts } from "../actions/productActions";

export const reducers = combineReducers({
	allProducts: productReducers,
	product: selectedProducts,
});
