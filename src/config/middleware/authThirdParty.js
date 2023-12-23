import passport from "passport";

export const authGitHub = () => (req,res,next) => {
  passport.authenticate("github", { scope: ["user:email"] });
};

export const GitHubCallback = () => {
  passport.authenticate('github', {session: false, failureRedirect: '/logn'}), 
  (req,res) => {
    res.redirect('/me');
  }
}