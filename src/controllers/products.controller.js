import ProductsService from "../services/products.service.js";
import { BadRequest, NotFound } from "../utils/exception.js";

export default class ProductsController {
  static getAll(queryCriteria, options) {
    return ProductsService.getAll(queryCriteria, options);
  }

  static getProduct(id) {
    return ProductsService.getProduct(id);
  }

  static create(payload) {
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
    return ProductsService.create(payload);
  }

  static async updateById(id, payload) {
    return ProductsService.updateById(id, payload);
  }

  static deleteById(id) {
    return ProductsService.deleteById(id);
  }
}
