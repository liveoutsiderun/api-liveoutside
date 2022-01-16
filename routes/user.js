const { Router } = require('express');

const router = Router();

// Controllers
const userController = require('../controllers/userController');

router.post('/user/create', userController.create);

module.exports = router;
