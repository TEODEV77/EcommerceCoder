import { Router } from "express";

import { paginateResponseSuccess } from "../config/custom/responsePagination.js";
import {
  getProducts,
  create as AddProduct,
  update as UpdateProduct,
  remove as RemoveProduct
} from "../config/classes/product.js";

const routerProducts = Router();

routerProducts.post("/products", async (req, res) => {
  const { body } = req;
  try {
    const newProduct = await AddProduct(body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.json({ msg: error.message });
  }
});

routerProducts.put("/products/:id", async (req, res) => {
  const { body } = req;
  const { id } = req.params;

  try {
    await UpdateProduct(id, body);
    return res.status(201).json({ msg: "Success" });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
});

routerProducts.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await RemoveProduct(id);
    return res.status(201).json({ msg: "Success" });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
});

routerProducts.get("/products", async (req, res) => {
  const { limit = 10, page = 1, category, stock, sort } = req.query;
  const options = { limit, page };
  const queryCriteria = {};

  if (sort) {
    options.sort = { price: sort };
  }

  if (category) {
    queryCriteria.category = category;
  }

  if (stock) {
    queryCriteria.stock = stock;
  }

  try {
    const products = await getProducts(queryCriteria, options);
    const response = paginateResponseSuccess(products);
    res.status(200).json(response);
  } catch (error) {
    res.json({ msg: error.message });
  }
});
routerProducts.get("/products/:id", async (req, res) => {});

export default routerProducts;
