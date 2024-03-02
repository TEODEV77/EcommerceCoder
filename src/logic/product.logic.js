import { productsService } from "../services/index.service.js";

export const checkOwner = async (user) => {
  
  const product = await productsService.getBy({ _id: user.id });

  if (user.role === "admin" || (user.role === "premium" && product.owner === user.email)) {
    return true;
  } else {
    return false;
  }
};
