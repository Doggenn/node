// Imports
const express = require('express');
const roomRouter = express.Router();
const { getRoom, createRoom } = require('../controllers/room.controller')

// Configuracion - logica - procesos



roomRouter.get('/:_id', getRoom);
roomRouter.post('/', createRoom);





//Exports
module.exports= { roomRouter }