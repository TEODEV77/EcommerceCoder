import { Router } from "express";
import cartsController from "../../controllers/cartsController.js";

const router = Router();

router.get("/populate/:id", cartsController.populateCart);
router.get("/:id", cartsController.getCartById);
router.get("/", cartsController.getAllCarts);
router.post("/", cartsController.createCart);
router.post("/purchase", cartsController.purchase);
router.put("/:id/:pid", cartsController.addProductToCart);
router.delete("/:id/items", cartsController.deleteItemsFromCart);
router.delete("/:id/:pid", cartsController.deleteItemFromCart);
router.delete("/:id", cartsController.deleteCart);

export default router;
