import CartDao from "../dao/cart.dao.js";

export default class CartsService {
  static create() {
    return CartDao.create();
  }

  static getCartById(id) {
    return CartDao.getCartById(id);
  }

  static populateCart(id) {
    return CartDao.populateCart(id);
  }

  static async addProduct(cid, pid, quantity) {
    return CartDao.addProduct(cid, pid, quantity);
  }

  static delete(id) {
    return CartDao.delete(id);
  }

  static deleteItemFromCart(cid, pid) {
    return CartDao.deleteItemFromCart(cid, pid);
  }

  static deleteItemsFromCart(cartId) {
    return CartDao.deleteItemsFromCart(cartId);
  }

  static checkAvailability(cart) {
    const inStock = cart.products.filter(
      (item) => item.product.stock >= item.quantity
    );
    const outOfStock = cart.products.filter(
      (item) => item.product.stock < item.quantity
    );
    const availability = { purchased: inStock, notPurchased: outOfStock };
    return availability;
  }

  static getIds(cart) {
    const newList = cart.map((item => item.product._id));
    return newList;
  }
  static getQuantities(cart) {
    const newList = cart.map((item => ((item.quantity)*-1)));
    return newList;
  }
}
