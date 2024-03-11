// Imports
const express = require('express');
const motoRouter = express.Router();
const { getMoto, getMotos, createMoto } = require('../controllers/moto.controller')

// Configuracion - logica - procesos



motoRouter.get('/:_id', getMoto);
motoRouter.get('/', getMotos);
motoRouter.post('/', createMoto);





//Exports
module.exports= { motoRouter }