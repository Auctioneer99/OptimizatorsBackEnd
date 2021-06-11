import express from "express";

import Game from "../Models/Game.js";
import { authorized } from "./AuthHelper";

const router = express.Router();

router.post("/create", authorized, createGame);
router.post("/:id/xml", getGameInfoXML);
router.post("/:id", getGameInfo);

function getGameInfoXML(req, res) {
  res.send(400).json({});
}

function getGameInfo(req, res) {
  let gameId = req.params.id;

  Game.findOne({ id: gameId })
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

function createGame(req, res) {
  const newGame = new Game({
    creator: req.user.id,
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

export default router;
