const Joke = require("../models/jokes.model");

//funcion para obtener todos los chistes
module.exports = {
    findAllJokes: (req, res) => {
        Joke.find()
            .then((jokes) => res.json(jokes))
            .catch((err) => res.status(400).json(err));
    },
//funcion para crear un chiste
    createJoke: (req, res) => {
        Joke.create(req.body)
            .then((newJoke) => res.json(newJoke))
            .catch((err) => res.status(400).json(err));
    },
//funcion para obtener un chiste
    findOneJoke: (req, res) => {
        Joke.findOne({ _id: req.params.id })
            .then((oneJoke) => res.json(oneJoke))
            .catch((err) => res.status(400).json(err));
    },
//funcion para actualizar un chiste
    updateJoke: (req, res) => {
        Joke.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
            runValidators: true,
        })
            .then((updatedJoke) => res.json(updatedJoke))
            .catch((err) => res.status(400).json(err));
    },
//funcion para borrar un chiste
    deleteOneJoke: (req, res) => {
        Joke.deleteOne({ _id: req.params.id })
            .then((deletedJoke) => res.json(deletedJoke))
            .catch((err) => res.status(400).json(err));
    },


}