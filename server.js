const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

connectDB();

const games = require('./routes/games');
const db = require('./routes/db');
const csv = require('./routes/csv');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/v1/games', games);
app.use('/api/v1/db', db);
app.use('/api/v1/csv', upload.single('file'), csv);

const PORT = process.env.PORT || 4567;

app.listen(PORT);

module.exports = app;
