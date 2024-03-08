const mongoose = require('mongoose');

const privateSchema = new mongoose.Schema({
    quantity: {
        type: Number,
        required: true,
    },
    rooms: [{
        type: mongoose.Schema.Types.ObjectId, //Esto es para hacer referencia al archivo de room.model.js para asi 
        ref: "Bike"
    }],
    rooms: [{
        type: mongoose.Schema.Types.ObjectId, //Esto es para hacer referencia al archivo de room.model.js para asi 
        ref: "Car"
    }],
    rooms: [{
        type: mongoose.Schema.Types.ObjectId, //Esto es para hacer referencia al archivo de room.model.js para asi 
        ref: "Moto"
    }]

})

const Private = mongoose.model('Private', privateSchema);
module.exports = Private;