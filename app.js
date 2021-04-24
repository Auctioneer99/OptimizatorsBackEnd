const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser")();

const auth = require("./middleware/JWTAuthorizer.js");

let credentials = {
  MONGO_CONNECT = ""
}

mongoose
  .connect(credentials.MONGO_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const app = express();
const server = http.Server(app);

app.use(require("./routes/router.js"));
app.use(express.static(__dirname + "/public"));
app.use(cookieParser);
app.use(auth);

const PORT = 2500;

server.listen(PORT, console.log(`Server started on port ${PORT}`));
