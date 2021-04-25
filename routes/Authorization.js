import express from "express";
import bcrypt from "bcryptjs";

import credentials from "../credentials.js";
import User from "../Models/User.js";
import auth from "../libs/Auth.js";

const router = express.Router();

const { ACCESS_TOKEN_ALIVE, REFRESH_TOKEN_ALIVE } = credentials.auth;

router.post("/login", login);
router.post("/register", register);
router.post("/logout", logOut);

function login(req, res) {
  const { login, password } = req.body;

  let errors = [];

  if (!login || !password) {
    errors.push({ msg: "Please enter all fields" });
  }

  if (errors.length > 0) {
    handleError(errors, res);
  } else {
    if (login == "Ris" && password == "ris") {
      user = {
        login: "Ris",
      };
      setCookies(user, res).status(200).json({
        message: "Success",
      });
    } else {
      errors.push({ msg: "User not found" });
      handleError(errors, res);
    }
  }
}

function register(req, res) {
  const { login, email, password } = req.body;

  let errors = [];

  if (!login || !email || !password) {
    errors.push({ msg: "Please enter all fields" });
  }

  if (password.length < 6) {
    errors.push({ msg: "Password must be at least 6 characters" });
  }

  if (errors.length > 0) {
    handleError(errors, res);
  } else {
    User.findOne({ email: email }).then((user) => {
      if (user) {
        errors.push({ msg: "Email already exists" });
        handleError(errors, res);
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
}

function logOut(req, res) {
  res.clearCookie("Authorization").clearCookie("Refresh").status(200).json({
    message: "Success",
  });
}

function handleError(errors, res) {
  res.status(400).json({
    errors: errors,
  });
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
