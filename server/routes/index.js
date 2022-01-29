const express = require('express')
const router = express.Router({ mergeParams: true })

// /api/auth
router.use('/auth', require('./auth.routes'))
router.use('/products', require('./products.routes'))
router.use('/category', require('./category.routes'))
router.use('/user', require('./user.routes'))

module.exports = router