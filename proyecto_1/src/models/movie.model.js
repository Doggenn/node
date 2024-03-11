
const mongoose = require('mongoose');
const { movieRouter } = require('../routers/movie.routers');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,/// Sirve para que no se queden los espacios en blanco
    },
    director: {
        type: String,
        required: true,
        trim: true,/// Sirve para que no se queden los espacios en blanco
    },
    year: {
        type: Number,
        required: true,
    },
    genre: {
        type: String,
        required: true,
        trim: true,/// Sirve para que no se queden los espacios en blanco
    },
})
//movieRouter.get('/', getMovie);
/*movieRouter.post('/', createMovie);*/

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;

