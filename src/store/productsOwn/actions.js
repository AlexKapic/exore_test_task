import { createAsyncThunk } from "@reduxjs/toolkit";
import ActionsTypes from "./actionTypes";
import { products } from "../../services";

const createProduct = createAsyncThunk(
  ActionsTypes.CREATE,
  async (product) =>
    await products.createProduct(product).then((res) => {
      return { ...product, id: res._id };
    })
);

const updateProduct = createAsyncThunk(
  ActionsTypes.UPDATE,
  async (product) =>
    await products.updateProduct(product).then(() => {
      return { ...product };
    })
);

export { createProduct, updateProduct };
