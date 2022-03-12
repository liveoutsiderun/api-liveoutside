const { Router } = require('express');

const router = Router();
const trailController = require('../controllers/trailController');
const { validateJWT, isRole } = require('../middlewares');

router.get('/trail/:id', [validateJWT, isRole], trailController.getTrailId);

module.exports = router;
