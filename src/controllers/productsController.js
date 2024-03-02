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
    res.status(500).json({ message: "Internal server error" });
    next(error);
  }
};

const getById = async (req, res, next) => {
  const { id } = req.params;
  const query = { _id: id };
  try {
    const product = await productsService.getBy(query);
    res.status(200).json({ status: "success", payload: product });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    next(error);
  }
};

const create = async (req, res, next) => {
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
    res.status(500).json({ message: "Internal server error" });
    next(error);
  }
};

const update = async (req, res, next) => {
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
    const {role,email} = req.user;
    const checkOwn = await checkOwner({role,email,id});
    if(!checkOwn){
      return res.status(403).json({ status: "error", message: "Unauthorized" });
    }
    const product = await productsService.update(id, payload);
    return res.status(200).json({ status: "success", payload: product });
  } catch (error) {
    res.status(500).json({ message: error });
    next(error);
  }
};

export default {
  getAllProducts,
  getById,
  create,
  update,
};
