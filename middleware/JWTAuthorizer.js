import "core-js";
import "regenerator-runtime";

import auth from "../libs/Auth.js";
import credentials from "../credentials.js";

const { ACCESS_TOKEN_ALIVE } = credentials.auth;

async function cookieAuthorize(req, res, next) {
  let authToken = req.cookies.Authorization;
  let refreshToken = req.cookies.Refresh;

  console.log(req.cookies);

  if (!authToken && !refreshToken) {
    next();
    return;
  }

  if (authToken && refreshToken) {
    try{
      await verifyAccessToken(req, res)
      next();
      return;
    }
    catch (ex)
    {
      console.log("Error when verifying access token")
      console.log(ex.message)
      delete req.cookies.Authorization;
    }
  } 
 
  if (refreshToken) {
    await updateAccessToken(req, res);
    cookieAuthorize(req, res, next);
  }
}

async function updateAccessToken(req, res) {

  let refreshToken = req.cookies.Refresh;
  try
  {
    let token = await auth.refreshAccessToken(refreshToken);

    res.cookie("Authorization", token, {
      maxAge: ACCESS_TOKEN_ALIVE,
      httpOnly: false,
      secure: true,
      sameSite: "none",
    });
    req.cookies.Authorization = token;
  }
  catch (ex)
  {
    console.log("Execption when refreshing access token")
    res.clearCookie("Authorization").clearCookie("Refresh");
    req.cookies = {};
    console.log(ex.message);
  }
}

async function verifyAccessToken(req, res) {
  
  let authToken = req.cookies.Authorization;
  let payload = await auth.verifyAccessToken(authToken);
  req.user = payload;
}

export default cookieAuthorize;
