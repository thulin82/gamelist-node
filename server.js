const express = require('express');
const dotenv = require('dotenv');
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

app.listen(PORT);

module.exports = app;
