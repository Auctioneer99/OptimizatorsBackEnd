const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

let UserSchema = new mongoose.Schema({
  _id: {
    type: ObjectId,
    required: true,
  },
  login: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

let User = mongoose.model("User", UserSchema);

module.exports = User;
