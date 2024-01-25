import Messages from "./../utils/messages.js";

export default class ProductDao {
  
  static getAll(queryCriteria, options) {
    return Messages.resourceNotAvailable();
  }

  static get(filters = {}, options = {}) {
    return Messages.resourceNotAvailable();
  }

  static getProduct(id) {
    return Messages.resourceNotAvailable();
  }

  static create(payload) {
    return Messages.resourceNotAvailable();
  }

  static updateById(id, payload) {
    return Messages.resourceNotAvailable();
  }

  static deleteById(id) {
    return Messages.resourceNotAvailable();
  }

  static updateStocksById(ids,quantities) {
    return Messages.resourceNotAvailable();
  }

}
