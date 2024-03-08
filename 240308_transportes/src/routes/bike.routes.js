const express = require('express');
const bikeRouter = express.Router();

const { getBike, createBike, updateBike, deleteBike } = require('../controllers/bike.controller');

bikeRouter.get('/', getBike);
bikeRouter.post('/', createBike);
bikeRouter.patch('/', updateBike);
bikeRouter.delete('/', deleteBike);

module.exports = { bikeRouter }