// 1. LLAMAR AL MODELO
const Room = require('../models/room.model');

// 2. CREAR LAS FUNCIONES CRUD (GET, POST, OATCH, DELETE)
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
module.exports = {getRoom}