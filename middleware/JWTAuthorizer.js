const auth = require("../libs/Auth.js");

function cookieAuthorize(req, res, next) {
  let authToken = req.cookies.Authorization;
  let refreshToken = req.cookies.Refresh;

  if (authToken && refreshToken) {
    try {
      let payload = auth.verifyAccessToken(authToken);
      req.user = payload;
    } catch {
      try {
        let newAuth = auth.refreshAccessToken(refreshToken);
        res.cookie("Authorization", newAuth);
      } catch {
        res.clearCookie("Authorization").clearCookie("Refresh");
      }
    }
  }
  next();
}

module.exports = cookieAuthorize;
