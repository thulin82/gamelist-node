var express = require('express');
var router = express.Router();
var basicController = require('./controllers/basicController.js');
var idController = require('./controllers/idController.js');
var searchController = require('./controllers/searchController.js');

router.get('/', basicController.get);
router.post('/', basicController.post);
router.put('/', basicController.put);
router.delete('/', basicController.delete);

router.get('/search/:name', searchController.get);
router.get('/id/:nr', idController.get);

module.exports = router;
