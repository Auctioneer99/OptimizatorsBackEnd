import mongodb from "mongodb";
import mongoose from "mongoose";

const { ObjectId } = mongodb;

let GameSchema = new mongoose.Schema({
  creator: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  updatedAt: {
    type: Date,
    required: true,
  },
  gameState: {
    type: Object,
    required: true,
  },
});

const Game = mongoose.model("Game", GameSchema);

export default Game;
