const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Hashes and returns shortened URL
app.post('/shorten', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// Route to find shortened URL's long URL
app.get('/:url_hash', (req, res) => {
  res.send('Going to look up hash');
});

app.listen(PORT, () => {
  console.log('App started on PORT:', PORT);
});
