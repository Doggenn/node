const private = require('../models/private.model')


const getPrivate = async (req, res, next) => {
    res.status(200).json({
        status: 200,
        message: 'has hecho un get en private'
    });
}

const createPrivate = async (req, res, next) => {
    res.status(201).json({
        status: 201,
        message: 'has hecho un post en private'
    });
}


const updatePrivate = async (req, res, next) => {
    res.status(201).json({
        status: 201,
        message: 'has hecho un patch  en private'
    });
}


const deletePrivate = async (req, res, next) => {
    res.status(200).json({
        status: 200,
        message: 'has hecho un delete en private'
    });
}


module.exports = { getPrivate, createPrivate, updatePrivate, deletePrivate }