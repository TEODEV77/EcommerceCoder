import { Router } from "express";

import {  authMiddlewarePassport, authorizeMiddlewarePassport } from '../../config/middleware/authMiddleware.js';

const renderAdminRouter = Router();

renderAdminRouter.get("/admin/register", authMiddlewarePassport('jwt'), authorizeMiddlewarePassport(['admin']), (req, res) => {
  res.render("registerAdmin");
});

export default renderAdminRouter;

