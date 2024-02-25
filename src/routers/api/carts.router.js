import { Router } from "express";
import cartsController from "../../controllers/cartsController.js";

const router = Router();

router.get('/populate/:id', cartsController.populateCart);
router.get('/:id', cartsController.getCartById);
router.get('/', cartsController.getAllCarts);

router.post('/', cartsController.createCart);

router.put('/:id/:pid', cartsController.addProductToCart);

export default router;