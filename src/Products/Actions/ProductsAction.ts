import { SELECTED_PRODUCT, SET_PRODUCTS } from "../Types/Types"



// Action Creators

export const setProducts = (payload: any) => ({
    type: SET_PRODUCTS,
    payload: payload,
})


export const selectedProducts = (payload: any) => ({
    type: SELECTED_PRODUCT,
    payload: payload,
})


// Action Functions