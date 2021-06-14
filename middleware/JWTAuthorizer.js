import "core-js";
import "regenerator-runtime";

import auth from "../libs/Auth.js";

function cookieAuthorize(req, res, next) {
  let authToken = req.cookies.Authorization;
  let refreshToken = req.cookies.Refresh;

  console.log(req.cookies);

  if (!authToken && !refreshToken) {
    next();
    return;
  }

  if (authToken && refreshToken) {
    verifyAccessToken(req, res).then(
      (_) => {
        next();
        return;
      },
      (err) => {
        next();
        return;
      }
    );
  } else {
    if (refreshToken) {
      updateAccessToken(req, res).then(
        (_) => {
          cookieAuthorize(req, res, next);
          return;
        },
        (err) => {
          next();
          return;
        }
      );
    }
  }
}

function updateAccessToken(req, res) {
  let promise = new Promise(function (resolve, reject) {
    let refreshToken = req.cookies.Refresh;
    auth.refreshAccessToken(refreshToken).then(
      (token) => {
        res.cookie("Authorization", token, {
          maxAge: REFRESH_TOKEN_ALIVE,
          httpOnly: false,
          secure: true,
          sameSite: "none",
        });
        resolve(token);
      },
      (err) => {
        res.clearCookie("Authorization").clearCookie("Refresh");
        console.log(err.message);
        reject(err);
      }
    );
  });
  return promise;
}

function verifyAccessToken(req, res, next) {
  let promise = new Promise(function (resolve, reject) {
    let authToken = req.cookies.Authorization;
    auth.verifyAccessToken(authToken).then(
      (payload) => {
        req.user = payload;
        resolve(payload);
      },
      (err) => {
        res.clearCookie("Authorization").clearCookie("Refresh");
        console.log(err.message);
        reject(err);
      }
    );
  });
  return promise;
}

export default cookieAuthorize;
