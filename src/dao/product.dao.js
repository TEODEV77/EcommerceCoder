import productModel from "./models/product.model.js";

export default class ProductDao {

  static test() {
    console.log("w");
  }

  
  static getAll(queryCriteria, options) {
    return productModel.paginate(queryCriteria, options);
  }

  static get(filters = {}, options = {}) {
    return productModel.paginate(filters, options);
  }

  static getProduct(id) {
    return productModel.findOne({ _id: id });
  }

  static create(payload) {
    return productModel.create(payload);
  }

  static updateById(id, payload) {
    return productModel.updateOne({ _id: id }, { $set: payload });
  }

  static deleteById(id) {
    return productModel.deleteOne({ _id: id });
  }
  
  static updateStocksById(ids, quantities) {

    ids.forEach((element, index) => {
      productModel.updateOne({ _id: element },{ $inc: { stock: quantities[index] } });
    });
    
  }
}
