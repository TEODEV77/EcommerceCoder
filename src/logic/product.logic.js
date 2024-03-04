import { productsService } from "../services/index.service.js";
import { CustomError } from "../utils/CustomError.js";

export const checkOwner = async (user) => {
  const product = await productsService.getBy({ _id: user.id });

  if (!product) {
    return CustomError.create({
      name: "Not Found",
      message: "Product not found",
      code: 404,
      cause: `There is no product with id: ${user.id} in the database`,
      idx: 7,
    });
  }

  if (
    user.role === "admin" ||
    (user.role === "premium" && product.owner === user.email)
  ) {
    return true;
  } else {
    return false;
  }
};
