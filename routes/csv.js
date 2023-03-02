const express = require('express');

const { parseCsv } = require('../controllers/csv');

const router = express.Router();

router.route('/').post(parseCsv);

module.exports = router;
