var hltb = require('howlongtobeat');
var hltbService = new hltb.HowLongToBeatService();

class searchController {
    get(req, res) {
        hltbService.search(req.params.name).then(result => {
            res.json(result);
        });
    }
}
module.exports = new searchController();
