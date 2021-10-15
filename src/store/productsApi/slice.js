import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getProducts, getLimitedProducts, getOneProduct } from "./actions";

const initialState = {
  products: [],
  product: {},
  preloader: false,
  error: {
    status: false,
    message: "",
  },
};

const productsApiSlice = createSlice({
  name: "productsApi",
  initialState,
  reducers: {},
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.preloader = true;
      state.error.status = false;
      state.error.message = "";
    },
    [getProducts.fulfilled]: (state, action) => {
      state.preloader = false;
      state.error.status = false;
      state.error.message = "";
      state.products = action.payload;
    },
    [getProducts.rejected]: (state, action) => {
      state.preloader = false;
      state.error.status = true;
      state.error.message = "Error while get products from API";
      toast.error(state.error.message);
    },
    [getLimitedProducts.pending]: (state, action) => {
      state.preloader = true;
      state.error.status = false;
      state.error.message = "";
    },
    [getLimitedProducts.fulfilled]: (state, action) => {
      state.preloader = false;
      state.error.status = false;
      state.error.message = "";
      state.products = action.payload;
    },
    [getLimitedProducts.rejected]: (state, action) => {
      state.preloader = false;
      state.error.status = true;
      state.error.message = "Error while get limited products from API";
      toast.error(state.error.message);
    },
    [getOneProduct.pending]: (state, action) => {
      state.preloader = true;
      state.error.status = false;
      state.error.message = "";
    },
    [getOneProduct.fulfilled]: (state, action) => {
      state.preloader = false;
      state.error.status = false;
      state.error.message = "";
      state.product = action.payload;
    },
    [getOneProduct.rejected]: (state, action) => {
      state.preloader = false;
      state.error.status = true;
      state.error.message = "Error while get product from API";
      toast.error(state.error.message);
    },
  },
});

export default productsApiSlice.reducer;
