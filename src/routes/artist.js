const express = require('express');
const artistController = require('../controllers/artist');

const router = express.Router();

router.post('/', artistController.create);
router.get('/', artistController.list);
router.get('/:artistId/', artistController.find);

module.exports = router;
