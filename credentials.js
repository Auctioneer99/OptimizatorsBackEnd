const credentials = {
  server: {
    PORT: 2500,
    ALLOWED_ORIGINS: [
      "https://optimizators.herokuapp.com",
      "http://localhost:8080",
      "https://localhost:8080",
    ],
  },
  auth: {
    ACCESS_TOKEN_ALIVE: 100 * 2 * 60 * 60 * 1000,
    REFRESH_TOKEN_ALIVE: 100 * 24 * 60 * 60 * 1000,
  },
  game: {
    MAX_GAMES_COUNT: 5,
  },
};

export default credentials;
