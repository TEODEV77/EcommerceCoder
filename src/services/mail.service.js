import SingletonEnvironment from "../env/singletonEnvironment.js";

import { flags } from "../utils.js";

import nodemailer from "nodemailer";


const { environment } = SingletonEnvironment.getInstance(flags.environ);
const { user, pass, port } = environment.env.mail;


export default class MailService {

  constructor() {
    this.transport = nodemailer.createTransport({
      service: "gmail",
      port: port,
      auth: {
        user: user,
        pass: pass,
      },
    });
  }

  static getInstance() {
    if (!MailService.instance) {
      MailService.instance = new MailService();
    }
    return MailService.instance;
  }

  sendEmail(to, subject, html, attachments = []) {
    return this.transport.sendMail({
      from: user,
      to,
      subject,
      html,
      attachments,
    });
  }
}
