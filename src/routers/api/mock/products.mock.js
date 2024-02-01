import { Router } from "express";
import MocksController from "../../../controllers/mocks.controller.js";

const mockRouter = Router();

mockRouter.get("/mockingproducts", (req, res, next) => {

    const products = MocksController.products();
    res.status(200).json(products);
});

export default mockRouter;
