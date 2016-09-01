'use strict';

const path = require('path');

module.exports = (req, res, dbRef) => {
  const urlsColl = dbRef.collection('urls');
  const hash = req.url.replace('/','');

  urlsColl.findOne({hash: hash}, (err, match) => {

    if (match) {
      res.redirect(match.url);
    }
    else {
      res.sendStatus(204); // No Content
    }

  });
};
