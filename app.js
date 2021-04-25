import "core-js";
import "regenerator-runtime";
import express from "express";
import http from "http";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";

import authorizer from "./middleware/JWTAuthorizer.js";
import mainRoutes from "./routes/Main.js";
import authRoutes from "./routes/Authorization.js";
import credentials from "./credentials.js";

mongoose
  .connect(credentials.mongo.CONNECT_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const app = express();
const server = http.Server(app);

app.use(express.static("./public"));
app.use(cors());
app.use(cookieParser());
app.use(authorizer);

app.use(authRoutes);
app.use(mainRoutes);

server.listen(
  credentials.server.PORT,
  console.log(`Server started on port ${credentials.server.PORT}`)
);
