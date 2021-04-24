const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const User = require("../models/User");
const auth = require("./lib/Auth.js");

let credentials = {
  ACCESS_TOKEN_ALIVE = 2 * 60 * 60 * 1000,
  REFRESH_TOKEN_ALIVE = 24 * 60 * 60 * 1000,
}

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
    handleError(errors, res)
  } else {
    if (login == "Ris" && password == "ris") {
      user = {
        login: "Ris",
      };
        setCookies(user, res)
        .status(200)
        .json({
          message: "Success",
        });
    } else {
      errors.push({ msg: "User not found" });
      handleError(errors, res)
    }
  }
}

function register (req, res) {
  const { login, email, password } = req.body;

  let errors = [];

  if (!login || !email || !password) {
    errors.push({ msg: "Please enter all fields" });
  }

  if (password.length < 6) {
    errors.push({ msg: "Password must be at least 6 characters" });
  }

  if (errors.length > 0) {
    handleError(errors, res)
  } else {
    User.findOne({ email: email }).then((user) => {
      if (user) {
        errors.push({ msg: "Email already exists" });
        handleError(errors, res)
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
                setCookies(user, res)
                  .status(200).json({
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
  res.clearCookie("Authorization")
    .clearCookie("Refresh")
    .status(200)
    .json({
      message: "Success"
    });
}

function handleError(errors, res)
{
  res.status(400).json({
    errors: errors,
  });
}

function setCookies(user, res)
{
  let authToken = auth.generateAccessToken(user);
  let refreshToken = auth.generateRefreshToken(user);

  res
    .cookie("Authorization", authToken, {
      maxAge: credentials.ACCESS_TOKEN_ALIVE,
      httpOnly: true,
      sameSite: true,
    })
    .cookie("Refresh", refreshToken, {
      maxAge: credentials.REFRESH_TOKEN_ALIVE,
      httpOnly: true,
      sameSite: true,
    });
  return res;
}

module.exports = router;
