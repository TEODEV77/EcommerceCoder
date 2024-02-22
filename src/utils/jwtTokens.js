import JWT from "jsonwebtoken";
import { flags } from "../utils.js";
import SingletonEnvironment from "../env/singletonEnvironment.js";

const { environment } = SingletonEnvironment.getInstance(flags.environ);
const { secret } = environment.env.jwt;

export const authToken = (user,expiresIn) => {
  const { firstName, lastName, role, username, provider, email, age, cart } =
    user;
  const payload = {
    firstName,
    lastName,
    username,
    provider,
    role,
    email,
    age,
    cart,
    type : 'auth',
  };
  return JWT.sign(payload, secret, {
    expiresIn: expiresIn,
  });
};

export const recoverToken = (payload,expiresIn) => {

  payload.type = 'recover';
  return JWT.sign(payload, secret, {
    expiresIn: expiresIn,
  });
};

export const validateToken = (token) => {
  return new Promise((resolve,reject) => {
    JWT.verify(token, secret, (error, payload) => {
      if (error) {
        return reject(error);
      }
      resolve(payload);
    });
  });
};
