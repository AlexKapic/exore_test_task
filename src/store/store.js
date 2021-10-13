import { configureStore } from "@reduxjs/toolkit";
import productsApiReducer from "./productsApi/slice";

export const store = configureStore({
  reducer: productsApiReducer,
});
