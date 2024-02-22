import { Router } from "express";
import path from "path";
import MailService from "../../services/mail.service.js";
import { bodyEmail } from "../../utils/mailHtml.js";
import { __dirname } from "../../utils.js";
import { generateToken } from "../../utils/jwt.js";
import UsersService from "../../services/users.service.js";
import SingletonEnvironment from "../../env/singletonEnvironment.js";

const { environment } = SingletonEnvironment.getInstance();
const {  host, port } = environment.env.api;

const local = `${host}:${port}`;

const routerMail = Router();

routerMail.get("/sendMail", async (req, res, next) => {
  const { email } = req.query;
  const findEmail = await UsersService.findByEmail(email);

  if (findEmail) {
    const payload = { email: findEmail.email, id: findEmail._id };
    const token = generateToken(payload, "recover", "1h");
    const ins = MailService.getInstance();
    await ins.sendEmail(email, "Token", bodyEmail(findEmail.firstName, token, local), [
      {
        filename: "readme.txt",
        path: path.join(__dirname, "utils/readme.txt"),
      },
    ]);
    return res.redirect("/emailSent");
  }
  return res.redirect("/userError");
});

export default routerMail;
