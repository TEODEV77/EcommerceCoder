import express from "express";
import handlebars from "express-handlebars";
import passport from "passport";
import path from "path";
import cookieParser from "cookie-parser";
import { __dirname } from "./utils.js";
import { initPassport } from "./config/passport.config.js";


import { environment as env } from "./env/config.js";
import renderRouter from "./routers/views/render.routes.js";
import renderAuthRouter from './routers/views/render.auth.routes.js';
import renderAdminRouter from "./routers/views/render.admin.routes.js";
import renderProduct from "./routers/views/render.product.js";

import routerProducts from "./routers/api/product.routes.js";
import routerCart from "./routers/api/cart.routes.js";
import authRouter from "./routers/api/auth/auth.routes.js";

const app = express();
app.use(cookieParser(env.dev.cookie.secret));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));

app.engine("handlebars", handlebars.engine());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "handlebars");

initPassport();
app.use(passport.initialize());

app.use("/api", authRouter, routerProducts, routerCart);
app.use("/", renderRouter, renderAdminRouter, renderProduct, renderAuthRouter);

app.get("/", (req, res) => {
  res.redirect("login");
});

app.use((err,req,res,next) => {
  res.status(err.httpCode || 500).json({ error: err.message });
});

export default app;
