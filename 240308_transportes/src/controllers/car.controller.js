// 1. LLAMAR AL MODELO
const Car = require('../models/car.model');

// 2. CREAR LAS FUNCIONES CRUD (GET, POST, OATCH, DELETE)
const getCar = async (req, res, next) => {
    //¿Que se va a consultar? -> ID
    const _id = req.params._id;// Con esta linea obtenemos la ID
    //Consultamos la BB.DD.
    try {
        const car = Car.findById(_id);
        //Se devuelven los datos al usuario.
        res.status(200).json({
            status: 200,
            message: 'OK',
            data: car
        })
    } catch (error) {
        next(error);
    }
}
const createCar = async (req, res, next) => {
    try {
        const car = new Car(req.body);
        await car.save();
        res.status(201).json({
            status: 201,
            message: 'Created',
            data: car,
        })
    } catch (error) {
        next(error);
    }
    /*const { car_type, surface } = req.body;*/
}
module.exports = {getCar, createCar}