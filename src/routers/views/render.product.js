import { Router } from "express";
import { getProducts } from "../../config/classes/product.js";
import { paginateResponseSuccess } from "../../config/custom/responsePagination.js";

const renderProduct = Router();

renderProduct.get("/products", async (req, res) => {
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

  const products = await getProducts(queryCriteria,options);
  const response = paginateResponseSuccess(products);
  res.render("products", {paginate: response});
});

export default renderProduct;
