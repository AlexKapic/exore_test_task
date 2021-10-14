import { createAsyncThunk } from "@reduxjs/toolkit";
import ActionsTypes from "./actionTypes";
import { products } from "../../services";
import { ListGroupItem } from "react-bootstrap";

const createProduct = createAsyncThunk(
  ActionsTypes.CREATE,
  async (product) =>
    await products.createProduct(product).then(() => {
      return { ...product };
    })
);

export { createProduct };
