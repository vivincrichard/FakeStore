import { SET_PRODUCTS } from "../Types/Types";

const initialState = {
  products: [],
};

export const productReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
