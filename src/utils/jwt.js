import JWT from "jsonwebtoken";

export const generateToken = (user) => {
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
  };
  return JWT.sign(payload, env.dev.jwt.secret, {
    expiresIn: env.dev.jwt.expiresIn,
  });
};

export const validateToken = (token) => {
  return new Promise((resolve) => {
    JWT.verify(token, env.dev.jwt.secret, (error, payload) => {
      if (error) {
        return resolve(false);
      }
      console.log("payload", payload);
      resolve(payload);
    });
  });
};
