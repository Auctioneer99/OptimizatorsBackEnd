import express from "express";

import authHelper from "./AuthHelper.js";

import User from "../Models/User.js";
import Game from "../Models/Game.js";

const router = express.Router();
router.use(authHelper.authorized);

router.post("/", getUserProfile);

/*
let routes = [
  {
    description: "Профиль пользователя",
    path: "/user/",
    requires: {
      authorization
    },
    accept: {
    },
    returns: {
      message: String,
      user: Object,
      games: Array,
      error: Object,
    },
  },
];
*/

function getUserProfile(req, res) {
  User.findById(req.user.user.id)
    .then((user) => {
      Game.find({ creator: req.user.user.id })
        .then((games) => {
          res.status(200).json({
            message: "User found",
            user: {
              id: user._id,
              login: user.login,
              email: user.email,
            },
            games: games,
          });
        })
        .catch((err) => {
          console.log(err);
          res.status(400).json({
            message: "Failed to get user info",
            error: err,
          });
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        message: "Failed to get user info",
        error: err,
      });
    });
}

export default router;
