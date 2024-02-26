const { getAll, create, getOne, remove, update } = require('../controllers/purchase.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const purchaseRouter = express.Router();

purchaseRouter.route('/')
    .get(getAll)
    .post(create);


module.exports = purchaseRouter;