var express = require('express');
var router = express.Router();
const hltb = require('howlongtobeat');
const hltbService = new hltb.HowLongToBeatService();

router.get('/', (req, res) => res.send('Hello World!'))
router.post('/', (req, res) => res.status(204).send())
router.put('/', (req, res) => res.status(204).send())
router.delete('/', (req, res) => res.status(204).send())

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