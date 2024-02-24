import { cartsService } from "../services/index.service.js";

const getAllCarts = async (req, res, next) => {
  try {
    const carts = await cartsService.getAll();
    res.status(200).json({ status: "success", payload: carts });
  } catch (error) {
    next(error);
  }
};

export default {
  getAllCarts,
};
