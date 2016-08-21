'use strict';

const isValidUrl = (url) => {
  const url_regex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
  if (url.match(url_regex)) { return true; }
  else { return false; }
};

const formatUrl = (url) => {
  let formattedUrl = url;

  if (!isValidUrl(url)) { throw Error('Invalid URL'); }

  if (!~url.indexOf('http')) {
    formattedUrl = `http://${url}`;
  }

  return formattedUrl;
};

module.exports = {
  isValidUrl,
  formatUrl
};
