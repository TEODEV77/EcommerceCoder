import { Router } from "express";
import productsController from "../../controllers/productsController.js";

import {
  authMiddlewarePassport,
  authorizeMiddlewarePassport,
} from "../../config/middleware/authMiddleware.js";

const router = Router();

router.get("/:id", productsController.getById);
router.get("/", productsController.getAllProducts);

router.post(
  "/",
  authMiddlewarePassport("jwt"),
  authorizeMiddlewarePassport(["admin", "premium"]),
  productsController.create
);

router.put(
  "/:id",
  authMiddlewarePassport("jwt"),
  authorizeMiddlewarePassport(["admin", "premium"]),
  productsController.update
);

export default router;
