import productModel from "./models/product.model.js";

export default class Product {

    get = (params) => {
        return productModel.find(params);
    }

    getBy = (params) => {
        return cartModel.findOne(params);
    }

    save = (payload) => {
        return cartModel.create(payload);
    }

    update = (id, payload) => {
        return cartModel.findByIdAndUpdate(id, { $set: payload });
    }

    delete = (id) => {
        return cartModel.findByIdAndDelete(id);
    }
}