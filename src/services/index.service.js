import Carts from "../dao/cartsDao.js";
import CartRepository from "../repositories/cartRepository.js";

export const cartsService = new CartRepository(new Carts());