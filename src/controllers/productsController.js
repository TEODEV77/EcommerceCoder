import { checkOwner } from "../logic/product.logic.js";
import { productsService } from "../services/index.service.js";

const getAllProducts = async (req, res, next) => {
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
    const products = await productsService.paginate(queryCriteria, options);
    res.status(200).json({ status: "success", payload: products });
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  const query = { _id: id };
  try {
    const product = await productsService.getBy(query);
    if (!product) {
      return res
        .status(404)
        .json({ status: "error", message: "Product not found" });
    }
    res.status(200).json({ status: "success", payload: product });
  } catch (error) {
    res
      .status(404)
      .json({
        message: `The product with id: ${id} doesn't exist`,
        cause: error.message,
      });
  }
};

const create = async (req, res) => {
  const {
    title,
    code,
    category,
    description,
    stock,
    price,
    status,
    thumbnails = [],
  } = req.body;
  const owner = req.user.email;
  const payload = {
    title,
    code,
    owner,
    category,
    description,
    stock,
    price,
    status,
    thumbnails,
  };
  try {
    const product = await productsService.save(payload);
    res.status(201).json({ status: "success", payload: product });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error creating product", cause: error.message });
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  const { title, category, description, stock, price, status } = req.body;
  const payload = {
    title,
    category,
    description,
    stock,
    price,
    status,
  };
  try {
    const { role, email } = req.user;
    const checkOwn = await checkOwner({ role, email, id });
    if (!checkOwn) {
      return res.status(403).json({ status: "error", message: "Unauthorized" });
    }
    await productsService.update(id, payload);
    return res.status(200).json({ status: "success"});
  } catch (error) {
    res
      .status(404)
      .json({
        message: `The product update was unsuccessful.`,
        cause: error.message,
      });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const { role, email } = req.user;
    const checkOwn = await checkOwner({ role, email, id });
    if (!checkOwn) {
      return res.status(403).json({ status: "error", message: "Unauthorized" });
    }
    await productsService.delete(id);
    return res.status(200).json({ status: "success" });
  } catch (error) {
    res
      .status(404)
      .json({
        message: `The product delete was unsuccessful.`,
        cause: error.message,
      }); 
  }
};

export default {
  getAllProducts,
  getById,
  create,
  update,
  deleteProduct,
};

