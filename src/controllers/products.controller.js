import ProductsService from "../services/products.service.js";
import { BadRequest } from "../utils/exception.js";

export default class ProductsController {
  static getAll(queryCriteria, options) {
    return ProductsService.getAll(queryCriteria, options);
  }

  static getProduct(id) {
    return ProductsService.getProduct(id);
  }

  static create(payload, email) {
    const { title, code, category, description, stock, price, status } =
      payload;
    if (
      !title ||
      !code ||
      !category ||
      !description ||
      !stock ||
      !price ||
      !status
    ) {
      throw new BadRequest("Missing required properties");
    }

    email = email ? email : 'admin';

    return ProductsService.create(payload,email);
  }

  static async updateById(id, payload,email,role) {
    return ProductsService.updateById(id, payload,email,role);
  }

  static deleteById(id,email,role) {
    return ProductsService.deleteById(id,email,role);
  }
}
