const { getAll, create, remove } = require('../controllers/image.controllers');
const express = require('express');
const upload = require('../tests/multer');

const imageRouter = express.Router();

imageRouter.route('/')
    .get(getAll)
    .post(upload.single('image'), create)


imageRouter.route('/:id')
    .delete(remove)

module.exports = imageRouter;