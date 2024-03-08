const mongoose = require('mongoose');

const buildingSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true,
        trim: true,/// Sirve para que no se queden los espacios en blanco
    },
    use: {
        type: String,
        required: true,
        trim: true,/// Sirve para que no se queden los espacios en blanco
    },
    number: {
        type: Number,
        required: true,
    },
    Apartments: [{
        type: mongoose.Schema.Types.ObjectId, //Esto es para hacer referencia al archivo de room.model.js para asi 
        ref: "Apartment"
    }]

})

const Building = mongoose.model('Building', buildingSchema);
module.exports = Building;