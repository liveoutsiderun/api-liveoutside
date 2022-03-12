const { Router } = require('express');

const loginController = require('../controllers/authController');
const AuthValidator = require('../validators/AuthValidator');

const router = Router();

router.post('/login', [AuthValidator.EmailValidator], loginController.login);

module.exports = router;
