const express = require('express')
const route = express.Router()

const blogController = require('../Controllers/blogController')

//blog page routing
route.get('/blog/create', blogController.create)
route.get('/blog/read', blogController.read)
route.get('/blog/delete', blogController.delete)
route.get('/blog/update', blogController.update)


const commentController = require('../Controllers/commentController')

//comment page routing
route.get('/comment/create', commentController.create)
route.get('/comment/read', commentController.read)
route.get('/comment/delete', commentController.delete)
route.get('/comment/update', commentController.update)


const messageController = require('../Controllers/messageController')

//message page routing
route.get('/message/create', messageController.create)
route.get('/message/read', messageController.read)
route.get('/message/delete', messageController.delete)
route.get('/message/update', messageController.update)


const portfolioController = require('../Controllers/portfolioController')

//portfolio page routing
route.get('/portfolio/create', portfolioController.create)
route.get('/portfolio/read', portfolioController.read)
route.get('/portfolio/delete', portfolioController.delete)
route.get('/portfolio/update', portfolioController.update)


const productController = require('../Controllers/productController')

//product page routing
route.get('/product/create', productController.create)
route.get('/product/read', productController.read)
route.get('/product/delete', productController.delete)
route.get('/product/update', productController.update)








module.exports = route
