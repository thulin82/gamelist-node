const express = require('express');
const dotenv = require('dotenv');
// eslint-disable-next-line no-unused-vars
const colors = require('colors');
const cors = require('cors');
const routes = require('./routes');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use('', routes);

const PORT = process.env.PORT || 8888;

app.listen(
    PORT,
    console.log(`Server started in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);
