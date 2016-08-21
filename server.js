'use strict';

require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

// DB connection
const mongoose = require('mongoose');
const dbUrl = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/url-shortener`;
mongoose.connect(dbUrl);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log(`connected to db: ${dbUrl}`);
});

// Middleware
app.use(bodyParser.json());

// Controllers
const shortener = require('./controllers/shortener');
const lookup = require('./controllers/lookup');

// Hashes and returns shortened URL
app.post('/shorten', (req, res) => { shortener(req, res, db) });
// Route to find shortened URL's long URL
app.get('/:url_hash', (req, res) => { lookup(req, res, db) });

app.listen(PORT, () => {
  console.log('App started on PORT:', PORT);
});
