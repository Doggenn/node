
const mongoose = require('mongoose');
const { motoRouter } = require('../routers/moto.routers');

const motoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,/// Sirve para que no se queden los espacios en blanco
    },
    plate: {
        type: String,
        required: true,
        trim: true,/// Sirve para que no se queden los espacios en blanco
    },
    quantity: {
        type: Number,
        required: true,
    }
})
//motoRouter.get('/', getMoto);
/*motoRouter.post('/', createMoto);*/

const Moto = mongoose.model('Moto', motoSchema);
module.exports = Moto;

