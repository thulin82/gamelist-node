var express = require('express');
var router = express.Router();
var basicController = require('./controllers/BasicController');
var idController = require('./controllers/IdController');
var searchController = require('./controllers/SearchController');
var dbController = require('./controllers/DbController');

router.get('/', basicController.get);
router.post('/', basicController.post);
router.put('/', basicController.put);
router.delete('/', basicController.delete);

router.get('/search/:name', searchController.search);
router.get('/one/:title', searchController.one);

router.get('/id/:nr', idController.get);

router.get('/db/:nr', dbController.get);
//router.post('/', dbController.post);
//router.put('/', dbController.put);
router.delete('/db/:nr', dbController.delete);

module.exports = router;
