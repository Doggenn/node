// Imports
const express = require('express');
const roomRouter = express.Router();
const { getRoom } = require('../controllers/room.controller')

// Configuracion - logica - procesos



roomRouter.get('/:_id', getRoom);





//Exports
module.exports= { roomRouter }