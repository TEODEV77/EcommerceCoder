import { Router } from "express";
import ProductsController from "../../controllers/products.controller.js";
import { paginateResponseSuccess } from "../../config/custom/responsePagination.js";
import { environment as env } from "../../env/config.js";
import {
  authMiddlewarePassport,
  authorizeMiddlewarePassport,
} from "../../config/middleware/authMiddleware.js";


const routerProducts = Router();

routerProducts.post(
  "/products",
  authMiddlewarePassport("jwt"),
  authorizeMiddlewarePassport(['admin','premium']),
  async (req, res, next) => {
    const { body } = req;
    const { email } = req.user;
    try {
      const product = await ProductsController.create(body,email);
      res.status(201).json(product);
    } catch (error) {
      next(error);
    }
  }
);

routerProducts.get("/products", async (req, res, next) => {
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
    const products = await ProductsController.getAll(queryCriteria, options);

    if (env.dev.persistence === "MONGO") {
      const response = paginateResponseSuccess(products);
      return res.status(200).json(response);
    }

    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
});

routerProducts.put(
  "/products/:id",
  authMiddlewarePassport("jwt"),
  authorizeMiddlewarePassport(["admin"]),
  async (req, res, next) => {
    const { body } = req;
    const { id } = req.params;
    try {
      const product = await ProductsController.updateById(id, body);
      res.status(201).json(product);
    } catch (error) {
      next(error);
    }
  }
);

routerProducts.delete(
  "/products/:id",
  authMiddlewarePassport("jwt"),
  authorizeMiddlewarePassport(["admin"]),
  async (req, res, next) => {
    const { id } = req.params;
    try {
      await ProductsController.deleteById(id);
      res.status(201).json({ message: "Success" });
    } catch (error) {
      next(error);
    }
  }
);

routerProducts.get("/products/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const product = await ProductsController.getProduct(id);
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
});

export default routerProducts;
