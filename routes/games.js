const express = require('express');

const { getGame, findGame, findOneGame } = require('../controllers/games');

const router = express.Router();

router.route('/:id').get(getGame);
router.route('/find/:name').get(findGame);
router.route('/findone/:name').get(findOneGame);

module.exports = router;
