// 1. LLAMAR AL MODELO
const Moto = require('../models/moto.model');

// 2. CREAR LAS FUNCIONES CRUD (GET, POST, OATCH, DELETE)
const getMoto = async (req, res, next) => {
    //¿Que se va a consultar? -> ID
    const _id = req.params._id;// Con esta linea obtenemos la ID
    //Consultamos la BB.DD.
    try {
        const moto = Moto.findById(_id);
        //Se devuelven los datos al usuario.
        res.status(200).json({
            status: 200,
            message: 'OK',
            data: moto
        })
    } catch (error) {
        next(error);
    }
}
const createMoto = async (req, res, next) => {
    try {
        const moto = new Moto(req.body);
        await moto.save();
        res.status(201).json({
            status: 201,
            message: 'Created',
            data: moto,
        })
    } catch (error) {
        next(error);
    }
    /*const { moto_type, surface } = req.body;*/
}
module.exports = {getMoto, createMoto}