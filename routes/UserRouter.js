const { Router } = require('express')
const controllers = require('../controllers/UserController')

const router = Router()

router.get('/', controllers.GetUsers)

module.exports = router
