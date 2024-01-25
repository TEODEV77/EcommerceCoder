import { userRepository } from "../repositories/index.js";
import CartsService from "./carts.service.js";

export default class UsersService {
  static create(payload) {
    return userRepository.dao.create(payload);
  }

  static findByEmail(email) {
    return userRepository.dao.findByEmail(email);
  }

  static async createUserCart(payload) {         
    const shopping_cart = await CartsService.create();
    payload.cart = shopping_cart._id;
    return userRepository.dao.create(payload);          
  }

  static updateById(id, payload) {
    return userRepository.dao.updateById(id, payload); 
  }

  static deleteById(id) {
    return userRepository.dao.deleteById(id);
  }
}
