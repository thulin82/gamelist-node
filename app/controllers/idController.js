var hltb = require('howlongtobeat');
var hltbService = new hltb.HowLongToBeatService();

class idController {
    get(req, res) {
        hltbService.detail(req.params.nr).then(result => {
            res.json(result);
        });
    }
}
module.exports = new idController();
