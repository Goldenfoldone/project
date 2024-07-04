const Router = require('express')
const router = new Router()
const clientControllers = require('../controller/clientControllers')


router.post('/create',clientControllers.create)
router.get('/getall', clientControllers.getAll)
router.get('/:id', clientControllers.getOne)
router.post('/is/:id', clientControllers.postisOne)

module.exports = router