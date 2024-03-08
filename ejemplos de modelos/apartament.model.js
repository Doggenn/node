const mongoose = require('mongoose');

const apartmentSchema = new mongoose.Schema({
    floor: {
        type: Number,
        required: true,
    },
    letter: {
        type: String,
        required: true,
        trim: true,/// Sirve para que no se queden los espacios en blanco
    },
    surface: {
        type: Number,
        required: true,
    },
    rooms: [{
        type: mongoose.Schema.Types.ObjectId, //Esto es para hacer referencia al archivo de room.model.js para asi 
        ref: "Room"
    }]

})

const Apartment = mongoose.model('Apartment', apartmentSchema);
module.exports = Apartment;