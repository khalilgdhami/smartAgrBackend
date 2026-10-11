const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/parcelleController');

router.post('/', ctrl.create);
router.get('/', ctrl.getAll);
router.get('/:id', ctrl.getOne);

module.exports = router;