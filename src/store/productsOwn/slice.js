import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { createProduct, updateProduct, deleteProduct } from "./actions";

const initialState = {
  products: [],
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
      toast.error(state.error.message);
    },
    [updateProduct.pending]: (state, action) => {
      state.preloader = true;
      state.error.status = false;
      state.error.message = "";
    },
    [updateProduct.fulfilled]: (state, action) => {
      state.preloader = false;
      state.error.status = false;
      state.error.message = "";
      const id = action.payload.id;
      state.products = state.products.map((product) =>
        product.id === id ? action.payload : product
      );
    },
    [updateProduct.rejected]: (state, action) => {
      state.preloader = false;
      state.error.status = true;
      state.error.message = "Error while update product";
      toast.error(state.error.message);
    },
    [deleteProduct.pending]: (state, action) => {
      state.preloader = true;
      state.error.status = false;
      state.error.message = "";
    },
    [deleteProduct.fulfilled]: (state, action) => {
      state.preloader = false;
      state.error.status = false;
      state.error.message = "";
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    [deleteProduct.rejected]: (state, action) => {
      state.preloader = false;
      state.error.status = true;
      state.error.message = "Error while update product";
      toast.error(state.error.message);
    },
  },
});

export default productsOwnSlice.reducer;
