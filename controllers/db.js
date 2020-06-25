/* eslint-disable no-unused-vars */
const Game = require('../models/Game');

// @desc    Get all games
// @route   GET /api/v1/db
// @access  Public
exports.getGames = async (req, res, next) => {
    const games = await Game.find();

    res.status(200).json({ success: true, count: games.length, data: games });
};

// @desc    Get a single game
// @route   GET /api/v1/db/:id
// @access  Public
exports.getGame = async (req, res, next) => {
    const game = await Game.findById(req.params.id);

    if (!game) {
        res.status(400).json({ success: false, data: [] });
    }

    res.status(200).json({ success: true, data: game });
};

// @desc    Create new game
// @route   POST /api/v1/db
// @access  Public
exports.createGame = async (req, res, next) => {
    const game = await Game.create(req.body);

    res.status(201).json({ success: true, data: game });
};
