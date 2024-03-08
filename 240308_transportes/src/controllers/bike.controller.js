// 1. LLAMAR AL MODELO
const Bike = require('../models/bike.model');

// 2. CREAR LAS FUNCIONES CRUD (GET, POST, OATCH, DELETE)
const getBike = async (req, res, next) => {
    //¿Que se va a consultar? -> ID
    const _id = req.params._id;// Con esta linea obtenemos la ID
    //Consultamos la BB.DD.
    try {
        const bike = Bike.findById(_id);
        //Se devuelven los datos al usuario.
        res.status(200).json({
            status: 200,
            message: 'OK',
            data: bike
        })
    } catch (error) {
        next(error);
    }
}
const createBike = async (req, res, next) => {
    try {
        const bike = new Bike(req.body);
        await bike.save();
        res.status(201).json({
            status: 201,
            message: 'Created',
            data: bike,
        })
    } catch (error) {
        next(error);
    }
    /*const { bike_type, surface } = req.body;*/
}
module.exports = {getBike, createBike}
