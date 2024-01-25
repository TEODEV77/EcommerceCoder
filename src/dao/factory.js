import { flags } from "../utils.js";

export let productDao;

switch (flags.p) {
  case "MONGO":
    const ProductDaoMongo = (await import("./product.dao.js")).default;
    productDao = ProductDaoMongo;
    
    break;

  case "MEMORY":
    const ProductDaoMemory = (await import("./product.memory.dao.js")).default;
    productDao = ProductDaoMemory;
    break;

  default:
    ProductDaoMongo = (await import("./product.dao.js")).default;
    productDao = ProductDaoMongo;
    break;
}
