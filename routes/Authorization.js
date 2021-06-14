import express from "express";
import bcrypt from "bcryptjs";

import credentials from "../credentials.js";
import User from "../Models/User.js";
import auth from "../libs/Auth.js";

import authHelper from "./AuthHelper.js";

const router = express.Router();

const { ACCESS_TOKEN_ALIVE, REFRESH_TOKEN_ALIVE } = credentials.auth;
const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

router.post("/login", authHelper.notAuthorized, loginUser);
router.post("/register", authHelper.notAuthorized, register);
router.post("/logout", authHelper.authorized, logOut);

/*
let routes = [
  {
    description: "Авторизация",
    path: "/auth/login",
    requires: {
      not authorized
    },
    accept: {
      email: String,
      password: String
    },
    returns: {
      message: String,
      errors: {
        message: String
      },
    },
  },
  {
    description: "Выход пользователя",
    path: "/auth/logout",
    requires: {
      authorization
    },
    accept: {
    },
    returns: {
      message: String,
      errors: {
        message: String
      },
    },
  },
  {
    description: "Регистрация",
    path: "/auth/register",
    requires: {
      not authorized
    },
    accept: {
      login: String,
      email: String,
      password: String
    },
    returns: {
      message: String,
      errors: {
        message: String
      },
    },
  },
];
*/

function loginUser(req, res) {
  let errors = [];
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      errors.push({ message: "Please enter all fields", body: req.body });
    }

    if (errors.length == 0) {
      User.findOne({ email: email })
        .then((user, err) => {
          if (user) {
            bcrypt.compare(password, user.password).then((same) => {
              if (same) {
                setCookies(user, res).status(200).json({
                  message: "Success",
                });
              } else {
                errors.push({ message: "Incorrect password" });
                handleError(errors, req, res);
              }
            });
          } else {
            errors.push({ message: "User not found" });
            errors.push({ message: err });
          }
        })
        .then(() => handleError(errors, req, res));
    }
  } catch {
    errors.push({ message: "Please enter all fields" });
  }
  handleError(errors, req, res);
}

function register(req, res) {
  let errors = [];
  try {
    const { login, email, password } = req.body;
    if (!email || !login || !password) {
      errors.push({ message: "Incorrect format" });
    } else {
      if (password.length < 6) {
        errors.push({ message: "Password must be at least 6 characters" });
      }
      if (login.length < 6) {
        errors.push({ message: "Login must be at least 6 characters" });
      }
      if (email.match(emailPattern)) {
        errors.push({ message: "Not valid email" });
      }
    }
    if (errors.length == 0) {
      User.findOne({ email: email }).then((user) => {
        if (user) {
          errors.push({ message: "Email already exists" });
        } else {
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, (err, hash) => {
              if (err) throw err;

              const newUser = new User({
                login: login,
                email: email,
                password: hash,
              });

              newUser
                .save()
                .then((user) => {
                  setCookies(user, res).status(200).json({
                    message: "Registered",
                  });
                })
                .catch((err) => console.log(err));
            });
          });
        }
      });
    }
  } catch {
    errors.push({ message: "Please enter all fields" });
  }
  handleError(errors, req, res);
}

function logOut(req, res) {
  res.clearCookie("Authorization").clearCookie("Refresh").status(200).json({
    message: "Success",
  });
}

function handleError(errors, req, res) {
  if (errors.length > 0) {
    res.status(400).json({
      message: "There are some problems",
      errors: errors,
      request: req.body,
    });
  }
}

function setCookies(user, res) {
  let authToken = auth.generateAccessToken(user);
  let refreshToken = auth.generateRefreshToken(user);

  res
    .cookie("Authorization", authToken, {
      maxAge: ACCESS_TOKEN_ALIVE,
      httpOnly: true,
      sameSite: true,
    })
    .cookie("Refresh", refreshToken, {
      maxAge: REFRESH_TOKEN_ALIVE,
      httpOnly: true,
      sameSite: true,
    });
  return res;
}

export default router;
