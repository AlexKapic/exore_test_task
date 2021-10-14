import { createAsyncThunk } from "@reduxjs/toolkit";
import ActionsTypes from "./actionTypes";
import { products } from "../../services";

const createProduct = createAsyncThunk(
  ActionsTypes.CREATE,
  async (product) =>
    await products.createProduct(product).then((res) => {
      return { ...product, ...res };
    })
);

export { createProduct };
