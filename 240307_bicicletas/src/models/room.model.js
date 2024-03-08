const mongoose = require('mongoose');

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

const Room = mongoose.model('Room', roomSchema);
module.exports = Room;