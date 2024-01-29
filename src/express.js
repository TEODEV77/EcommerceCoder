import express from "express";
import handlebars from "express-handlebars";
import passport from "passport";
import path from "path";
import cookieParser from "cookie-parser";
import { __dirname, flags } from "./utils.js";
import { initPassport } from "./config/passport.config.js";

import renderRouter from "./routers/views/render.routes.js";
import renderAuthRouter from "./routers/views/render.auth.routes.js";
import renderAdminRouter from "./routers/views/render.admin.routes.js";
import renderProduct from "./routers/views/render.product.js";

import routerProducts from "./routers/api/product.routes.js";
import routerCart from "./routers/api/cart.routes.js";
import authRouter from "./routers/api/auth/auth.routes.js";
import routerIo from "./routers/views/io/render.io.js";
import routerAdminIo from "./routers/views/io/render.admin.io.routes.js";
import SingletonEnvironment from "./env/singletonEnvironment.js";
import mockRouter from "./routers/api/mock/products.mock.js";

const { environment } = SingletonEnvironment.getInstance(flags.environ);
const { secret } = environment.env.cookie;

const app = express();

app.use(cookieParser(secret));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));

app.engine("handlebars", handlebars.engine());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "handlebars");

initPassport();
app.use(passport.initialize());

app.use("/api", authRouter, routerProducts, routerCart, mockRouter);
app.use(
  "/",
  renderRouter,
  renderAdminRouter,
  renderProduct,
  renderAuthRouter,
  routerIo,
  routerAdminIo
);

app.get("/", (req, res) => {
  res.redirect("login");
});

app.use((err, req, res, next) => {
  res.status(err.httpCode || 500).json({ error: err.message });
});

export default app;
