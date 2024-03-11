// 1. LLAMAR AL MODELO
const Scooter = require('../models/scooter.model');

// 2. CREAR LAS FUNCIONES CRUD (GET, POST, OATCH, DELETE)
const getScooter = async (req, res, next) => {
    //¿Que se va a consultar? -> ID
    const _id = req.params._id;// Con esta linea obtenemos la ID
    //Consultamos la BB.DD.
    try {
        const scooter = await Scooter.findById(_id);
        //Se devuelven los datos al usuario.
        res.status(200).json({
            status: 200,
            message: 'OK',
            data: scooter
        })
    } catch (error) {
        next(error);
    }
}
const getScooters = async (req, res, next) => {
    //¿Que se va a consultar? -> ID
    const _id = req.params._id;// Con esta linea obtenemos la ID
    //Consultamos la BB.DD.
    try {
        const scooter = await Scooter.find();
        //Se devuelven los datos al usuario.
        res.status(200).json({
            status: 200,
            message: 'OK',
            data: scooter
        })
    } catch (error) {
        next(error);
    }
}
const createScooter = async (req, res, next) => {
    try {
        const scooter = await new Scooter(req.body);
        await scooter.save();
        res.status(201).json({
            status: 201,
            message: 'Created',
            data: scooter,
        })
    } catch (error) {
        next(error);
    }
    /*const { scooter_type, surface } = req.body;*/
}
/*
const getScooter = async (req, res, next) => {
    //¿Que se va a consultar? -> ID
    const _id = req.params._id;// Con esta linea obtenemos la ID
    //Consultamos la BB.DD.
    try {
        const scooter = Scooter.findById(_id);
        //Se devuelven los datos al usuario.
        res.status(200).json({
            status: 200,
            message: 'OK',
            data: scooter
        })
    } catch (error) {
        next(error);
    }
}
*/
module.exports = {getScooter,getScooters, createScooter}