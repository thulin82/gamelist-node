var hltb = require('howlongtobeat');
var hltbService = new hltb.HowLongToBeatService();

class IdController {
    get(req, res) {
        hltbService.detail(req.params.nr).then(result => {
            res.json(result);
        });
    }
}
module.exports = new IdController();
