const credentials = {
  server: {
    PORT: 2500,
  },
  mongo: {
    CONNECT_URL:
      "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false",
  },
  auth: {
    ACCESS_SECRET: "analtoy",
    REFRESH_SECRET: "gayorgy",
    ACCESS_TOKEN_ALIVE: 2 * 60 * 60 * 1000,
    REFRESH_TOKEN_ALIVE: 24 * 60 * 60 * 1000,
  },
};

export default credentials;
