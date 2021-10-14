import { createSlice } from "@reduxjs/toolkit";
import { createProduct } from "./actions";

const initialState = {
  products: [],
  product: {},
  preloader: false,
  error: {
    status: false,
    message: "",
  },
};

const productsOwnSlice = createSlice({
  name: "productsOwn",
  initialState,
  reducers: {},
  extraReducers: {
    [createProduct.pending]: (state, action) => {
      state.preloader = true;
      state.error.status = false;
      state.error.message = "";
    },
    [createProduct.fulfilled]: (state, action) => {
      state.preloader = false;
      state.error.status = false;
      state.error.message = "";
      state.products = [...state.products, action.payload];
    },
    [createProduct.rejected]: (state, action) => {
      state.preloader = false;
      state.error.status = true;
      state.error.message = "Error while create product";
    },
  },
});

export default productsOwnSlice.reducer;
