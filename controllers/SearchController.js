var hltb = require('howlongtobeat');
var hltbService = new hltb.HowLongToBeatService();

class SearchController {
    search(req, res) {
        hltbService.search(req.params.name).then(result => {
            result.sort(function(a, b) {
                return a.similarity < b.similarity;
            });
            res.json(result);
        });
    }
    one(req, res) {
        hltbService.search(req.params.title).then(result => {
            result.sort(function(a, b) {
                return a.similarity < b.similarity;
            });
            res.json(result[0]);
        });
    }
}
module.exports = new SearchController();
