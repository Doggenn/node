// 1. LLAMAR AL MODELO
const Movie = require('../models/movie.model');

// 2. CREAR LAS FUNCIONES CRUD (GET, POST, OATCH, DELETE)
const getMovie = async (req, res, next) => {
    //¿Que se va a consultar? -> ID
    
    //Consultamos la BB.DD.
    try {
        const _id = req.params._id;// Con esta linea obtenemos la ID
        const movie = await Movie.findById(_id);
        //Se devuelven los datos al usuario.
        res.status(200).json({
            status: 200,
            message: 'OK',
            data: movie
        })
    } catch (error) {
        next(error);
    }
}
const getMovies = async (req, res, next) => {
    //¿Que se va a consultar? -> ID
    
    //Consultamos la BB.DD.
    try {
        const _id = req.params._id;// Con esta linea obtenemos la ID
        const movie = await Movie.find();
        //Se devuelven los datos al usuario.
        res.status(200).json({
            status: 200,
            message: 'OK',
            data: movie
        })
    } catch (error) {
        next(error);
    }
}
const getTitle = async (res) => {
    try {
        const title = await movie.find()
        return res.status(200).json(title)
    } catch (error) {
        return res.status(500).json(error)
    }
}
const getTitles = async (req, res, next) => {
    //¿Que se va a consultar? -> ID
    
    //Consultamos la BB.DD.
    try {
        const title = req.params.title;// Con esta linea obtenemos el titulo
        const movie = await Movie.findById(title);
        //Se devuelven los datos al usuario.
        res.status(200).json({
            status: 200,
            message: 'OK',
            data: movie
        })
    } catch (error) {
        next(error);
    }
}


const createMovie = async (req, res, next) => {
    try {
        const movie = await new Movie(req.body);
        await movie.save();
        res.status(201).json({
            status: 201,
            message: 'Created',
            data: movie,
        })
    } catch (error) {
        next(error);
    }
    /*const { movie_type, surface } = req.body;*/
}
const deleteMovie = async (req, res) => {
    
    try {
        const { id } = req.params;
        constdeleteMovie = await Movie.findByIdAndDelete(id);
        return res.status(200).json(deleteMovie)
        if (!deleteMovie) {
            return res.status(404).json({message: "No hay ninguna pelicura registrada con ese ID."})
        }
    } catch (error) {
        return res.status(500).json(error)
    }
}
const putMovie = async (req, res) => {
    try {
        const { id } req.params;
        const putMovie = new Movie(req.body);
        putMovie._id = id;
        const updateMovie =await Movie.findByIdAndUpdate(id, putMovie, {new:true})
    } catch {
        return res.status(500).json
    }
}
/*
const getMovie = async (req, res, next) => {
    //¿Que se va a consultar? -> ID
    const _id = req.params._id;// Con esta linea obtenemos la ID
    //Consultamos la BB.DD.
    try {
        const movie = Movie.findById(_id);
        //Se devuelven los datos al usuario.
        res.status(200).json({
            status: 200,
            message: 'OK',
            data: movie
        })
    } catch (error) {
        next(error);
    }
}
*/
module.exports = { getMovie, getMovies, getTitles, getTitle, createMovie, deleteMovie }