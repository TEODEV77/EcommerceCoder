import Messages from "./../utils/messages.js";

export default class ProductDao {
  static test() {
    return "Hi, From memory";
  }

  static getAll(queryCriteria, options) {
    return Messages.resourceNotAvailable();
  }

  static get(filters = {}) {
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
}
