const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
    gameId: {
        type: Number,
        required: [true, 'A gameID is required'],
        unique: true,
        trim: true
    },
    name: {
        type: String,
        required: [true, 'A name is required'],
        unique: true,
        trim: true
    },
    description: {
        type: String,
        maxlength: [500, 'Description cannot be longer than 500 characters']
    },
    image: {
        type: String,
        default: 'no-photo.jpg'
    },
    gameTimes: {
        gameplayMain: Number,
        gameplayMainExtra: Number,
        gameplayCompletionist: Number
    }
});

module.exports = mongoose.model('Game', GameSchema);
