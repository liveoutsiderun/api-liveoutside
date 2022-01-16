const { Router } = require('express');
const { check } = require('express-validator');

const { validateFields } = require('../middlewares/validate-fields');

const router = Router();

// Controllers
const userController = require('../controllers/userController');

router.post('/user/create', [
  check('email', 'The email is not empity').not().isEmpty(),
  check('email', 'The email is not valid').isEmail(),
  check('name', 'The name is not empity').not().isEmpty(),
  check('name', 'The email is not string').isString(),
  check('activity', 'The email is not string').isString(),
  check('birth_date', 'The birth date is not empity').not().isEmpty(),
  check('birth_date', 'The birth date is not date with ISO08601').isISO8601().toDate(),
  validateFields,
], userController.create);

module.exports = router;
