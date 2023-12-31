import { Router } from "express";
import bcrypt from "bcrypt";
import UsersController from "../../../controllers/users.controller.js";
import { environment as env } from "../../../env/config.js";
import { generateToken } from "../../../utils.js";
import passport from "passport";
  
const authRouter = Router();

authRouter.post("/sessions/auth/register", async (req, res, next) => {
  const { body } = req;       

  try {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(body.password, salt); 
    body.password = hashedPassword;
    body.role = body.role === "" ? "user" : body.role;
    await UsersController.createUserCart(body);
    res.redirect("/login");
  } catch (error) {
    next(error);
  }
});

authRouter.post("/sessions/auth/login", async (req, res) => {
  const { email, password } = req.body;          

  const user = await UsersController.findByEmail(email);

  if (!user) {
    return res.redirect("/unauthorized");
  }

  const comparePassword = bcrypt.compareSync(password, user.password);

  if (comparePassword) {
    const token = generateToken(user);        
    res.cookie("token", token, env.dev.cookie.options);  
    return res.redirect("/me");
  } else {
    return res.redirect("/unauthorized");
  }
});

authRouter.get("/sessions/auth/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect("/login");              
});

authRouter.get("/github/auth/login", passport.authenticate("github"));

authRouter.get(   
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

export default authRouter;
