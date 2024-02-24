import { Router } from "express";
import cartsController from "../../controllers/cartsController.js";

const router = Router();

router.get('/', cartsController.getAllCarts);

export default router;