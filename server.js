const express = require('express');
const dotenv = require('dotenv');
// eslint-disable-next-line no-unused-vars
const colors = require('colors');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

connectDB();

const games = require('./routes/games');
const db = require('./routes/db');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/v1/games', games);
app.use('/api/v1/db', db);

const PORT = process.env.PORT || 4567;

app.listen(
    PORT,
    console.log(`Server started in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);

module.exports = app;
