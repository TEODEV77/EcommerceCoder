import cartSchema from "../../models/cart.model.js";

export const create = async () => {
  const payload = { products: [] };

  const cart = await cartSchema.create(payload);
  return cart;
};
