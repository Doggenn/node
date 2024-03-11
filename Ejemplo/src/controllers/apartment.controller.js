// 1. LLAMAR AL MODELO
const Apartment = require('../models/shop.model');

// 2. CREAR LAS FUNCIONES CRUD (GET, POST, OATCH, DELETE)
const getApartment = async (req, res, next) => {
    //¿Que se va a consultar? -> ID
    const _id = req.params._id;// Con esta linea obtenemos la ID
    //Consultamos la BB.DD.
    try {
        const apartment = await Apartment.findById(_id);
        //Se devuelven los datos al usuario.
        res.status(200).json({
            status: 200,
            message: 'OK',
            data: apartment
        })
    } catch (error) {
        next(error);
    }
}
const createApartment = async (req, res, next) => {
    try {
        const apartment = await new Apartment(req.body);
        await apartment.save();
        res.status(201).json({
            status: 201,
            message: 'Created',
            data: apartment,
        })
    } catch (error) {
        next(error);
    }
    /*const { apartment_type, surface } = req.body;*/
}
/*
const getApartment = async (req, res, next) => {
    //¿Que se va a consultar? -> ID
    const _id = req.params._id;// Con esta linea obtenemos la ID
    //Consultamos la BB.DD.
    try {
        const apartment = Apartment.findById(_id);
        //Se devuelven los datos al usuario.
        res.status(200).json({
            status: 200,
            message: 'OK',
            data: apartment
        })
    } catch (error) {
        next(error);
    }
}
*/
module.exports = {getApartment, createApartment}