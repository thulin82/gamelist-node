var hltb = require('howlongtobeat');
var hltbService = new hltb.HowLongToBeatService();

class SearchController {
    get(req, res) {
        hltbService.search(req.params.name).then(result => {
            result.sort(function(a, b) {
                return a.similarity < b.similarity;
            });
            res.json(result);
        });
    }
}
module.exports = new SearchController();
