const express = require('express');
const cartRouter = require('./cart.router');
const categoryRouter = require('./category.router');
const imageRouter = require('./image.router');
const productRouter = require('./product.router');
const purchaseRouter = require('./purchase.router');
const userRouter = require('./user.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/users', userRouter)
router.use('/categories', categoryRouter)
router.use('/products', productRouter)
router.use('/product_images', imageRouter)
router.use('/cart', cartRouter)
router.use('/purchases', purchaseRouter)



module.exports = router;