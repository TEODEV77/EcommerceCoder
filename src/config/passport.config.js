import passport from "passport";

import { gitHubOptions } from "../config/custom/githubOptions.js";

import { Strategy as JWTStrategy } from "passport-jwt";
import { Strategy as GitHubStrategy } from "passport-github2";

import { jwtOptions } from "../config/custom/jwtOptions.js";
import { create as addUser, findByEmail } from "./classes/user.js";
import { create as addCart } from "./classes/cart.js";

export const initPassport = () => {
  passport.use(
    "github",
    new GitHubStrategy(
      gitHubOptions,
      async (accessToken, refreshToken, profile, done) => {
        const { username, provider, displayName } = profile;

        const email = profile._json.email;

        if (!email) {
          return done(new Error("No email"));
        }

        let user = await findByEmail(email);

        if (user) {
          return done(null, user);
        }

        user = {
          firstName: displayName,
          lastName: "",
          role: "user",
          email,
          username,
          provider,
          password: "",
          age: 17,
        };

        const cart = await addCart();
        const newUser = await addUser(user, cart._id);

        return done(null, newUser);
      }
    )
  );
  passport.use(
    "jwt",
    new JWTStrategy(jwtOptions, (payload, done) => {
      return done(null, payload);
    })
  );
};
