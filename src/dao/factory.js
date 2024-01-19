import { flags } from "../utils.js";
import { environment as env } from "./../env/config.js";

export let productDao;

switch (flags.p) {
  case "MONGO":
    let ProductDaoMongo = (await import("./product.dao.js")).default;
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
