import userModel from "../../models/user.model.js";

export const create = async (body, cart) => {
  const payload = { 
    ...body,
    cart,
  };
  const user = await userModel.create(payload);
  return user;
};

export const findByEmail = async (email) => {
  const user = await userModel.findOne({ email });
  return user;
};

