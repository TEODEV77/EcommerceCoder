import { Router } from "express";
import ProductsController from "../../controllers/products.controller.js";
import { paginateResponseSuccess } from "../../config/custom/responsePagination.js";
import { environment as env} from "../../env/config.js";


const routerProducts = Router();

routerProducts.post("/products", async (req, res, next) => {
  const { body } = req;
  try {
    const product = await ProductsController.create(body);
    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
});

routerProducts.get("/test", async (req, res, next) => {
  const test = await ProductsController.test();
  res.status(200).json(test);
});

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
    
    if(env.dev.persistence === "MONGO"){
      const response = paginateResponseSuccess(products);
      return res.status(200).json(response);
    }
    
    res.status(200).json(products);
    
  } catch (error) {
    next(error);
  }
});

routerProducts.put("/products/:id", async (req, res, next) => {
  const { body } = req;
  const { id } = req.params;
  try {
    const product = await ProductsController.updateById(id, body);
    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
});

routerProducts.delete("/products/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    await ProductsController.deleteById(id);
    res.status(201).json({ message: "Success" });
  } catch (error) {
    next(error);
  }
});

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
