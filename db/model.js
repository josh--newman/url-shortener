'use strict';

const mongoose = require('mongoose');

const urlSchema = mongoose.Schema({
  hash: String
});

module.exports = mongoose.model('URL', urlSchema);
