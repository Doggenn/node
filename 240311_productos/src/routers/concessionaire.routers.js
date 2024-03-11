// Imports
const express = require('express');
const concessionaireRouter = express.Router();
const { getConcessionaire, getConcessionaires, createConcessionaire } = require('../controllers/concessionaire.controller')

// Configuracion - logica - procesos



concessionaireRouter.get('/:_id', getConcessionaire);
concessionaireRouter.get('/', getConcessionaires);
concessionaireRouter.post('/:_id', createConcessionaire);





//Exports
module.exports= { concessionaireRouter }