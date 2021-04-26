import credentials from "../credentials.js";

const { MAX_GAMES_COUNT } = credentials.game;

class GameManager {
  constructor(lobbyCount) {
    this.lobbyCount = lobbyCount;
    this.lobbies = [];
  }

  addLobby(lobby) {
    if (this.lobbies.length < this.lobbyCount) {
      this.lobbies.push(lobby);
    }
  }

  update(deltaTime) {
    lobbies.forEach((lobby) => {
      lobby.update(deltaTime);
    });
  }
}

let manager = new GameManager(MAX_GAMES_COUNT);

export default manager;
