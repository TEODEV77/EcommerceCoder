import { Router } from "express";
import UsersController from "../../controllers/users.controller.js";

const userRouter = Router();

userRouter.put("/users/premium/:uid", async (req, res, next) => {
  const { uid } = req.params;
  try {
    const updateRole = await UsersController.updateRoleById(uid);
    res.status(200).json(updateRole);
  } catch (error) {
    next(error);
  }
});

userRouter.put("/users/:uid", async (req, res, next) => {
  const { uid } = req.params;
  const { body } = req;
  try {
    const updatePass = await UsersController.updatePassword(uid, body);
    res.status(201).json(updatePass);
  } catch (error) {
    next(error);
  }
});

export default userRouter;
