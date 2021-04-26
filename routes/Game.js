import express from "express";

const router = express.Router();

router.post("/game/:id/xml", getGameInfoXML);
router.post("/game/:id", getGameInfo);
router.post("/game", createGame);

function getGameInfoXML(req, res) {}

function getGameInfo(req, res) {
  let gameId = req.params.id;

  let game = {
    id: gameId,
    name: "some name",
    createdAt: "",
    updatedAt: "",
  };

  res.status(200).json({
    game: game,
  });
}

function createGame(req, res) {
  let { name } = req.body;
  let game = {
    id: 0,
    name: name,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };

  res.status(200).json({
    game: game,
    connectUrl: "undefined",
  });
}

export default router;
