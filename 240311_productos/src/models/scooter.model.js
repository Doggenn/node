const mongoose = require('mongoose');
const { scooterRouter } = require('../routers/scooter.routers');

const scooterSchema = new mongoose.Schema({
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
//scooterRouter.get('/', getScooter);
/*scooterRouter.post('/', createScooter);*/

const Scooter = mongoose.model('Scooter', scooterSchema);
module.exports = Scooter;