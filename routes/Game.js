import express from "express";

import Game from "../Models/Game.js";
import authHelper from "./AuthHelper.js";

const router = express.Router();

router.post("/create", authHelper.authorized, create);
router.post("/delete", authHelper.authorized, remove);
router.post("/update", authHelper.authorized, update);
router.post("/:id/xml", getGameInfoXML);
router.post("/:id", getGameInfo);

function getGameInfoXML(req, res) {
  res.send(400).json({});
}

/*
let routes = [
  {
    description: "Создание игры",
    path: "/game/create",
    requires: {
      authorization
    },
    accept: {
      game: Object,
    },
    returns: {
      message: String,
      game: Object,
      error: Object,
    },
  },
  {
    description: "Удаление игры",
    path: "/game/delete",
    requires: {
      authorization
    },
    accept: {
      id: String,
    },
    returns: {
      message: String,
      game: Object,
      error: Object,
    },
  },
  {
    description: "Обновление игры",
    path: "/game/update",
    requires: {
      authorization
    },
    accept: {
      id: String,
      game: Object,
    },
    returns: {
      message: String,
      game: Object,
      error: Object,
    },
  },
  {
    description: "Информация по игре",
    path: "/game/",
    accept: {
      id: String,
    },
    returns: {
      message: String,
      game: Object,
      error: Object,
    },
  },
];
*/

function getGameInfo(req, res) {
  let gameId = req.params.id;

  Game.findById(gameId)
    .then((game) => {
      res.status(200).json({
        message: "Success",
        game: game,
      });
    })
    .catch((error) => {
      console.log(error);
      res.send(400).json({
        message: "Failed to load game",
        error: error,
      });
    });
}

function create(req, res) {
  const newGame = new Game({
    creator: req.user.user.id,
    gameState: req.body,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  });

  newGame
    .save()
    .then((game) => {
      res.status(200).json({
        message: "Registered",
        savedData: game,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ message: "Failed to create game" });
    });
}

function remove(req, res) {
  Game.findOneAndDelete({
    _id: req.body.id,
    creator: req.user.user.id,
  })
    .then((response) => {
      res.status(200).json({
        message: "Deleted",
        game: response,
      });
    })
    .catch((error) => {
      console.log(err);
      res.status(400).json({ message: "Failed to delete game", error: error });
    });
}

function update(req, res) {
  req.body.updatedAt = Date.now();
  Game.findOneAndUpdate(
    {
      _id: req.body.id,
      creator: req.user.user.id,
    },
    req.body
  )
    .then((response) => {
      res.status(200).json({
        message: "Updated",
        game: response,
      });
    })
    .catch((error) => {
      console.log(err);
      res.status(400).json({ message: "Failed to update game", error: error });
    });
}

export default router;
