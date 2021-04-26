const credentials = {
  server: {
    PORT: 2500,
    ALLOWED_ORIGINS: [],
  },
  mongo: {
    database: "optimizators",
    user: "auctioneer",
    password: "QYkmfsAdOa3Z7p9e",
    CONNECT_URL: () =>
      `mongodb+srv://${credentials.mongo.user}:${credentials.mongo.password}@cluster0.r2smc.mongodb.net/${credentials.mongo.database}?retryWrites=true&w=majority`,
  },
  auth: {
    ACCESS_SECRET: "analtoy",
    REFRESH_SECRET: "gayorgy",
    ACCESS_TOKEN_ALIVE: 2 * 60 * 60 * 1000,
    REFRESH_TOKEN_ALIVE: 24 * 60 * 60 * 1000,
  },
  game: {
    MAX_GAMES_COUNT: 5,
  },
};

export default credentials;
