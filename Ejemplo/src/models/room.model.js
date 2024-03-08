const mongoose = require('mongoose');
const { roomRouter } = require('../routers/room.routers');

const roomSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        trim: true,/// Sirve para que no se queden los espacios en blanco
    },
    surface: {
        type: Number,
        required: true,
    }
})
//roomRouter.get('/', getRoom);
/*roomRouter.post('/', createRoom);*/

const Room = mongoose.model('Room', roomSchema);
module.exports = Room;