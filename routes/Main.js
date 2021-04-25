import express from "express";

const router = express.Router();

router.post("/profile", getProfile);
router.post("/game");
router.post("/game/:id", getGameInfo);
router.get("/", getDefault);

function getProfile(req, res) {
  res.status(200).json({
    name: "Some name",
    games: [],
  });
}

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

function getDefault(req, res) {
  res.sendFile("index.html");
}

export default router;
/*
= function () {
  router.use((req, res, next) => {
    var fullUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
    console.log(fullUrl);
    next();
  });
  router.use("/game", function (req, res, next) {
    if (req.query.id) {
      res.cookie("game", req.query.id, {
        maxAge: 60 * 60 * 1000,
        httpOnly: true,
      });
    } else {
      if (!req.cookies.game) {
        return res.redirect(
          "/game?id=" + (LManager.Lobbys[0] ? LManager.Lobbys[0].Name : "null")
        );
      } else {
        return res.redirect("/game?id=" + req.cookies.game);
      }
    }
    next();
  });

  router.get("/game", (req, res) =>
    res.render("index", { auth: req.isAuthenticated(), admin: isAdmin(req) })
  );
  router.get("/join", (req, res) => {
    if (req.query.id) {
      let g = LManager.LobbyByName(req.query.id);
      if (g) {
        if (g.PlayerJoin(req, res)) {
          res.status(200).end();
          return "ok";
        }
      }
    }
    req.respo;
    res.send("failed");
  });
  router.get("/", (req, res) => res.redirect("/game"));

  router.use((req, res) => {
    res.header(404);
    res.render("404");
  });
  router.use((err, req, res, next) => {
    console.log(err);
    res.header(404);
    res.send("404");
  });
  return router;
};*/
