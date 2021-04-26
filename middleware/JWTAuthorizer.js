import "core-js";
import "regenerator-runtime";

import auth from "../libs/Auth.js";

function cookieAuthorize(req, res, next) {
  let authToken = req.cookies.Authorization;
  let refreshToken = req.cookies.Refresh;

  console.log("incoming with \n" + authToken + "\n" + refreshToken);

  if (!authToken && !refreshToken) {
    next();
    return;
  }

  if (authToken && refreshToken) {
    verifyAccessToken(req, res).then(
      (_) => {
        console.log("verifyAccessToken then");
        next();
        return;
      },
      (err) => {
        console.log("verifyAccessToken err");
        next();
        return;
      }
    );
  } else {
    if (refreshToken) {
      updateAccessToken(req, res).then(
        (_) => {
          console.log("updateAccessToken then");
          cookieAuthorize(req, res, next);
          return;
        },
        (err) => {
          console.log("updateAccessToken err");
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
        res.cookie("Authorization", token);
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

function verifyAccessToken(req, res) {
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
