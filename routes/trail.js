const { Router } = require('express');

const router = Router();
const trailController = require('../controllers/trailController');
const { validateJWT, isRole } = require('../middlewares');

router.get('/trails/basic', trailController.getTrailsBasic);
router.get('/trail/:id', [validateJWT, isRole], trailController.getTrailById);

module.exports = router;
