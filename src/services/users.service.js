import { userRepository } from "../repositories/index.js";
import CartsService from "./carts.service.js";

import bcrypt from "bcrypt";

export default class UsersService {
  static create(payload) {
    return userRepository.dao.create(payload);
  }

  static findById(id) {
    return userRepository.dao.findById(id);
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

  static updateRoleById(id, payload) {
    const role = payload.role === "user" ? "premium" : "user";
    return userRepository.dao.updateRoleById(id, role);
  }

  static updatePassword(id, password) {
    return userRepository.dao.updatePassword(id, password);
  }

  static async checkLastPassword(id, password) {
    const user = await userRepository.dao.findById(id);

    if (user) {
      const comparePassword = bcrypt.compareSync(password, user.password);
      if (comparePassword) {
        return 1;
      }
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(password, salt);
      return hashedPassword;
    }
  }
}
