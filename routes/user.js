const { Router } = require('express');

const router = Router();

const UserValidator = require('../validators/UserValidator');
const userController = require('../controllers/userController');

router.post('/user/create', [UserValidator.UserCreateValidator], userController.create);

module.exports = router;
