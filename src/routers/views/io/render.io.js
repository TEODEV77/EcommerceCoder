import { Router } from "express";

import {  authMiddlewarePassport } from '../../../config/middleware/authMiddleware.js'

const routerIo = Router();

routerIo.get("/io", authMiddlewarePassport("jwt"), (req,res,next) => {
    res.render('chat', req.user);
});

export default routerIo;