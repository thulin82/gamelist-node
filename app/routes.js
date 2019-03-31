var express = require('express');
var router = express.Router();
var basicController = require('./controllers/BasicController');
var idController = require('./controllers/IdController');
var searchController = require('./controllers/SearchController');

router.get('/', basicController.get);
router.post('/', basicController.post);
router.put('/', basicController.put);
router.delete('/', basicController.delete);

router.get('/search/:name', searchController.search);
router.get('/one/:title', searchController.one);
router.get('/id/:nr', idController.get);

module.exports = router;
