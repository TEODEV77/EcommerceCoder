import productModel from "./models/product.model.js";

export default class Product {

    get = (params) => {
        return productModel.find(params);
    }

    getBy = (params) => {
        return productModel.findOne(params);
    }

    save = (payload) => {
        return productModel.create(payload);
    }

    update = (id, payload) => {
        return productModel.findByIdAndUpdate(id, { $set: payload });
    }

    delete = (id) => {
        return productModel.findByIdAndDelete(id);
    }
}