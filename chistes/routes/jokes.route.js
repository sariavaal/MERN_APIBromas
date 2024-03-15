const express = require("express");

const {
  createJoke,
  findAllJokes,
  findOneJoke,
  updateJoke,
  deleteOneJoke,
} = require("../controllers/jokes.controller");


const JokeRouter = express.Router();

JokeRouter.post("/", createJoke);
JokeRouter.get("/", findAllJokes);
JokeRouter.get("/:id", findOneJoke);
JokeRouter.put("/:id", updateJoke);
JokeRouter.delete("/:id", deleteOneJoke);

module.exports = JokeRouter;
