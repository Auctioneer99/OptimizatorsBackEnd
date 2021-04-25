import auth from "../libs/Auth.js";

function cookieAuthorize(req, res, next) {
  let authToken = req.cookies.Authorization;
  let refreshToken = req.cookies.Refresh;

  console.log("incoming with \n" + authToken + "\n" + refreshToken);

  if (refreshToken) {
    try {
      let newAuth = auth.refreshAccessToken(refreshToken);
      res.cookie("Authorization", newAuth);
    } catch {
      res.clearCookie("Authorization").clearCookie("Refresh");
    }
  }

  if (authToken) {
    try {
      let payload = auth.verifyAccessToken(authToken);
      req.user = payload;
    } catch {
      try {
        if (refreshToken) {
          let newAuth = auth.refreshAccessToken(refreshToken);
          res.cookie("Authorization", newAuth);

          let payload = auth.verifyAccessToken(newAuth);
          req.user = payload;
        }
      } catch {
        res.clearCookie("Authorization").clearCookie("Refresh");
      }
    }
  } else {
    if (refreshToken) {
      try {
        let newAuth = auth.refreshAccessToken(refreshToken);
        res.cookie("Authorization", newAuth);

        let payload = auth.verifyAccessToken(newAuth);
        req.user = payload;
      } catch {
        res.clearCookie("Authorization").clearCookie("Refresh");
      }
    }
  }
  next();
}

export default cookieAuthorize;
