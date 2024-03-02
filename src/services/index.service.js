import Carts from "../dao/cartsDao.js";
import Products from "../dao/productsDao.js";
import CartRepository from "../repositories/cartRepository.js";
import ProductRepository from "../repositories/productRepository.js";

export const cartsService = new CartRepository(new Carts());
export const productsService = new ProductRepository(new Products());