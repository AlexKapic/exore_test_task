import { createAsyncThunk } from "@reduxjs/toolkit";
import ActionsTypes from "./actionsTypes";
import { products } from "../../services";

const getProducts = createAsyncThunk(
  ActionsTypes.GET_ALL,
  async () => await products.getProducts()
);

const getLimitedProducts = createAsyncThunk(
  ActionsTypes.GET_LIMITED,
  async (limit) => await products.getLimitedProducts(limit)
);

const getOneProduct = createAsyncThunk(
  ActionsTypes.GET_ONE,
  async (id) => await products.getOneProduct(id)
);

export { getProducts, getLimitedProducts, getOneProduct };
