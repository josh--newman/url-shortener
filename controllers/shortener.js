'use strict';

const crypto = require('crypto');
const co = require('co');

const isValidUrl = require('../utils/helpers').isValidUrl;
const formatUrl = require('../utils/helpers').formatUrl;

function sendUrl(req, res, hash) {
  res.status(200).json({
    url: `http://${req.hostname}/${hash}`
  });
}

module.exports = (req, res, dbRef) => {
  if (req.body.hasOwnProperty('url')) {
    const url = req.body.url;

    // Validate and correct URL
    if (!isValidUrl(url)) {
      res.status(400).json({
        message: "The URL you entered is not valid."
      })
    }

    // Format the URL if needed
    const formattedUrl = formatUrl(url);

    // Hash the URL
    let hash = crypto.createHash('sha256');
    hash.update(formattedUrl);

    // Get hash as string and truncate to last 6 characters
    hash = hash.digest('hex');
    const truncateHash = hash.substring(hash.length - 6, hash.length);

    // Save new document in DB: { hash => url }
    co(function*() {
      const urlsColl = dbRef.collection('urls');

      // Check if document exists in DB first
      let match = yield urlsColl.findOne({hash: truncateHash});
      if (match) {
        sendUrl(req, res, match.hash);
      }
      else {
        // Save to DB
        yield urlsColl.insertOne({ hash: truncateHash, url: formattedUrl });
        sendUrl(req, res, truncateHash);
      }

    }).catch((err) => {
      console.log(err);
      res.sendStatus(500) // Internal Server Error
    });

  }
  else {
    res.sendStatus(400); // Bad Request
  }

};
