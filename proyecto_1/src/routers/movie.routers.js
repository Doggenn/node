// Imports
const express = require('express');
const movieRouter = express.Router();
const { getMovie, getMovies, getTitles, getTitle, createMovie, deleteMovie } = require('../controllers/movie.controller')

// Configuracion - logica - procesos



movieRouter.get('/id/:id', getMovie);
movieRouter.get('/', getMovies);
movieRouter.get('/title/:title', getTitles);
movieRouter.get('/', getTitle);
movieRouter.post('/', createMovie);
movieRouter.delete('/:id', deletemovie);




//Exports
module.exports= { movieRouter }