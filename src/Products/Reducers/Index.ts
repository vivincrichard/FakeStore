// This file is a Combine Reducer File, Where all the Product's reducer are gets combine

import { combineReducers } from "redux";
import { productReducers } from "./ProductsReducer";




export const reducer = combineReducers ({
    productReducers
})
