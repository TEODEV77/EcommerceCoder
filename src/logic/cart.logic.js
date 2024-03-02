import { cartsService, productsService } from "../services/index.service.js";

const checkCartAndProduct = async (id, pid) => {

    const cart = await cartsService.getBy({ _id: id });


    if(!cart) {
        throw new Error("Cart not found");
    }

    const product = await productsService.getBy({ _id: pid });

    if(!product) {
        throw new Error("Product not found");
    }

    return cart;
}

export const addProductToCartLogic = async (id, pid, quantity) => {

    const cart = await checkCartAndProduct(id, pid);
    const productCart = cart.products.find((productId) => productId.product == pid);

    if(productCart){
        productCart.quantity += quantity;
        return cart;
    }else{
        cart.products.push({ product: pid, quantity: quantity });
        return cart;
    }

}

