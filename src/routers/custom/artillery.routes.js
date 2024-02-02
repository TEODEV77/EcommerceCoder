import { Router } from "express";

("artillery quick --count 40 --num 50 http://localhost:8080/fast -o fast.json");
("artillery quick --count 40 --num 50 http://localhost:8080/slow -o slow.json");

const artilleryRouter = Router();

artilleryRouter.get("/fast", (req, res, next) => {
  let counter = 0;

  for (let i = 0; i < 10000; i++) {
    counter += i;
  }
  res.status(200).json({ counter });
});
artilleryRouter.get("/slow", (req, res, next) => {
    let counter = 0;
    
    for (let i = 0; i < 5e8; i++) {
        counter += i;
    }
    res.status(200).json({ counter });
});

export default artilleryRouter;
