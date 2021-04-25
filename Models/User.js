import mongodb from "mongodb";
import mongoose from "mongoose";

const { ObjectId } = mongodb;

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

const User = mongoose.model("User", UserSchema);

export default User;
