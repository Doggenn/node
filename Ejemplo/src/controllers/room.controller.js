// 1. LLAMAR AL MODELO
const Room = require('../models/product.model');

// 2. CREAR LAS FUNCIONES CRUD (GET, POST, OATCH, DELETE)
const getRoom = async (req, res, next) => {
    //¿Que se va a consultar? -> ID
    const _id = req.params._id;// Con esta linea obtenemos la ID
    //Consultamos la BB.DD.
    try {
        const room = await Room.findById(_id);
        //Se devuelven los datos al usuario.
        res.status(200).json({
            status: 200,
            message: 'OK',
            data: room
        })
    } catch (error) {
        next(error);
    }
}
const createRoom = async (req, res, next) => {
    try {
        const room = await new Room(req.body);
        await room.save();
        res.status(201).json({
            status: 201,
            message: 'Created',
            data: room,
        })
    } catch (error) {
        next(error);
    }
    /*const { room_type, surface } = req.body;*/
}
/*
const getRoom = async (req, res, next) => {
    //¿Que se va a consultar? -> ID
    const _id = req.params._id;// Con esta linea obtenemos la ID
    //Consultamos la BB.DD.
    try {
        const room = Room.findById(_id);
        //Se devuelven los datos al usuario.
        res.status(200).json({
            status: 200,
            message: 'OK',
            data: room
        })
    } catch (error) {
        next(error);
    }
}
*/
module.exports = {getRoom, createRoom}