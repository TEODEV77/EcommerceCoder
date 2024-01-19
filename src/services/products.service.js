import { productRepository } from "../repositories/index.js";

export default class ProductsService {
  static test() {
    return productRepository.test();
  }

  static getAll(queryCriteria, options) {
    return productDao.getAll(queryCriteria, options);
  }

  static get(filters = {}, options = {}) {
    return productDao.get((filters = {}), (options = {}));
  }

  static getProduct(id) {
    return productDao.getProduct(id);
  }

  static create(payload) {
    return productDao.create(payload);
  }

  static updateById(id, payload) {
    return productDao.updateById(id, payload);
  }

  static deleteById(id) {
    return productDao.deleteById(id);
  }
}
