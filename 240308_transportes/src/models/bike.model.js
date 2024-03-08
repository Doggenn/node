const mongoose = require('mongoose');

const bikeSchema = new mongoose.Schema({
    model: {
        type: String,
        required: true,
        trim: true,/// Sirve para que no se queden los espacios en blanco
    },
    color: {
        type: String,
        required: true,
        trim: true,/// Sirve para que no se queden los espacios en blanco
    },
    gamma: {
        type: String,
        required: true,
        trim: true,/// Sirve para que no se queden los espacios en blanco
    },
})

const Bike = mongoose.model('Bike', bikeSchema);
module.exports = Bike;