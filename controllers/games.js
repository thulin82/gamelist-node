/* eslint-disable no-unused-vars */
const hltb = require('howlongtobeat');
const hltbService = new hltb.HowLongToBeatService();

// @desc Get a game from ID
// @route GET /api/v1/games/:id
// @access Public
exports.getGame = async (req, res, next) => {
    const game = await hltbService.detail(req.params.id);
    res.status(200).json({ success: true, data: game });
};

// @desc Find games by name
// @route GET /api/v1/games/find/:name
// @access Public
exports.findGame = async (req, res, next) => {
    const games = await hltbService.search(req.params.name);
    games.sort(function (a, b) {
        var x = a.similarity < b.similarity ? 1 : -1;
        return x;
    });
    res.status(200).json({ success: true, count: games.length, data: games });
};

// @desc Find the most similar game by name
// @route GET /api/v1/games/findone/:name
// @access Public
exports.findOneGame = async (req, res, next) => {
    const games = await hltbService.search(req.params.name);
    games.sort(function (a, b) {
        var x = a.similarity < b.similarity ? 1 : -1;
        return x;
    });
    const game = await hltbService.detail(games[0].id);
    res.status(200).json({ success: true, data: game });
};
