const express = require('express');
const privateRouter = express.Router();

const { getPrivate, createPrivate, updatePrivate, deletePrivate } = require('../controllers/private.controller');

privateRouter.get('/', getPrivate);
privateRouter.post('/', createPrivate);
privateRouter.patch('/', updatePrivate);
privateRouter.delete('/', deletePrivate);

module.exports = { privateRouter }