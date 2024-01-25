
import { productRepository } from "../repositories/index.js";
export default class ProductsService {
  
  static getAll(queryCriteria, options) {
    return productRepository.getAll(queryCriteria, options);
  }

  static get(filters = {}, options = {}) {
    return productRepository.dao.get((filters = {}), (options = {}));
  }

  static getProduct(id) {
    return productRepository.dao.getProduct(id);
  }

  static create(payload) {
    return productRepository.dao.create(payload);
  }

  static updateById(id, payload) {
    return productRepository.dao.updateById(id, payload);
  }

  static deleteById(id) {
    return productRepository.dao.deleteById(id);
  }

  static updateStocksById(ids,quantities) {
    return productRepository.dao.updateStocksById(ids,quantities);
  }

}
