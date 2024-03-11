// Imports
const express = require('express');
const scooterRouter = express.Router();
const { getScooter, getScooters, createScooter } = require('../controllers/scooter.controller')

// Configuracion - logica - procesos



scooterRouter.get('/:_id', getScooter);
scooterRouter.get('/', getScooters);
scooterRouter.post('/', createScooter);





//Exports
module.exports= { scooterRouter }