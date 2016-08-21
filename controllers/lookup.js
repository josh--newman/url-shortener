'use strict';

module.exports = (req, res, dbRef) => {
  const urlsColl = dbRef.collection('urls');
  const hash = req.url.replace('/','');

  urlsColl.findOne({hash: hash}, (err, match) => {

    if (match) {
      // put http:// on front if needed
      res.redirect(match.url);
    }
    else {
      res.send('No matches found');
    }

  });
};
