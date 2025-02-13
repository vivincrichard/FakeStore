import { createStore } from "redux";
import { reducer } from "./Reducers/Index";


export const store = createStore(
  reducer,
  {}
);



