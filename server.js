'use strict';

require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
let dbRef;

// DB connection
const dbClient = require('mongodb').MongoClient;
const dbUrl = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/url-shortener`;
dbClient.connect(dbUrl, (err, db) => {
  console.log(`connected to db: ${dbUrl}`);
  dbRef = db;
});

// Middleware
app.use(bodyParser.json());

// Controllers
const shortener = require('./controllers/shortener');
const lookup = require('./controllers/lookup');

// Hashes and returns shortened URL
app.post('/shorten', (req, res) => { shortener(req, res, dbRef) });
// Route to find shortened URL's long URL
app.get('/:url_hash', (req, res) => { lookup(req, res, dbRef) });

app.listen(PORT, () => {
  console.log('App started on PORT:', PORT);
});
