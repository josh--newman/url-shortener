'use strict';

const isValidUrl = (url) => {
  const url_regex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
  if (url.match(url_regex)) { return true; }
  else { return false; }
};

const formUrl = (url) => {
  return undefined;
};

module.exports = {
  isValidUrl,
  formUrl
};
