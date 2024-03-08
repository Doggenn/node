const express = require('express');
const carRouter = express.Router();

const { getCar, createCar,/* updateCar, deleteCar*/ } = require('../controllers/car.controller');

carRouter.get('/', getCar);
carRouter.post('/', createCar);
//carRouter.patch('/', updateCar);
//carRouter.delete('/', deleteCar);

module.exports = { carRouter }