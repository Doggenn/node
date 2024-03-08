const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,/// Sirve para que no se queden los espacios en blanco
    },
    nif: {
        type: String,
        required: true,
        trim: true,/// Sirve para que no se queden los espacios en blanco
    },
    age: {
        type: Number,
        required: true,
    },
    siblings: [{type: String}]// Es para unirlo
})

const Person = mongoose.model('Person', personSchema);
module.exports = Person;