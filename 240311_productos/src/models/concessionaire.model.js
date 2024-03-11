const mongoose = require('mongoose');

const concessionaireSchema = new mongoose.Schema({
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
    moto: [{
        type: mongoose.Schema.Types.ObjectId, //Esto es para hacer referencia al archivo de room.model.js para asi 
        ref: "Moto"
    }]

})

const Concessionaire = mongoose.model('Concessionaire', concessionaireSchema);
module.exports = Concessionaire;