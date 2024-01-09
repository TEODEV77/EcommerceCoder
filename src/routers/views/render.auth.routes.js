import { Router } from "express";

const renderAuthRouter = Router();

renderAuthRouter.get("/unauthorized", (req, res) => {
    res.render("unauthorized");
});

export default renderAuthRouter;