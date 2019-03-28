var express = require('express');
var router = express.Router();
var basicController = require('./controllers/basicController.js');
var hltb = require('howlongtobeat');
var hltbService = new hltb.HowLongToBeatService();

router.get('/', basicController.get);
router.post('/', basicController.post);
router.put('/', basicController.put);
router.delete('/', basicController.delete);

router.get('/search/:name', (req, res) => {
    hltbService.search(req.params.name).then(result => {
        res.json(result);
    });
});
router.get('/id/:nr', (req, res) => {
    hltbService.detail(req.params.nr).then(result => {
        res.json(result);
    });
});
module.exports = router;
