import cartModel from "./models/cart.model.js";

export default class Cart {

    get = (params) => {
        return cartModel.find(params);
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