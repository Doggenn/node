// 1. LLAMAR AL MODELO
const Concessionaire = require('../models/concessionaire.model');

// 2. CREAR LAS FUNCIONES CRUD (GET, POST, OATCH, DELETE)
const getConcessionaire = async (req, res, next) => {
    //¿Que se va a consultar? -> ID
    const _id = req.params._id;// Con esta linea obtenemos la ID
    //Consultamos la BB.DD.
    try {
        const concessionaire = await Concessionaire.findById(_id);
        //Se devuelven los datos al usuario.
        res.status(200).json({
            status: 200,
            message: 'OK',
            data: concessionaire
        })
    } catch (error) {
        next(error);
    }
}
const getConcessionaires = async (req, res, next) => {
    //¿Que se va a consultar? -> ID
    const _id = req.params._id;// Con esta linea obtenemos la ID
    //Consultamos la BB.DD.
    try {
        const concessionaire = await Concessionaire.findById(_id);
        //Se devuelven los datos al usuario.
        res.status(200).json({
            status: 200,
            message: 'OK',
            data: concessionaire
        })
    } catch (error) {
        next(error);
    }
}
const createConcessionaire = async (req, res, next) => {
    try {
        const concessionaire = await new Concessionaire(req.body);
        await concessionaire.save();
        res.status(201).json({
            status: 201,
            message: 'Created',
            data: concessionaire,
        })
    } catch (error) {
        next(error);
    }
    /*const { concessionaire_type, surface } = req.body;*/
}
/*
const getConcessionaire = async (req, res, next) => {
    //¿Que se va a consultar? -> ID
    const _id = req.params._id;// Con esta linea obtenemos la ID
    //Consultamos la BB.DD.
    try {
        const concessionaire = Concessionaire.findById(_id);
        //Se devuelven los datos al usuario.
        res.status(200).json({
            status: 200,
            message: 'OK',
            data: concessionaire
        })
    } catch (error) {
        next(error);
    }
}
*/
module.exports = {getConcessionaire, getConcessionaires, createConcessionaire}