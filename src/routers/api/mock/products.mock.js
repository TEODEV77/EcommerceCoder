import { Router } from "express";
import MocksController from "../../../controllers/mocks.controller.js";

const mockRouter = Router();

mockRouter.get("/mockingproducts", (req, res, next) => {

    const product = MocksController.products();

    res.status(200).json({
        message: "Mocking products",
        product
    });
});

export default mockRouter;
