import ProductDto from "../dto/product.dto.js";

export default class ProductRepository {
  constructor(dao) {
    this.dao = dao;
  }

  static getAll(queryCriteria, options) {
    return this.dao.getAll(queryCriteria, options);
  }

  static get(filters = {}, options = {}) {
    return this.dao.get((filters = {}), (options = {}));
  }

  static getProduct(id) {
    return this.dao.getProduct(id);
  }

  static create(payload) {
    return this.dao.create(payload);
  }

  static updateById(id, payload) {
    return this.dao.updateById(id, payload);
  }

  static deleteById(id) {
    return this.dao.deleteById(id);
  }

  static updateStocksById(ids, quantities) {
    return this.dao.updateStocksById(ids, quantities);
  }
}
