import "core-js";
import "regenerator-runtime";
import express from "express";
import http from "http";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import bodyParser from "body-parser";

import authorizer from "./middleware/JWTAuthorizer.js";
import userRoutes from "./routes/User.js";
import gameRoutes from "./routes/Game.js";
import authRoutes from "./routes/Authorization.js";
import credentials from "./credentials.js";

const { PORT, ALLOWED_ORIGINS } = credentials.server;

const app = express();
const server = http.Server(app);

app.use(express.static("./public"));
app.use(
  cors({
    origin: ALLOWED_ORIGINS,
    methods: "GET, POST",
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(authorizer);

app.use(authRoutes);
app.use(gameRoutes);
app.use(userRoutes);

mongoose
  .connect(credentials.mongo.CONNECT_URL(), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected");
    let port = process.env.PORT || PORT;
    server.listen(port, () => console.log(`Server started on port ${port}`));
  })
  .catch((err) => console.log(err));
