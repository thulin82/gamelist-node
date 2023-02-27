const express = require('express');

const { searchGame } = require('../controllers/games');

const router = express.Router();

router.route('/search/:name').get(searchGame);

module.exports = router;
