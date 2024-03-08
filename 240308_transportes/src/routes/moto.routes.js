const express = require('express');
const motoRouter = express.Router();

const { getMoto/*, createMoto, updateMoto, deleteMoto*/ } = require('../controllers/moto.controller');

motoRouter.get('/', getMoto);
//motoRouter.post('/', createMoto);
//motoRouter.patch('/', updateMoto);
//motoRouter.delete('/', deleteMoto);

module.exports = { motoRouter }