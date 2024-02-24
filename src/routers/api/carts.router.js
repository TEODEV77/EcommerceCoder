import { Router } from "express";
import cartsController from "../../controllers/cartsController.js";

const router = Router();

router.get('/', cartsController.getAllCarts);
router.get('/:id', cartsController.getCartById);
router.get('/populate/:id', cartsController.populateCart);

export default router;