
const router = require('express').Router()

const adminController = require('../Controller/adminController')
const subAdminController = require('../Controller/subAdminController')
const userController = require('../Controller/userController')
const postController = require('../Controller/postController')

router.get('/admin/create', adminController.create)
router.get('/admin/read', adminController.read)
router.get('/admin/delete', adminController.delete)
router.get('/admin/update', adminController.update)


router.get('/sub-admin/create', subAdminController.create)
router.get('/sub-admin/read', subAdminController.read)
router.get('/sub-admin/delete', subAdminController.delete)
router.get('/sub-admin/update', subAdminController.update)


router.get('/user/create', userController.create)
router.get('/user/read', userController.read)
router.get('/user/delete', userController.delete)
router.get('/user/update', userController.update)



router.get('/post/create', postController.create)
router.get('/post/read', postController.read)
router.get('/post/delete', postController.delete)
router.get('/post/update', postController.update)


module.exports = router