const { Router } = require('express');

const AuthController = require('../controllers/authController');
const AuthValidator = require('../validators/AuthValidator');

const router = Router();

router.post('/login', [AuthValidator.EmailValidator], AuthController.login);

module.exports = router;
