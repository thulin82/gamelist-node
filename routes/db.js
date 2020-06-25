const express = require('express');

const { getGame, getGames, createGame } = require('../controllers/db');

const router = express.Router();

router.route('/').get(getGames).post(createGame);
router.route('/:id').get(getGame);

module.exports = router;
