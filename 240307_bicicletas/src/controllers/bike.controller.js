const bike = require('../models/bike.model')

const getBike = async (req, res, next) => {
    res.status(200).json({
        status: 200,
        message: 'has hecho un get en bici'
    });
}

const createBike = async (req, res, next) => {
    res.status(201).json({
        status: 201,
        message: 'has hecho un post en bici'
    });
}


const updateBike = async (req, res, next) => {
    res.status(201).json({
        status: 201,
        message: 'has hecho un patch en bici'
    });
}


const deleteBike = async (req, res, next) => {
    res.status(200).json({
        status: 200,
        message: 'has hecho un delete en bici'
    });
}


module.exports = { getBike, createBike, updateBike, deleteBike }

//______________________________________________________________________


