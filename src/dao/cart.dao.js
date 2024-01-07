import cartModel from "./models/cart.model.js";
import ProductsService from '../services/products.service.js';
import { BadRequest } from "../utils/exception.js";

export default class CartDao {

    static create () {
        let payload = {products : []};
        return cartModel.create(payload);
    }

    static getCartById( id) {
        return cartModel.findOne({_id: id});
    }

    static async addProduct(cid, pid, quantity) {
        const cart = await this.getCartById(cid);

        if(!cart){
            throw new BadRequest('Cart no Found');
        }

        const product = await ProductsService.getProduct(pid);

        if(!product){
            throw new BadRequest('Product no Found');
        }

        const productCart = cart.products.find( (productId) => productId.product == pid);

        if(productCart){
            productCart.quantity += quantity;
            await cartModel.updateOne({_id: cid}, {$set: cart});
            return cart;
        }

        cart.products.push({product: pid, quantity: quantity});
        await cartModel.updateOne({_id: cid}, {$set: cart});
        return cart;

    }

    static delete (cartId) {
        return cartModel.deleteOne({_id: cartId});
    }

    static async deleteItemFromCart (cartId, pid) {
        const cart = await this.getCartById(cartId);

        if(!cart){
            throw new BadRequest('Cart no Found');
        }

        const index = cart.products.findIndex((productId) => productId.product == pid);

        if( index === -1 ) {
            throw new BadRequest('Product no Found');
        }

        cart.products.splice(index, 1);
        await cartModel.updateOne({_id: cartId}, {$set: cart});
        return cart;

    }

    static async deleteItemsFromCart (cartId) {
        const cart = await this.getCartById(cartId);

        if(!cart){
            throw new BadRequest('Cart no Found');
        }

        cart.products = [];
        await cartModel.updateOne({_id: cartId}, {$set: cart});
        return cart;
    }
}
