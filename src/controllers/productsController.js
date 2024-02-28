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

export default {
  getAllProducts,
};
