// Imports
const express = require('express');
const apartmentRouter = express.Router();
const { getApartment, createApartment } = require('../controllers/apartment.controller')

// Configuracion - logica - procesos



apartmentRouter.get('/:_id', getApartment);
apartmentRouter.post('/', createApartment);





//Exports
module.exports= { apartmentRouter }