import { Router } from "express";

const loggerRouter = Router();

loggerRouter.get("/loggerTest", (req, res, next) => {
  req.logger.fatal("fatal");
  req.logger.error("error");
  req.logger.warn("warn");
  req.logger.info("info");
  req.logger.http("http");
  req.logger.debug("debug");
  res.status(200).json({ message: "Logger test" });
});

export default loggerRouter;
