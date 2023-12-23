import { Router } from "express";
import bcrypt from "bcrypt";
import { create as AddUser, findByEmail } from "../config/classes/user.js";
import { create as AddCart } from "../config/classes/cart.js";
import { generateToken } from "../utils.js";
import { environment as env } from "../env/config.js";
import passport from "passport";

const sessionRouter = Router();

sessionRouter.post("/sessions/auth/register", async (req, res) => {
  const { body } = req;

  try {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(body.password, salt);
    body.password = hashedPassword;
    body.role = body.role === "" ? "user" : body.role;
    const cart = await AddCart();
    const user = await AddUser(body, cart._id);
    res.redirect('/login');
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

sessionRouter.post("/sessions/auth/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await findByEmail(email);

  if (user) {
    const comparePassword = bcrypt.compareSync(password, user.password);
    if (comparePassword) {
      const token = generateToken(user);
      res.cookie("token", token, env.dev.cookie.options);
      return res.redirect("/me");
    } else {
      return res.status(401).json({ message: "Login failed!" });
    }
  }
});

sessionRouter.get("/sessions/auth/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect("/login");
});

sessionRouter.get("/github/auth/login", passport.authenticate("github"));

sessionRouter.get(
  "/github/auth/callback",
  passport.authenticate("github", {
    session: false,
    failureRedirect: "/login",
  }),
  (req, res) => {
    const token = generateToken(req.user);
    res.cookie("token", token, env.dev.cookie.options);
    res.redirect("/me");
  }
);

export default sessionRouter;
