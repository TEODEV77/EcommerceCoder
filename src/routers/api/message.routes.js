import { Router } from "express";

import messagesController from "../../controllers/messages.controller.js";

const routerMessage = Router();

routerMessage.get("/messages", async (req, res, next) => {

  try {
    const messages = await messagesController.getAll();
    return res.json(messages);
  } catch (error) {
    next();
  }
});

export default routerMessage;