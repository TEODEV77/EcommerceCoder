import CartsService from "../services/carts.service.js";
import ProductsService from "../services/products.service.js";
import TicketService from "../services/tickets.service.js";

export default class CartsController {
  static create() {
    return CartsService.create();
  }

  static getCartById(id) {
    return CartsService.getCartById(id);
  }

  static populateCart(id) {
    return CartsService.populateCart(id);
  }

  static async addProduct(cid, pid, quantity) {
    return CartsService.addProduct(cid, pid, quantity);
  }

  static delete(id) {
    return CartsService.delete(id);
  }

  static deleteItemFromCart(cid, pid) {
    return CartsService.deleteItemFromCart(cid, pid);
  }

  static deleteItemsFromCart(cartId) {
    return CartsService.deleteItemsFromCart(cartId);
  }

  static purchase = async (user) => {
    const shopping_cart = await CartsService.populateCart(user.cart);
    const purchased = CartsService.checkAvailability(shopping_cart);
    const ids = CartsService.getIds(purchased.purchased);
    const quantities = CartsService.getQuantities(purchased.purchased);
    ProductsService.updateStocksById(ids,quantities);
    const amount = purchased.purchased.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );
    const ticket = {
      amount,
      purchaser: user.email,
    }
    const ticketResponse = await TicketService.create(ticket);
    const purchaseResult = {ticketResponse, purchaseDetail: purchased}
    return purchaseResult;
  };
}
