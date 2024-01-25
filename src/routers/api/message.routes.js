import { Router } from "express";

import messagesController from "../../controllers/messages.controller";

const routerMessage = Router();

routerMessage.get("/messages", async (req, res, next) => {
  try {
    return await messagesController.getAll();
  } catch (error) {}
});
