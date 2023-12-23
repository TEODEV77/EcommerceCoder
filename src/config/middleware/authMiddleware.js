import passport from "passport";

export const authMiddlewarePassport = (strategy) => (req, res, next) => {
  passport.authenticate(
    strategy,
    { session: false },
    (err, payload, info) => {
    
      if (err) {
        return next(err);
      }
      if (!payload) {
        return res
          .status(401)
          .json({ message: info.message ? info.message : info.toString() });
      }
      req.user = payload;
      return next();
    }
  )(req, res, next);
};

export const authorizeMiddlewarePassport = (roles) => (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const { role } = req.user;

  if (roles.includes(role)) {
    return next();
  }

  return res.status(403).json({ message: "Unauthorized - rol" });
};
